import { c as create_ssr_component, v as validate_component, i as each } from "../../../chunks/ssr.js";
import "../../../chunks/marked.esm.js";
import "clsx";
import "../../../chunks/index2.js";
import { p as projects, P as Project_card } from "../../../chunks/projects.js";
import { M as Masonry } from "../../../chunks/masonry.js";
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  projects.length;
  return ` <div class="max-w-7xl md:mx-auto">${validate_component(Masonry, "Masonry").$$render(
    $$result,
    {
      items: projects,
      gridGap: "0.75rem",
      stretchFirst: false,
      reset: true
    },
    {},
    {
      default: () => {
        return `${each(projects, (project) => {
          return `${validate_component(Project_card, "ProjectCard").$$render($$result, { project }, {}, {})}`;
        })}`;
      }
    }
  )}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="p-4 mt-4 md:mt-8" data-svelte-h="svelte-o4ibbr"><div class="flex flex-col items-center justify-center gap-2"><h1 class="text-5xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text">Projects</h1> <h1>I like to build things. Here are some of the things that I&#39;ve built.</h1></div></div> <div class="mt-5">${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
