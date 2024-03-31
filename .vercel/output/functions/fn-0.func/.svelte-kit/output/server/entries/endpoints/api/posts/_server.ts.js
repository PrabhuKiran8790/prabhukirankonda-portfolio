import { j as json } from "../../../../chunks/index.js";
import { g as getPosts, a as getSeriesPosts, b as groupPostsByTag } from "../../../../chunks/posts.js";
const GET = async ({ url }) => {
  const posts = await getPosts();
  const seriesPosts = await getSeriesPosts();
  const postLatest = posts[0];
  const seriesLatest = seriesPosts[0];
  const latest = postLatest.date > seriesLatest.date ? postLatest : seriesLatest;
  if (url.searchParams.get("latest") == "true") {
    if (url.searchParams.get("series") == "true") {
      return json(seriesLatest);
    }
    return json([latest]);
  }
  if (url.searchParams.get("series") == "true") {
    return json(seriesPosts);
  }
  if (url.searchParams.get("tags") == "true") {
    return json(await groupPostsByTag());
  }
  return json(posts);
};
export {
  GET
};
