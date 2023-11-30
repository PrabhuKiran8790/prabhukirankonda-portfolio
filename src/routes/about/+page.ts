export const load = async () => {
	const post = await import('../../../about/about.md');

	return {
		content: post.default,
		meta: post.metadata
	};
};
