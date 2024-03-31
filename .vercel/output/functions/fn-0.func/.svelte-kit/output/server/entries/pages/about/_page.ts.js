const load = async () => {
  const post = await import("../../../chunks/about.js");
  return {
    content: post.default,
    meta: post.metadata
  };
};
export {
  load
};
