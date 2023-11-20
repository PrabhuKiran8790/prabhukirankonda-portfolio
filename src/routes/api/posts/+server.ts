import type { Post } from '$lib/types';
import { json, type RequestHandler } from '@sveltejs/kit';
import { dev } from '$app/environment'
import { localToGithubURL } from '$lib/config';

const getPosts = async () => {
	let posts: Post[] = [];

	const mdPaths = import.meta.glob('/posts/*/*.md', { eager: true });

	for (const path in mdPaths) {
		const file = mdPaths[path];
		const slug = path.split('/').slice(2)[0];

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } as Post;
			if (post.image && !dev && post.image.startsWith('/')) {
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

export const GET: RequestHandler = async ({ url }) => {
	const posts = await getPosts();
	if (url.searchParams.get('latest') == 'true') {
		return json([posts[0]]);
	}
	return json(posts);
};
