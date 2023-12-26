import { dev } from '$app/environment';
import { localToGithubURL } from '$lib/utils';
import type { Post, Series, SeriesPost } from '$lib/types';

export const getPosts = async () => {
	let posts: Post[] = [];

	const mdPaths = import.meta.glob('/posts/*/page.md', { eager: true });

	for (const path in mdPaths) {
		const file = mdPaths[path];
		const slug = path.split('/').slice(2)[0];

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } as Post;
			if (post.image && !dev) {
				// only convert if starts with /posts because you need to point the image to the actual github raw url
				if (typeof post.image === 'string' && post.image.startsWith('/posts')) {
					post.image = localToGithubURL({ src: post.image });
				} else if (Array.isArray(post.image)) {
					post.image = post.image.map((image) => {
						if (image.startsWith('/posts')) {
							return localToGithubURL({ src: image });
						}
						return image;
					});
				}
			}
			!post.draft && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
};

export const getSeriesPosts = async () => {
	const all_md_paths = import.meta.glob('/series/*/*.md', { eager: true });

	const SeriesCoverPageData = Object.fromEntries(
		Object.entries(all_md_paths).filter(([key]) => key.includes('/page.md'))
	);

	const blogsData = Object.fromEntries(
		Object.entries(all_md_paths).filter(([key]) => !key.includes('/page.md'))
	);

	const seriesPosts: SeriesPost[] = [];

	for (const path in SeriesCoverPageData) {
		const coverFolder = path.split('/')[2];
		const file = SeriesCoverPageData[path];

		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Omit<SeriesPost, 'slug' | 'subPosts'>;
			const { tags, image } = metadata;

			let subPosts: Series[] = [];

			for (const blog in blogsData) {
				if (blog.startsWith(`/series/${coverFolder}/`)) {
					const subPost = blogsData[blog];
					if (subPost && typeof subPost === 'object' && 'metadata' in subPost) {
						const subPostMetadata = subPost.metadata as Omit<Series, 'slug'>;
						const subPostData = {
							...subPostMetadata,
							// this is for making sure the slug is unique as cover folder cannot be a duplicate name
							// adding -spn{order} to the slug, so that we know it's a part of a series and we can render different ui for it
							slug: `${coverFolder}-spn${subPostMetadata.order}-${blog.split('/')[3].split('.')[0]}`
						} as Series;

						// add the tags from the series cover page to the subpost
						if (subPostData.tags) {
							subPostData.tags = [...tags, ...subPostData.tags];
						} else {
							subPostData.tags = tags;
						}

						// if the subpost doesn't have an image, use the series cover image
						if (!subPostData.image) {
							subPostData.image = image;
						}

						// if the subpost image is local, convert it to github raw url
						if (subPostData.image && !dev) {
							if (
								typeof subPostData.image === 'string' &&
								subPostData.image.startsWith('/series')
							) {
								subPostData.image = localToGithubURL({ src: subPostData.image });
							} else if (Array.isArray(subPostData.image)) {
								subPostData.image = subPostData.image.map((image) => {
									if (image.startsWith('/series')) {
										return localToGithubURL({ src: image });
									}
									return image;
								});
							}
						}

						!subPostMetadata.draft && subPosts.push(subPostData);
					}
				}
			}

			subPosts = subPosts.sort((first, second) => first.order - second.order);
			if (metadata.image && !dev) {
				if (typeof metadata.image === 'string' && metadata.image.startsWith('/series')) {
					metadata.image = localToGithubURL({ src: metadata.image });
				} else if (Array.isArray(metadata.image)) {
					metadata.image = metadata.image.map((image) => {
						if (image.startsWith('/series')) {
							return localToGithubURL({ src: image });
						}
						return image;
					});
				}
			}

			!metadata.draft &&
				seriesPosts.push({
					...metadata,
					slug: subPosts[0].slug,
					subPosts,
					parts: subPosts.length,
					coverFolder
				});
		}
	}
	return seriesPosts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);
};

export const getSeriesPostByCoverFolder = async (coverFolder: string) => {
	const seriesPosts = await getSeriesPosts();
	return seriesPosts.find((seriesPost) => seriesPost.coverFolder === coverFolder);
};

export const tagToSlug = (tag: string) => {
	return tag.replace(/ /g, '-').toLowerCase();
};

// spagetti code, but it works :D
export const groupPostsByTag = async () => {
	const posts = await getPosts();
	const seriesPosts = await getSeriesPosts();

	const allTags = new Set<string>();

	// sourcery skip: avoid-function-declarations-in-blocks
	function addTags(tags: string[]) {
		for (const tag of tags) {
			allTags.add(tag);
		}
	}

	for (const post of posts) {
		addTags(post.tags);
	}

	for (const seriesPost of seriesPosts) {
		addTags(seriesPost.tags);

		for (const subPost of seriesPost.subPosts) {
			addTags(subPost.tags);
		}
	}

	const uniqueTagsArray = Array.from(allTags);

	const postsByTag: Record<string, { posts: Post[]; count: number; slug: string }> = {};

	// create a record of tags, compatable with url by replacing spaces with dashes and making it lowercase
	// this is for the url
	const tagsSlugMap: Record<string, string> = {};
	for (const tag of uniqueTagsArray) {
		const slug = tagToSlug(tag);
		tagsSlugMap[slug] = tag;
	}

	for (const tag of uniqueTagsArray) {
		postsByTag[tag] = {
			posts: posts.filter((post) => post.tags.includes(tag)),
			count: posts.filter((post) => post.tags.includes(tag)).length,
			slug: tagToSlug(tag) // replace spaces with dashes and make it lowercase for the url
		};

		for (const seriesPost of seriesPosts) {
			if (seriesPost.tags.includes(tag)) {
				postsByTag[tag].posts.push(seriesPost);
				postsByTag[tag].count += 1;
			}
			for (const subPost of seriesPost.subPosts) {
				if (subPost.tags.includes(tag)) {
					postsByTag[tag].posts.push(subPost);
					postsByTag[tag].count += 1;
				}
			}
		}
	}

	const seriesPostsByTag: Record<string, { seriesPosts: SeriesPost[]; count: number }> = {};

	uniqueTagsArray.forEach((tag) => {
		const filteredSeriesPosts = seriesPosts.filter((seriesPost) => seriesPost.tags.includes(tag));

		if (filteredSeriesPosts.length > 0) {
			seriesPostsByTag[tag] = {
				seriesPosts: filteredSeriesPosts,
				count: filteredSeriesPosts.length
			};
		} else {
			delete seriesPostsByTag[tag];
		}
	});

	const filterPosts = (tag: string) => {
		if (postsByTag[tag]?.posts) {
			postsByTag[tag].posts = postsByTag[tag].posts.filter((post) => !post.subPosts);
			postsByTag[tag].count = postsByTag[tag].posts.length;
		}
	};

	for (const category in postsByTag) {
		filterPosts(category);
	}

	return {
		tagsSlugMap,
		uniqueTagsArray,
		postsByTag
	};
};
