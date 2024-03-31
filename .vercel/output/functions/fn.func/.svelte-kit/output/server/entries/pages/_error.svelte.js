import { c as create_ssr_component, h as subscribe, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { B as Button } from "../../chunks/index2.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let message;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  message = $page.status === 404 ? "Page not found" : "The blog doesn't exist";
  $$unsubscribe_page();
  return `<main class="flex h-[90vh] w-full justify-center items-center px-6 py-24 sm:py-32 lg:px-8"><div class="text-center"><p class="font-semibold text-magnum-500">${escape($page.status)}</p> <h1 class="mt-4 text-4xl font-bold tracking-tight">${escape(message)}</h1> <div class="mt-10 flex items-center justify-center gap-x-6">${$page.status !== 404 ? `${validate_component(Button, "Button").$$render($$result, { href: "/blog", class: "mt-4" }, {}, {
    default: () => {
      return `Go to Blogs`;
    }
  })}` : `${validate_component(Button, "Button").$$render($$result, { href: "/", class: "mt-4" }, {}, {
    default: () => {
      return `Back to home`;
    }
  })}`}</div></div></main>`;
});
export {
  Error as default
};
