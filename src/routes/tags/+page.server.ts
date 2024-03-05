import { groupPostsByTag } from '$lib/posts.js';

export const load = async () => {
	const { uniqueTagsArray, postsByTag } = await groupPostsByTag();
	return {
		tags: uniqueTagsArray,
		postsByTag
	};
};
