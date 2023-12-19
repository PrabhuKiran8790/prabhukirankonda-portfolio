import { groupPostsByTag, tagToSlug } from '$lib/posts';

export const load = async ({ params }) => {
	const slug = tagToSlug(params.tag);
	const { tagsSlugMap, uniqueTagsArray, postsByTag } = await groupPostsByTag();
	const currentTag = tagsSlugMap[slug];
	return {
		currentTag,
		tags: uniqueTagsArray,
		postsByTag
	};
};
