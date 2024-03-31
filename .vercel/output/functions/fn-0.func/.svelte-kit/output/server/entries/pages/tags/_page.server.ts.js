import { b as groupPostsByTag } from "../../../chunks/posts.js";
const load = async () => {
  const { uniqueTagsArray, postsByTag } = await groupPostsByTag();
  return {
    tags: uniqueTagsArray,
    postsByTag
  };
};
export {
  load
};
