import { c as create_ssr_component, v as validate_component, i as each, l as compute_rest_props, b as spread, d as escape_object, g as add_attribute, h as subscribe, e as escape, n as set_store_value } from "../../../chunks/ssr.js";
import { B as Blogcard, R as Root, D as Dialog_content, C as Command$1, S as Search, c as Command_input, d as Command_empty, e as Command_group, f as Command_item } from "../../../chunks/posts.js";
import { I as Icon, c as cn, B as Button, f as formatDate, d as goto } from "../../../chunks/index2.js";
import "clsx";
import { M as Masonry } from "../../../chunks/masonry.js";
import { x as getCtx, y as isHTMLElement, z as getState } from "../../../chunks/marked.esm.js";
import { k as derived } from "../../../chunks/exports.js";
import { s as searchOpen } from "../../../chunks/theme-toggle.js";
import { B as Badge } from "../../../chunks/badge.js";
const Command = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "command" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const CommandIcon = Command;
const All_blogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  return `<div class="max-w-7xl md:mx-auto gap-x-[5px]">${validate_component(Masonry, "Masonry").$$render(
    $$result,
    {
      gridGap: "0.75rem",
      items: posts,
      stretchFirst: false,
      reset: true
    },
    {},
    {
      default: () => {
        return `${each(posts, (post) => {
          return `${validate_component(Blogcard, "Blogcard").$$render($$result, { post, shallow: true }, {}, {})}`;
        })}`;
      }
    }
  )} </div>`;
});
const CommandList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["el", "asChild"]);
  const { ids } = getCtx();
  let { el = void 0 } = $$props;
  let { asChild = false } = $$props;
  function sizerAction(node) {
    let animationFrame;
    const listEl = node.closest("[data-cmdk-list]");
    if (!isHTMLElement(listEl)) {
      return;
    }
    const observer = new ResizeObserver(() => {
      animationFrame = requestAnimationFrame(() => {
        const height = node.offsetHeight;
        listEl.style.setProperty("--cmdk-list-height", height.toFixed(1) + "px");
      });
    });
    observer.observe(node);
    return {
      destroy() {
        cancelAnimationFrame(animationFrame);
        observer.unobserve(node);
      }
    };
  }
  const listAttrs = {
    "data-cmdk-list": "",
    role: "listbox",
    "aria-label": "Suggestions",
    id: ids.list,
    "aria-labelledby": ids.input
  };
  const sizerAttrs = { "data-cmdk-list-sizer": "" };
  const list = { attrs: listAttrs };
  const sizer = { attrs: sizerAttrs, action: sizerAction };
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  return `${asChild ? `${slots.default ? slots.default({ list, sizer }) : ``}` : `<div${spread([escape_object(listAttrs), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}><div${spread([escape_object(sizerAttrs)], {})}>${slots.default ? slots.default({}) : ``}</div></div>`}`;
});
const CommandSeparator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["alwaysRender", "asChild"]);
  let $render, $$unsubscribe_render;
  let { alwaysRender = false } = $$props;
  let { asChild = false } = $$props;
  const state = getState();
  const render = derived(state, ($state) => !$state.search);
  $$unsubscribe_render = subscribe(render, (value) => $render = value);
  const attrs = {
    "data-cmdk-separator": "",
    role: "separator"
  };
  if ($$props.alwaysRender === void 0 && $$bindings.alwaysRender && alwaysRender !== void 0)
    $$bindings.alwaysRender(alwaysRender);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  $$unsubscribe_render();
  return `${$render || alwaysRender ? `${asChild ? `${slots.default ? slots.default({ attrs }) : ``}` : `<div${spread([escape_object(attrs), escape_object($$restProps)], {})}></div>`}` : ``}`;
});
const Command_dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "value"]);
  let { open = false } = $$props;
  let { value = void 0 } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Root, "Dialog.Root").$$render(
      $$result,
      Object.assign({}, $$restProps, { open }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Dialog_content, "Dialog.Content").$$render($$result, { class: "p-0 overflow-hidden shadow-lg" }, {}, {
            default: () => {
              return `${validate_component(Command$1, "Command").$$render(
                $$result,
                Object.assign(
                  {},
                  {
                    class: "[&_[data-cmdk-group-heading]]:px-2 [&_[data-cmdk-group-heading]]:font-medium [&_[data-cmdk-group-heading]]:text-muted-foreground [&_[data-cmdk-group]:not([hidden])_~[data-cmdk-group]]:pt-0 [&_[data-cmdk-group]]:px-2 [&_[data-cmdk-input-wrapper]_svg]:h-5 [&_[data-cmdk-input-wrapper]_svg]:w-5 [&_[data-cmdk-input]]:h-12 [&_[data-cmdk-item]]:px-2 [&_[data-cmdk-item]]:py-3 [&_[data-cmdk-item]_svg]:h-5 [&_[data-cmdk-item]_svg]:w-5"
                  },
                  $$restProps,
                  { value }
                ),
                {
                  value: ($$value) => {
                    value = $$value;
                    $$settled = false;
                  }
                },
                {
                  default: () => {
                    return `${slots.default ? slots.default({}) : ``}`;
                  }
                }
              )}`;
            }
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Command_list = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(CommandList, "CommandPrimitive.List").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const Command_separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(CommandSeparator, "CommandPrimitive.Separator").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("-mx-1 h-px bg-border", className)
      },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Search_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["data"]);
  let $searchOpen, $$unsubscribe_searchOpen;
  $$unsubscribe_searchOpen = subscribe(searchOpen, (value) => $searchOpen = value);
  let { data } = $$props;
  function runCommand(cmd) {
    set_store_value(searchOpen, $searchOpen = false, $searchOpen);
    cmd();
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_searchOpen();
  return `${validate_component(Button, "Button").$$render(
    $$result,
    Object.assign(
      {},
      { variant: "outline" },
      {
        class: cn("relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-96 cursor-text")
      },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `<span class="inline-flex items-center">${validate_component(Search, "Search").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
		Search blogs</span> <kbd class="pointer-events-none absolute right-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"><span class="text-xs"><div class="flex items-center">${validate_component(CommandIcon, "CommandIcon").$$render($$result, { class: "w-3 h-3" }, {}, {})} <h1 data-svelte-h="svelte-b8grih">/ctrl K</h1></div></span></kbd>`;
      }
    }
  )} ${validate_component(Command_dialog, "Command.Dialog").$$render(
    $$result,
    {
      open: $searchOpen,
      onOpenChange: () => {
        $searchOpen = !$searchOpen;
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(Command_input, "Command.Input").$$render(
          $$result,
          {
            placeholder: "Type a command or search..."
          },
          {},
          {}
        )} ${validate_component(Command_list, "Command.List").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Command_empty, "Command.Empty").$$render($$result, {}, {}, {
              default: () => {
                return `No results found.`;
              }
            })} ${validate_component(Command_group, "Command.Group").$$render($$result, { heading: "All blogs" }, {}, {
              default: () => {
                return `${each(data.posts, (post) => {
                  return `${validate_component(Command_item, "Command.Item").$$render(
                    $$result,
                    {
                      onSelect: () => {
                        runCommand(() => {
                          post.slug && goto(`/blog/${post.slug}`);
                        });
                      },
                      class: "cursor-pointer"
                    },
                    {},
                    {
                      default: () => {
                        return `<div class="flex flex-col w-full gap-1"><div class="flex items-center justify-between w-full"><div><h1>${escape(post.title)}</h1></div> <div><h1 class="text-xs text-muted-foreground">${escape(formatDate(post.date))}</h1> </div></div> <div class="flex items-center gap-2 flex-wrap">${each(post.tags, (tags) => {
                          return `${validate_component(Badge, "Badge").$$render(
                            $$result,
                            {
                              class: "bg-gray-300 rounded-md dark:bg-zinc-600",
                              variant: "outline"
                            },
                            {},
                            {
                              default: () => {
                                return `${escape(tags)}`;
                              }
                            }
                          )}`;
                        })} </div></div> `;
                      }
                    }
                  )}`;
                })}`;
              }
            })} ${validate_component(Command_separator, "Command.Separator").$$render($$result, {}, {}, {})} ${each(data.seriesPosts, (post) => {
              return `${validate_component(Command_group, "Command.Group").$$render(
                $$result,
                {
                  heading: `Series: ${post.title} - ${post.parts} Parts`,
                  class: "pb-3"
                },
                {},
                {
                  default: () => {
                    return `${each(post.subPosts, (subPost) => {
                      return `${validate_component(Command_item, "Command.Item").$$render(
                        $$result,
                        {
                          onSelect: () => {
                            runCommand(() => {
                              subPost.slug && goto(`/blog/${subPost.slug}`);
                            });
                          },
                          class: "cursor-pointer"
                        },
                        {},
                        {
                          default: () => {
                            return `<div class="flex flex-col w-full gap-1"><div class="flex items-center justify-between w-full"><div> <span class="sr-only">Series: ${escape(subPost.title)}</span> <h1>${escape(subPost.title)}</h1></div> <div><h1 class="text-xs text-muted-foreground">${escape(formatDate(subPost.date))}</h1> </div></div> <div class="flex items-center gap-2 flex-wrap">${each(subPost.tags, (tags) => {
                              return `${validate_component(Badge, "Badge").$$render(
                                $$result,
                                {
                                  class: "bg-gray-300 rounded-md dark:bg-zinc-600",
                                  variant: "outline"
                                },
                                {},
                                {
                                  default: () => {
                                    return `${escape(tags)}`;
                                  }
                                }
                              )}`;
                            })}</div> </div>`;
                          }
                        }
                      )}`;
                    })} `;
                  }
                }
              )} ${validate_component(Command_separator, "Command.Separator").$$render($$result, {}, {}, {})}`;
            })}`;
          }
        })}`;
      }
    }
  )}`;
});
const Series_blogs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { seriesPosts } = $$props;
  if ($$props.seriesPosts === void 0 && $$bindings.seriesPosts && seriesPosts !== void 0)
    $$bindings.seriesPosts(seriesPosts);
  return `<div class="max-w-7xl md:mx-auto gap-x-[5px]">${validate_component(Masonry, "Masonry").$$render(
    $$result,
    {
      gridGap: "0.75rem",
      items: seriesPosts,
      stretchFirst: false,
      reset: true
    },
    {},
    {
      default: () => {
        return `${each(seriesPosts, (post) => {
          return `${validate_component(Blogcard, "Blogcard").$$render($$result, { post, shallow: true }, {}, {})}`;
        })}`;
      }
    }
  )}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="space-y-7 mb-16"><div class="flex flex-col p-2 mt-4 gap-9 md:mt-11"><div class="flex flex-col items-center px-2 gap-5"><div class="flex flex-col items-center gap-2" data-svelte-h="svelte-yk15h0"><h1 class="text-5xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text">Blogs</h1> <h1>Here are some of my writings</h1></div> ${validate_component(Search_1, "Search").$$render($$result, { data }, {}, {})}</div></div> <div>${validate_component(All_blogs, "AllBlogs").$$render($$result, { posts: data.posts }, {}, {})}</div> ${data.seriesPosts && data.seriesPosts.length > 0 ? `<div data-svelte-h="svelte-r51wqe"><div class="flex flex-col items-center justify-center gap-2"><h1 class="text-5xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text">Blog Series</h1> <h1>a series of blogs</h1></div></div> ${validate_component(Series_blogs, "SeriesBlogs").$$render($$result, { seriesPosts: data.seriesPosts }, {}, {})}` : ``}</div>`;
});
export {
  Page as default
};
