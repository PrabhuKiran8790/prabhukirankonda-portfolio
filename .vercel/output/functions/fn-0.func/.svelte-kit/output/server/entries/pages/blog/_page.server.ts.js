const load = async ({ fetch }) => {
  const data = await fetch("/api/posts");
  const seriesBlogs = await fetch("api/posts?series=true");
  const posts = await data.json();
  const seriesPosts = await seriesBlogs.json();
  return {
    posts,
    seriesPosts
  };
};
export {
  load
};
