import { j as getSeriesPostByCoverFolder } from "../../../../chunks/posts.js";
import { e as error } from "../../../../chunks/index.js";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const load = async ({ params }) => {
  let post;
  let folder = "";
  let fileName = "";
  const pattern = /-spn\d+-/;
  try {
    if (!pattern.test(params.slug)) {
      post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../posts/authjs-sveltekit-prisma/page.md": () => import("../../../../chunks/posts.js").then((n) => n._), "../../../../posts/dimensionality-reduction-using-auto-encoders/page.md": () => import("../../../../chunks/posts.js").then((n) => n.k), "../../../../posts/getting-started/page.md": () => import("../../../../chunks/posts.js").then((n) => n.l), "../../../../posts/gradient-descent/page.md": () => import("../../../../chunks/posts.js").then((n) => n.m), "../../../../posts/linear-regression-from-scratch/page.md": () => import("../../../../chunks/posts.js").then((n) => n.n), "../../../../posts/metadata-extraction-langchain/page.md": () => import("../../../../chunks/posts.js").then((n) => n.o) }), `../../../../posts/${params.slug}/page.md`);
    } else {
      folder = params.slug.split(pattern)[0];
      fileName = params.slug.split(pattern)[1];
      post = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../../../../series/guide-markdown-blog/config.md": () => import("../../../../chunks/posts.js").then((n) => n.p), "../../../../series/guide-markdown-blog/create-new-blog.md": () => import("../../../../chunks/posts.js").then((n) => n.q), "../../../../series/guide-markdown-blog/page.md": () => import("../../../../chunks/posts.js").then((n) => n.r), "../../../../series/guide-markdown-blog/setup.md": () => import("../../../../chunks/posts.js").then((n) => n.u) }), `../../../../series/${folder}/${fileName}.md`);
    }
  } catch (e) {
    error(404, "post not found");
  }
  if (!folder && !fileName) {
    return {
      content: post.default,
      meta: post.metadata
    };
  }
  const seriesPost = await getSeriesPostByCoverFolder(folder);
  if (seriesPost && post.metadata.tags) {
    seriesPost.tags = [.../* @__PURE__ */ new Set([...seriesPost.tags, ...post.metadata.tags])];
  }
  return {
    content: post.default,
    meta: {
      ...post.metadata,
      image: post.metadata.image || seriesPost?.image
      // if post.metadata.image is undefined, use seriesPost.image
    },
    coverFolder: folder,
    fileName,
    seriesPost
  };
};
export {
  load
};
