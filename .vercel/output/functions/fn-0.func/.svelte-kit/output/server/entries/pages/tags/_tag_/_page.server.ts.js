import { t as tagToSlug, b as groupPostsByTag } from "../../../../chunks/posts.js";
const load = async ({ params }) => {
  const slug = tagToSlug(params.tag);
  const { tagsSlugMap, uniqueTagsArray, postsByTag } = await groupPostsByTag();
  const currentTag = tagsSlugMap[slug];
  return {
    currentTag,
    tags: uniqueTagsArray,
    postsByTag
  };
};
export {
  load
};
