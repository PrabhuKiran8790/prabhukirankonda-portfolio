import { c as create_ssr_component, v as validate_component, m as missing_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { content } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mb-20 mdsvex" id="mdsvex">${validate_component(content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
