import { c as create_ssr_component, i as each, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/marked.esm.js";
import "clsx";
import "../../../chunks/index2.js";
import { h as Tag } from "../../../chunks/posts.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { tags, postsByTag } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="p-4 mt-4 md:mt-8 flex flex-col gap-10"><div class="flex flex-col items-start md:items-center justify-center gap-8" data-svelte-h="svelte-4ytcmb"><h1 class="text-5xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text">Tags</h1> <div></div></div> <div class="max-w-7xl md:mx-auto md:px-20"><div class="flex gap-5 flex-wrap">${each(tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render(
      $$result,
      {
        tag,
        count: postsByTag[tag].count,
        href: `/tags/${postsByTag[tag].slug}`
      },
      {},
      {}
    )}`;
  })}</div></div></div>`;
});
export {
  Page as default
};
