import type { SeriesPost, Post } from '$lib/types';

export const load = async ({ fetch }) => {
	const data = await fetch('/api/posts');
	const seriesBlogs = await fetch('api/posts?series=true');
	const posts: Post[] = await data.json();
	const seriesPosts: SeriesPost[] = await seriesBlogs.json();

	return {
		posts,
		seriesPosts
	};
};
