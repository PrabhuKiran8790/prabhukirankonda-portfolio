import { c as create_ssr_component, h as subscribe, l as compute_rest_props, b as spread, d as escape_object, v as validate_component, g as add_attribute, i as each, m as missing_component, e as escape } from "./ssr.js";
import "./marked.esm.js";
import "clsx";
import { S as setCtx, T as getCtx, U as getAttrs, V as setArrow, c as cn, z as flyAndScale, B as Button, g as getSocials } from "./index2.js";
import { P as ProfilePicture } from "./profile_picture.js";
import { k as derived } from "./exports.js";
import { c as createDispatcher } from "./events.js";
import { T as Techstack_icon, t as techStackArray } from "./techstack-icon.js";
import { H as H2, P, U as Ul, L as Li, A, a as Hr } from "./ul.js";
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { positioning = void 0 } = $$props;
  let { arrowSize = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { closeOnPointerDown = void 0 } = $$props;
  let { openDelay = void 0 } = $$props;
  let { closeDelay = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { forceVisible = true } = $$props;
  let { disableHoverableContent = void 0 } = $$props;
  let { group = void 0 } = $$props;
  const { states: { open: localOpen }, updateOption, ids } = setCtx({
    positioning,
    arrowSize,
    closeOnEscape,
    portal,
    closeOnPointerDown,
    openDelay,
    closeDelay,
    forceVisible,
    defaultOpen: open,
    disableHoverableContent,
    group,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    }
  });
  const idValues = derived([ids.content, ids.trigger], ([$contentId, $triggerId]) => ({ content: $contentId, trigger: $triggerId }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.positioning === void 0 && $$bindings.positioning && positioning !== void 0)
    $$bindings.positioning(positioning);
  if ($$props.arrowSize === void 0 && $$bindings.arrowSize && arrowSize !== void 0)
    $$bindings.arrowSize(arrowSize);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.closeOnPointerDown === void 0 && $$bindings.closeOnPointerDown && closeOnPointerDown !== void 0)
    $$bindings.closeOnPointerDown(closeOnPointerDown);
  if ($$props.openDelay === void 0 && $$bindings.openDelay && openDelay !== void 0)
    $$bindings.openDelay(openDelay);
  if ($$props.closeDelay === void 0 && $$bindings.closeDelay && closeDelay !== void 0)
    $$bindings.closeDelay(closeDelay);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  if ($$props.forceVisible === void 0 && $$bindings.forceVisible && forceVisible !== void 0)
    $$bindings.forceVisible(forceVisible);
  if ($$props.disableHoverableContent === void 0 && $$bindings.disableHoverableContent && disableHoverableContent !== void 0)
    $$bindings.disableHoverableContent(disableHoverableContent);
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("positioning", positioning);
  }
  {
    updateOption("arrowSize", arrowSize);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("closeOnPointerDown", closeOnPointerDown);
  }
  {
    updateOption("openDelay", openDelay);
  }
  {
    updateOption("closeDelay", closeDelay);
  }
  {
    updateOption("forceVisible", forceVisible);
  }
  {
    updateOption("group", group);
  }
  {
    updateOption("disableHoverableContent", disableHoverableContent);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const TooltipContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "sideOffset",
    "id"
  ]);
  let $content, $$unsubscribe_content;
  let $open, $$unsubscribe_open;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { sideOffset = 4 } = $$props;
  let { id = void 0 } = $$props;
  const { elements: { content }, states: { open }, ids } = getCtx(sideOffset);
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  createDispatcher();
  const attrs = getAttrs("content");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0)
    $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0)
    $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0)
    $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0)
    $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
    $$bindings.sideOffset(sideOffset);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  {
    if (id) {
      ids.content.set(id);
    }
  }
  builder = $content;
  $$unsubscribe_content();
  $$unsubscribe_open();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${inTransition && $open ? `<div${spread(
    [
      escape_object(builder),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${outTransition && $open ? `<div${spread(
    [
      escape_object(builder),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${$open ? `<div${spread(
    [
      escape_object(builder),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const TooltipTrigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "id"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  const { elements: { trigger }, ids } = getCtx();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  {
    if (id) {
      ids.trigger.set(id);
    }
  }
  builder = $trigger;
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<button${spread(
    [
      escape_object(builder),
      { type: "button" },
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</button>`}`;
});
const TooltipArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["size", "asChild"]);
  let $arrow, $$unsubscribe_arrow;
  let { size = 8 } = $$props;
  let { asChild = false } = $$props;
  const { elements: { arrow } } = setArrow(size);
  $$unsubscribe_arrow = subscribe(arrow, (value) => $arrow = value);
  const attrs = getAttrs("arrow");
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder = $arrow;
  $$unsubscribe_arrow();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<div${spread([escape_object(builder), escape_object(attrs), escape_object($$restProps)], {})}></div>`}`;
});
const TooltipPrimitive = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Root: Tooltip,
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipTrigger,
  Trigger: TooltipTrigger
}, Symbol.toStringTag, { value: "Module" }));
const Tooltip_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "sideOffset", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { sideOffset = 4 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = { y: 8, duration: 150 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
    $$bindings.sideOffset(sideOffset);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(TooltipContent, "TooltipPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      { sideOffset },
      {
        class: cn("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md", className)
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
const { Root, Trigger } = TooltipPrimitive;
const About_layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="p-4 mx-auto max-w-7xl"><div class="pb-8 space-y-2 md:pt-12 md:space-y-5" data-svelte-h="svelte-x5yyhk"><div><h1 class="text-4xl font-bold">About Me</h1></div></div> <div class="items-start space-y-14 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0"><div class="flex flex-col items-center space-x-2 xl:sticky xl:top-24"><img${add_attribute("src", ProfilePicture, 0)} alt="Prabhu Kiran Konda" class="w-56 h-56 rounded-full"> <h3 class="pt-4 pb-2 text-2xl font-bold tracking-tight leading-8" data-svelte-h="svelte-ms2fj">Prabhu Kiran Konda</h3> <div class="flex space-x-3">${each(getSocials({ exclude: "Resume" }), ({ icon, display, href }) => {
    return `${validate_component(Root, "Tooltip.Root").$$render($$result, { openDelay: 0 }, {}, {
      default: () => {
        return `${validate_component(Trigger, "Tooltip.Trigger").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render(
              $$result,
              {
                variant: "ghost",
                class: "p-2",
                href,
                target: "_blank"
              },
              {},
              {
                default: () => {
                  return `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} `;
                }
              }
            )} `;
          }
        })} ${validate_component(Tooltip_content, "Tooltip.Content").$$render($$result, { class: "border border-primary" }, {}, {
          default: () => {
            return `<p>${escape(display)}</p> `;
          }
        })} `;
      }
    })}`;
  })}</div></div> <div class="lg:col-span-2">${slots.default ? slots.default({}) : ``}</div></div></div>`;
});
const Familiar_tech_stack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-wrap items-center my-4 gap-3">${each(techStackArray, (icon) => {
    return `${validate_component(Techstack_icon, "TechStackIcon").$$render($$result, { icon }, {}, {})}`;
  })}</div>`;
});
const metadata = { "layout": "about" };
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(About_layout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props, metadata), {}, {
    default: () => {
      return `${validate_component(H2, "Components.h2").$$render($$result, { id: "about-me-👨‍💻", headerTag: "h2" }, {}, {
        default: () => {
          return `About Me 👨‍💻`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Hello <span class="wave" data-svelte-h="svelte-jmcnvm">👋</span><br>
I&#39;m <code data-svelte-h="svelte-lnb2so">Prabhu Kiran Konda</code>, a technology enthusiast with a deep love for programming. I&#39;ve recently discovered a passion for tech blogging and writing. I&#39;m enthusiastic about sharing insights and knowledge from the ever-evolving world of technology.`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `Currently I&#39;m Learning <code data-svelte-h="svelte-b1al2f">React</code> and <code data-svelte-h="svelte-523vg2">NextJS</code> to build modern web applications and also exploring <code data-svelte-h="svelte-7dlee6">Data Science</code> and <code data-svelte-h="svelte-njgj4l">Machine Learning</code>.`;
        }
      })} ${validate_component(H2, "Components.h2").$$render(
        $$result,
        {
          id: "tech-stack-i'm-familiar-with:",
          headerTag: "h2"
        },
        {},
        {
          default: () => {
            return `Tech Stack I&#39;m familiar with:`;
          }
        }
      )} ${validate_component(Familiar_tech_stack, "FamiliarTechStack").$$render($$result, {}, {}, {})} ${validate_component(H2, "Components.h2").$$render($$result, { id: "education-🎓", headerTag: "h2" }, {}, {
        default: () => {
          return `Education 🎓`;
        }
      })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `<strong data-svelte-h="svelte-khw3m1">Bachelors in Electrical and Electronics Engineering</strong> - [2020 - 2023]`;
        }
      })} ${validate_component(Ul, "Components.ul").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(P, "Components.p").$$render($$result, {}, {}, {
                default: () => {
                  return `@ <code data-svelte-h="svelte-sufckn">SR University</code>, Warangal, India`;
                }
              })}`;
            }
          })} ${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(P, "Components.p").$$render($$result, {}, {}, {
                default: () => {
                  return `CGPA: 8.57 / 10`;
                }
              })}`;
            }
          })} ${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(P, "Components.p").$$render($$result, {}, {}, {
                default: () => {
                  return `Coursework includes:`;
                }
              })} ${validate_component(Ul, "Components.ul").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Object-Oriented Programming using Java`;
                    }
                  })} ${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Artificial Intelligence`;
                    }
                  })} ${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Neural Networks and Deep Learning`;
                    }
                  })} ${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
                    default: () => {
                      return `Natural Language Processing (NLP)`;
                    }
                  })}`;
                }
              })} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
                default: () => {
                  return `While studying at SR University, I was extensively involved in the AI Minor program and completed various projects related to Machine Learning and Deep Learning. Additionally, I authored several research papers exploring the applications of Machine Learning and Deep Learning in the field of Electrical Engineering.`;
                }
              })}`;
            }
          })}`;
        }
      })} ${validate_component(H2, "Components.h2").$$render($$result, { id: "certifications-🏅", headerTag: "h2" }, {}, {
        default: () => {
          return `Certifications 🏅`;
        }
      })} ${validate_component(Ul, "Components.ul").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
            default: () => {
              return `Deep Learning Specialization (${validate_component(A, "Components.a").$$render(
                $$result,
                {
                  href: "https://www.coursera.org/account/accomplishments/specialization/certificate/DYAT64RBNY2R",
                  rel: "nofollow"
                },
                {},
                {
                  default: () => {
                    return `Coursera`;
                  }
                }
              )})`;
            }
          })} ${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
            default: () => {
              return `Machine Learning A-Z<sup data-svelte-h="svelte-ejaemt">TM</sup>: AI, Python &amp; R in Data Science (${validate_component(A, "Components.a").$$render(
                $$result,
                {
                  href: "https://www.udemy.com/certificate/UC-1da0a923-8fb4-41a7-9166-c13adb00d2ad/",
                  rel: "nofollow"
                },
                {},
                {
                  default: () => {
                    return `Udemy`;
                  }
                }
              )})`;
            }
          })} ${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
            default: () => {
              return `AI-900: Azure AI Fundamentals (${validate_component(A, "Components.a").$$render(
                $$result,
                {
                  href: "https://www.credly.com/badges/46b6842f-597c-4079-a876-fcd6ec7dd653?source=linked_in_profile",
                  rel: "nofollow"
                },
                {},
                {
                  default: () => {
                    return `Microsoft`;
                  }
                }
              )})`;
            }
          })}`;
        }
      })} ${validate_component(H2, "Components.h2").$$render($$result, { id: "publications-📚", headerTag: "h2" }, {}, {
        default: () => {
          return `Publications 📚`;
        }
      })} ${validate_component(Ul, "Components.ul").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(P, "Components.p").$$render($$result, {}, {}, {
                default: () => {
                  return `<strong data-svelte-h="svelte-16fwe15"><em>A Platform Independent Web-Application for Short-Term Electric Power Load Forecasting on a 33/11 kV Substation Using Regression Model</em></strong>, Advances in Electrical &amp; Electronics Engineering (${validate_component(A, "Components.a").$$render(
                    $$result,
                    {
                      href: "http://advances.utc.sk/index.php/AEEE/article/view/4561",
                      rel: "nofollow"
                    },
                    {},
                    {
                      default: () => {
                        return `see here`;
                      }
                    }
                  )})`;
                }
              })}`;
            }
          })} ${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(P, "Components.p").$$render($$result, {}, {}, {
                default: () => {
                  return `<strong data-svelte-h="svelte-191ufo9"><em>Weather Forecasting Using Radial Basis Function Neural Network in Warangal, India</em></strong>, MDPI Urban Science (${validate_component(A, "Components.a").$$render(
                    $$result,
                    {
                      href: "https://www.mdpi.com/2413-8851/7/3/68",
                      rel: "nofollow"
                    },
                    {},
                    {
                      default: () => {
                        return `see here`;
                      }
                    }
                  )})`;
                }
              })}`;
            }
          })} ${validate_component(Li, "Components.li").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(P, "Components.p").$$render($$result, {}, {}, {
                default: () => {
                  return `<strong data-svelte-h="svelte-z4axu1"><em>Active Power Load Data Dimensionality Reduction Using Autoencoder</em></strong>, Springer (${validate_component(A, "Components.a").$$render(
                    $$result,
                    {
                      href: "https://link.springer.com/chapter/10.1007/978-981-99-2066-2_22",
                      rel: "nofollow"
                    },
                    {},
                    {
                      default: () => {
                        return `see here`;
                      }
                    }
                  )})`;
                }
              })}`;
            }
          })}`;
        }
      })} ${validate_component(Hr, "Components.hr").$$render($$result, {}, {}, {})} ${validate_component(P, "Components.p").$$render($$result, {}, {}, {
        default: () => {
          return `for React and Next JS version of this website, visit : ${validate_component(A, "Components.a").$$render(
            $$result,
            {
              href: "https://v1-prabhukirankonda.vercel.app/",
              rel: "nofollow"
            },
            {},
            {
              default: () => {
                return `https://v1-prabhukirankonda.vercel.app/`;
              }
            }
          )}`;
        }
      })}`;
    }
  })}`;
});
export {
  About as default,
  metadata
};
