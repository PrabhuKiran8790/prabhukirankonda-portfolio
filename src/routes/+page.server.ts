import type { Post } from '$lib/types';

export async function load({ fetch }) {
	const response = await fetch('api/posts?latest=true');
	const posts: Post[] = await response.json();
	return {
		posts
	};
}
