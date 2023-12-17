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
			if (post.image && !dev && post.image.startsWith('/posts')) {
				// only convert if starts with /posts because you need to point the image to the actual github raw url
				post.image = localToGithubURL({ src: post.image });
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
			const { tags } = metadata;

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
							slug: `${coverFolder}-spn${subPostMetadata.order}-${blog.split('/')[3].split('.')[0]}`,
						} as Series;

						if (subPostData.tags) {
							subPostData.tags = [...tags, ...subPostData.tags];
						} else {
							subPostData.tags = tags;
						}
						if (subPostData.image && !dev && subPostData.image.startsWith('/series')) {
							subPostData.image = localToGithubURL({ src: subPostData.image });
						}

						!subPostMetadata.draft && subPosts.push(subPostData);
					}
				}
			}

			subPosts = subPosts.sort((first, second) => first.order - second.order);
			if (metadata.image && !dev && metadata.image.startsWith('/series')) {
				metadata.image = localToGithubURL({ src: metadata.image });
			}
            !metadata.draft && seriesPosts.push({ ...metadata, slug: subPosts[0].slug, subPosts, parts: subPosts.length, coverFolder });
		}
	}
	return seriesPosts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);
};


export const getSeriesPostByCoverFolder = async (coverFolder: string) => {
    const seriesPosts = await getSeriesPosts();
    return seriesPosts.find((seriesPost) => seriesPost.coverFolder === coverFolder);
 } 