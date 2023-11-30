import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	let post;

	try {
		post = await import(`../../../../posts/${params.slug}/page.md`);
	} catch (e) {
		error(404, 'post not found');
	}

	return {
		content: post.default,
		meta: post.metadata
	};
};
