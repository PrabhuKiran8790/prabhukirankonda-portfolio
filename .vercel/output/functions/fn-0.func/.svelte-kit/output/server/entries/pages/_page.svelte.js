import { c as create_ssr_component, v as validate_component, g as add_attribute, i as each, m as missing_component, e as escape } from "../../chunks/ssr.js";
import "../../chunks/marked.esm.js";
import "clsx";
import { I as Icon, w as whatsNew, B as Button, c as cn, b as buttonVariants, g as getSocials } from "../../chunks/index2.js";
import { P as ProfilePicture } from "../../chunks/profile_picture.js";
import { B as Blogcard } from "../../chunks/posts.js";
import { p as projects, P as Project_card } from "../../chunks/projects.js";
import { M as Masonry } from "../../chunks/masonry.js";
const Mailbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"
      }
    ],
    ["polyline", { "points": "15,9 18,9 18,11" }],
    [
      "path",
      {
        "d": "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0"
      }
    ],
    [
      "line",
      {
        "x1": "6",
        "x2": "7",
        "y1": "10",
        "y2": "10"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mailbox" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mailbox$1 = Mailbox;
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="md:container"><div class="items-center justify-between mt-5 md:mt-12 md:flex md:flex-row"> <img${add_attribute("src", ProfilePicture, 0)} alt="Prabhu Kiran Konda" class="block mx-auto rounded-full w-52 h-52 md:hidden"> <div class="space-y-3 md:w-1/2 md:mr-4"><div class="flex flex-col gap-4 border border-border p-2 bg-slate-100 dark:bg-zinc-900 rounded-xl mt-6 md:mt-0 text-primary"><div class="flex items-center gap-4">${validate_component(Mailbox$1, "Mailbox").$$render($$result, {}, {}, {})} <h1 class="font-semibold" data-svelte-h="svelte-1g9lx5l">What&#39;s New?</h1></div> <div><!-- HTML_TAG_START -->${whatsNew}<!-- HTML_TAG_END --></div></div> <h1 class="font-bold md:text-xl" data-svelte-h="svelte-189ktrd">Hi, I&#39;m</h1> <h1 class="text-2xl font-bold md:text-5xl" data-svelte-h="svelte-16vz6v4">Prabhu Kiran Konda</h1> <p data-svelte-h="svelte-1o80kvb">a software developer from India. I specialize in Python, Machine Learning, and full stack
				development. I’m currently seeking software developer roles to further my career. In my free
				time, I enjoy writing technical blogs and sharing my journey with others. If you&#39;d like to
				get in touch, feel free to reach out to me.</p> ${validate_component(Social_buttons, "SocialButtons").$$render($$result, {}, {}, {})}</div> <img${add_attribute("src", ProfilePicture, 0)} alt="Prabhu Kiran Konda" class="hidden rounded-full md:block h-28 w-28 md:h-64 md:w-64 md:self-center"></div></div>`;
});
const Latest_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let post = data.posts[0];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="mt-12"><div class="md:container"><div class="flex flex-col items-start justify-between md:flex-row md:items-center space-y-7"><div class="space-y-3 md:w-[80%]"><div class="text-start" data-svelte-h="svelte-1qe9pgi"><h1 class="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-5xl">Latest Post</h1></div> <p class="text-muted-foreground" data-svelte-h="svelte-z4446t">Check out my latest blog post</p> <div>${validate_component(Button, "Button").$$render($$result, { href: "/blog", class: "text-base" }, {}, {
    default: () => {
      return `All blogs`;
    }
  })}</div></div> <div class="-mx-2 shadow-xl space-y-2 md:max-w-sm lg:max-w-md rounded-2xl no-highlight">${validate_component(Blogcard, "Blogcard").$$render($$result, { post, shallow: true }, {}, {})}</div></div></div></div>`;
});
const Social_buttons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="max-w-2xl py-4 mx-auto grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-4">${each(getSocials({ exclude: "Mail" }), ({ display, href, icon }) => {
    return `<a${add_attribute("href", href, 0)} target="_blank"${add_attribute("class", cn("justify-between gap-3", buttonVariants({ variant: "outline" })), 0)}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} <p>${escape(display)}</p> </a>`;
  })}</div>`;
});
const Featured_projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const featured = projects.filter((project) => {
    return project.featured;
  });
  return `<div class="flex flex-col items-start py-10 md:items-center md:container space-y-5"><div class="items-start px-4 flex flex-col gap-3 md:items-center"><h1 class="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-5xl" data-svelte-h="svelte-tpayoc">Featured Projects</h1> <p class="text-muted-foreground" data-svelte-h="svelte-122nxcf">Here are some of my featured projects</p> <div>${validate_component(Button, "Button").$$render($$result, { href: "/projects", class: "text-base" }, {}, {
    default: () => {
      return `View all Projects`;
    }
  })}</div></div></div> <div class="max-w-7xl md:mx-auto gap-x-[5px]">${validate_component(Masonry, "Masonry").$$render(
    $$result,
    {
      items: featured,
      reset: true,
      gridGap: "0.9rem"
    },
    {},
    {
      default: () => {
        return `${each(featured, (project) => {
          return `${validate_component(Project_card, "ProjectCard").$$render($$result, { project }, {}, {})}`;
        })}`;
      }
    }
  )}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><div class="p-4">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Latest_post, "LatestPost").$$render($$result, { data }, {}, {})}</div> ${validate_component(Featured_projects, "FeaturedProjects").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
