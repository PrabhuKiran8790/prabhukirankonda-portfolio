import { o as onDestroy, c as create_ssr_component, a as add_styles, e as escape, v as validate_component, m as missing_component, b as spread, d as escape_object, f as merge_ssr_styles, g as add_attribute, h as subscribe, i as each, j as get_store_value, s as setContext, k as getContext, l as compute_rest_props } from "../../chunks/ssr.js";
import { u as useToasterStore, t as toast, s as startPause, e as endPause, a as update, p as prefersReducedMotion, b as setInitialClassState, n as noop, c as nanoid, i as isHTMLElement, d as isFunction, f as effect$1, g as styleToString$1, h as executeCallbacks, j as useEscapeKeydown, k as useClickOutside, l as isBrowser$1, m as addMeltEventListener, o as kbd, q as chain, r as addEventListener, v as handleEscapeKeydown, w as noop$1 } from "../../chunks/marked.esm.js";
import { I as Icon, c as cn, r as routes, t as tick, a as createFocusTrap$1, B as Button } from "../../chunks/index2.js";
import { T as Theme_toggle, X as X$1, o as openMobileMenu } from "../../chunks/theme-toggle.js";
import "clsx";
import { S as Svelte } from "../../chunks/svelte.js";
import { p as page, n as navigating } from "../../chunks/stores.js";
import { M as MetaTags } from "../../chunks/MetaTags.js";
import { k as derived, w as writable, l as readonly } from "../../chunks/exports.js";
let customAlphabet = (alphabet, defaultSize = 21) => {
  return (size = defaultSize) => {
    let id = "";
    let i = size;
    while (i--) {
      id += alphabet[Math.random() * alphabet.length | 0];
    }
    return id;
  };
};
function calculateOffset(toast2, $toasts, opts) {
  const { reverseOrder, gutter = 8, defaultPosition } = opts || {};
  const relevantToasts = $toasts.filter((t) => (t.position || defaultPosition) === (toast2.position || defaultPosition) && t.height);
  const toastIndex = relevantToasts.findIndex((t) => t.id === toast2.id);
  const toastsBefore = relevantToasts.filter((toast3, i) => i < toastIndex && toast3.visible).length;
  const offset = relevantToasts.filter((t) => t.visible).slice(...reverseOrder ? [toastsBefore + 1] : [0, toastsBefore]).reduce((acc, t) => acc + (t.height || 0) + gutter, 0);
  return offset;
}
const handlers = {
  startPause() {
    startPause(Date.now());
  },
  endPause() {
    endPause(Date.now());
  },
  updateHeight: (toastId, height) => {
    update({ id: toastId, height });
  },
  calculateOffset
};
function useToaster(toastOptions) {
  const { toasts, pausedAt } = useToasterStore(toastOptions);
  const timeouts = /* @__PURE__ */ new Map();
  let _pausedAt;
  const unsubscribes = [
    pausedAt.subscribe(($pausedAt) => {
      if ($pausedAt) {
        for (const [, timeoutId] of timeouts) {
          clearTimeout(timeoutId);
        }
        timeouts.clear();
      }
      _pausedAt = $pausedAt;
    }),
    toasts.subscribe(($toasts) => {
      if (_pausedAt) {
        return;
      }
      const now = Date.now();
      for (const t of $toasts) {
        if (timeouts.has(t.id)) {
          continue;
        }
        if (t.duration === Infinity) {
          continue;
        }
        const durationLeft = (t.duration || 0) + t.pauseDuration - (now - t.createdAt);
        if (durationLeft < 0) {
          if (t.visible) {
            toast.dismiss(t.id);
          }
          return null;
        }
        timeouts.set(t.id, setTimeout(() => toast.dismiss(t.id), durationLeft));
      }
    })
  ];
  onDestroy(() => {
    for (const unsubscribe of unsubscribes) {
      unsubscribe();
    }
  });
  return { toasts, handlers };
}
const css$8 = {
  code: "div.svelte-11kvm4p{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #61d345);position:relative;transform:rotate(45deg);animation:svelte-11kvm4p-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-11kvm4p::after{content:'';box-sizing:border-box;animation:svelte-11kvm4p-checkmarkAnimation 0.2s ease-out forwards;opacity:0;animation-delay:200ms;position:absolute;border-right:2px solid;border-bottom:2px solid;border-color:var(--secondary, #fff);bottom:6px;left:6px;height:10px;width:6px}@keyframes svelte-11kvm4p-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-11kvm4p-checkmarkAnimation{0%{height:0;width:0;opacity:0}40%{height:0;width:6px;opacity:1}100%{opacity:1;height:10px}}",
  map: null
};
const CheckmarkIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#61d345" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$8);
  return `  <div class="svelte-11kvm4p"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$7 = {
  code: "div.svelte-1ee93ns{width:20px;opacity:0;height:20px;border-radius:10px;background:var(--primary, #ff4b4b);position:relative;transform:rotate(45deg);animation:svelte-1ee93ns-circleAnimation 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;animation-delay:100ms}div.svelte-1ee93ns::after,div.svelte-1ee93ns::before{content:'';animation:svelte-1ee93ns-firstLineAnimation 0.15s ease-out forwards;animation-delay:150ms;position:absolute;border-radius:3px;opacity:0;background:var(--secondary, #fff);bottom:9px;left:4px;height:2px;width:12px}div.svelte-1ee93ns:before{animation:svelte-1ee93ns-secondLineAnimation 0.15s ease-out forwards;animation-delay:180ms;transform:rotate(90deg)}@keyframes svelte-1ee93ns-circleAnimation{from{transform:scale(0) rotate(45deg);opacity:0}to{transform:scale(1) rotate(45deg);opacity:1}}@keyframes svelte-1ee93ns-firstLineAnimation{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}@keyframes svelte-1ee93ns-secondLineAnimation{from{transform:scale(0) rotate(90deg);opacity:0}to{transform:scale(1) rotate(90deg);opacity:1}}",
  map: null
};
const ErrorIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#ff4b4b" } = $$props;
  let { secondary = "#fff" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$7);
  return `  <div class="svelte-1ee93ns"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$6 = {
  code: "div.svelte-1j7dflg{width:12px;height:12px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--secondary, #e0e0e0);border-right-color:var(--primary, #616161);animation:svelte-1j7dflg-rotate 1s linear infinite}@keyframes svelte-1j7dflg-rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}",
  map: null
};
const LoaderIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { primary = "#616161" } = $$props;
  let { secondary = "#e0e0e0" } = $$props;
  if ($$props.primary === void 0 && $$bindings.primary && primary !== void 0)
    $$bindings.primary(primary);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  $$result.css.add(css$6);
  return `  <div class="svelte-1j7dflg"${add_styles({
    "--primary": primary,
    "--secondary": secondary
  })}></div>`;
});
const css$5 = {
  code: ".indicator.svelte-1kgeier{position:relative;display:flex;justify-content:center;align-items:center;min-width:20px;min-height:20px}.status.svelte-1kgeier{position:absolute}.animated.svelte-1kgeier{position:relative;transform:scale(0.6);opacity:0.4;min-width:20px;animation:svelte-1kgeier-enter 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}@keyframes svelte-1kgeier-enter{from{transform:scale(0.6);opacity:0.4}to{transform:scale(1);opacity:1}}",
  map: null
};
const ToastIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let type;
  let icon;
  let iconTheme;
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$5);
  ({ type, icon, iconTheme } = toast2);
  return `${typeof icon === "string" ? `<div class="animated svelte-1kgeier">${escape(icon)}</div>` : `${typeof icon !== "undefined" ? `${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})}` : `${type !== "blank" ? `<div class="indicator svelte-1kgeier">${validate_component(LoaderIcon, "LoaderIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})} ${type !== "loading" ? `<div class="status svelte-1kgeier">${type === "error" ? `${validate_component(ErrorIcon, "ErrorIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}` : `${validate_component(CheckmarkIcon, "CheckmarkIcon").$$render($$result, Object.assign({}, iconTheme), {}, {})}`}</div>` : ``}</div>` : ``}`}`}`;
});
const css$4 = {
  code: ".message.svelte-1nauejd{display:flex;justify-content:center;margin:4px 10px;color:inherit;flex:1 1 auto;white-space:pre-line}",
  map: null
};
const ToastMessage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  $$result.css.add(css$4);
  return `<div${spread([{ class: "message" }, escape_object(toast2.ariaProps)], { classes: "svelte-1nauejd" })}>${typeof toast2.message === "string" ? `${escape(toast2.message)}` : `${validate_component(toast2.message || missing_component, "svelte:component").$$render($$result, { toast: toast2 }, {}, {})}`} </div>`;
});
const css$3 = {
  code: "@keyframes svelte-ug60r4-enterAnimation{0%{transform:translate3d(0, calc(var(--factor) * -200%), 0) scale(0.6);opacity:0.5}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes svelte-ug60r4-exitAnimation{0%{transform:translate3d(0, 0, -1px) scale(1);opacity:1}100%{transform:translate3d(0, calc(var(--factor) * -150%), -1px) scale(0.6);opacity:0}}@keyframes svelte-ug60r4-fadeInAnimation{0%{opacity:0}100%{opacity:1}}@keyframes svelte-ug60r4-fadeOutAnimation{0%{opacity:1}100%{opacity:0}}.base.svelte-ug60r4{display:flex;align-items:center;background:#fff;color:#363636;line-height:1.3;will-change:transform;box-shadow:0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);max-width:350px;pointer-events:auto;padding:8px 10px;border-radius:8px}.transparent.svelte-ug60r4{opacity:0}.enter.svelte-ug60r4{animation:svelte-ug60r4-enterAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.exit.svelte-ug60r4{animation:svelte-ug60r4-exitAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}.fadeIn.svelte-ug60r4{animation:svelte-ug60r4-fadeInAnimation 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) forwards}.fadeOut.svelte-ug60r4{animation:svelte-ug60r4-fadeOutAnimation 0.4s cubic-bezier(0.06, 0.71, 0.55, 1) forwards}",
  map: null
};
const ToastBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { toast: toast2 } = $$props;
  let { position = void 0 } = $$props;
  let { style = "" } = $$props;
  let { Component = void 0 } = $$props;
  let factor;
  let animation;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.Component === void 0 && $$bindings.Component && Component !== void 0)
    $$bindings.Component(Component);
  $$result.css.add(css$3);
  {
    {
      const top = (toast2.position || position || "top-center").includes("top");
      factor = top ? 1 : -1;
      const [enter, exit] = prefersReducedMotion() ? ["fadeIn", "fadeOut"] : ["enter", "exit"];
      animation = toast2.visible ? enter : exit;
    }
  }
  return `<div class="${"base " + escape(toast2.height ? animation : "transparent", true) + " " + escape(toast2.className || "", true) + " svelte-ug60r4"}"${add_styles(merge_ssr_styles(escape(style, true) + "; " + escape(toast2.style, true), { "--factor": factor }))}>${Component ? `${validate_component(Component || missing_component, "svelte:component").$$render($$result, {}, {}, {
    message: () => {
      return `${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2, slot: "message" }, {}, {})}`;
    },
    icon: () => {
      return `${validate_component(ToastIcon, "ToastIcon").$$render($$result, { toast: toast2, slot: "icon" }, {}, {})}`;
    }
  })}` : `${slots.default ? slots.default({ ToastIcon, ToastMessage, toast: toast2 }) : ` ${validate_component(ToastIcon, "ToastIcon").$$render($$result, { toast: toast2 }, {}, {})} ${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})} `}`} </div>`;
});
const css$2 = {
  code: ".wrapper.svelte-v01oml{left:0;right:0;display:flex;position:absolute;transform:translateY(calc(var(--offset, 16px) * var(--factor) * 1px))}.transition.svelte-v01oml{transition:all 230ms cubic-bezier(0.21, 1.02, 0.73, 1)}.active.svelte-v01oml{z-index:9999}.active.svelte-v01oml>*{pointer-events:auto}",
  map: null
};
const ToastWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let top;
  let bottom;
  let factor;
  let justifyContent;
  let { toast: toast2 } = $$props;
  let { setHeight } = $$props;
  let wrapperEl;
  if ($$props.toast === void 0 && $$bindings.toast && toast2 !== void 0)
    $$bindings.toast(toast2);
  if ($$props.setHeight === void 0 && $$bindings.setHeight && setHeight !== void 0)
    $$bindings.setHeight(setHeight);
  $$result.css.add(css$2);
  top = toast2.position?.includes("top") ? 0 : null;
  bottom = toast2.position?.includes("bottom") ? 0 : null;
  factor = toast2.position?.includes("top") ? 1 : -1;
  justifyContent = toast2.position?.includes("center") && "center" || (toast2.position?.includes("right") || toast2.position?.includes("end")) && "flex-end" || null;
  return `<div class="${[
    "wrapper svelte-v01oml",
    (toast2.visible ? "active" : "") + " " + (!prefersReducedMotion() ? "transition" : "")
  ].join(" ").trim()}"${add_styles({
    "--factor": factor,
    "--offset": toast2.offset,
    top,
    bottom,
    "justify-content": justifyContent
  })}${add_attribute("this", wrapperEl, 0)}>${toast2.type === "custom" ? `${validate_component(ToastMessage, "ToastMessage").$$render($$result, { toast: toast2 }, {}, {})}` : `${slots.default ? slots.default({ toast: toast2 }) : ` ${validate_component(ToastBar, "ToastBar").$$render($$result, { toast: toast2, position: toast2.position }, {}, {})} `}`} </div>`;
});
const css$1 = {
  code: ".toaster.svelte-1phplh9{--default-offset:16px;position:fixed;z-index:9999;top:var(--default-offset);left:var(--default-offset);right:var(--default-offset);bottom:var(--default-offset);pointer-events:none}",
  map: null
};
const Toaster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  let { reverseOrder = false } = $$props;
  let { position = "top-center" } = $$props;
  let { toastOptions = void 0 } = $$props;
  let { gutter = 8 } = $$props;
  let { containerStyle = void 0 } = $$props;
  let { containerClassName = void 0 } = $$props;
  const { toasts, handlers: handlers2 } = useToaster(toastOptions);
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  let _toasts;
  if ($$props.reverseOrder === void 0 && $$bindings.reverseOrder && reverseOrder !== void 0)
    $$bindings.reverseOrder(reverseOrder);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.toastOptions === void 0 && $$bindings.toastOptions && toastOptions !== void 0)
    $$bindings.toastOptions(toastOptions);
  if ($$props.gutter === void 0 && $$bindings.gutter && gutter !== void 0)
    $$bindings.gutter(gutter);
  if ($$props.containerStyle === void 0 && $$bindings.containerStyle && containerStyle !== void 0)
    $$bindings.containerStyle(containerStyle);
  if ($$props.containerClassName === void 0 && $$bindings.containerClassName && containerClassName !== void 0)
    $$bindings.containerClassName(containerClassName);
  $$result.css.add(css$1);
  _toasts = $toasts.map((toast2) => ({
    ...toast2,
    position: toast2.position || position,
    offset: handlers2.calculateOffset(toast2, $toasts, {
      reverseOrder,
      gutter,
      defaultPosition: position
    })
  }));
  $$unsubscribe_toasts();
  return `<div class="${"toaster " + escape(containerClassName || "", true) + " svelte-1phplh9"}"${add_attribute("style", containerStyle, 0)} role="alert">${each(_toasts, (toast2) => {
    return `${validate_component(ToastWrapper, "ToastWrapper").$$render(
      $$result,
      {
        toast: toast2,
        setHeight: (height) => handlers2.updateHeight(toast2.id, height)
      },
      {},
      {}
    )}`;
  })} </div>`;
});
const Bot = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M12 8V4H8" }],
    [
      "rect",
      {
        "width": "16",
        "height": "12",
        "x": "4",
        "y": "8",
        "rx": "2"
      }
    ],
    ["path", { "d": "M2 14h2" }],
    ["path", { "d": "M20 14h2" }],
    ["path", { "d": "M15 13v2" }],
    ["path", { "d": "M9 13v2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "bot" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Bot$1 = Bot;
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Menu$1 = Menu;
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return `<div class="container"><div class="flex flex-col-reverse items-center p-2 md:justify-between md:flex-row"><div>Prabhu Kiran Konda | © ${escape(currentYear)}</div> <div class="flex items-center gap-2"><h1 data-svelte-h="svelte-1x0egpb">Made with</h1> ${validate_component(Svelte, "Svelte").$$render($$result, { class: "inline-block w-7 h-7" }, {}, {})}</div></div></div>`;
});
const Metatags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const og = {
    images: [
      {
        url: "https://prabhukirankonda.vercel.app/og.png",
        width: 800,
        height: 600,
        alt: "Prabhu Kiran Konda"
      }
    ],
    siteName: "Prabhu Kiran Konda",
    twitter: {
      handle: "@prabhukirantwt",
      cardType: "summary_large_image",
      image: "https://prabhukirankonda.vercel.app/og.png",
      imageAlt: "Prabhu Kiran Konda"
    }
  };
  let pageMeta = {};
  function setPageMeta(meta) {
    pageMeta = {
      title: `Prabhu Kiran Konda | ${meta.title}`,
      description: meta.description,
      openGraph: {
        url: $page.url,
        title: `Prabhu Kiran Konda | ${meta.ogTitle || meta.title}`,
        description: meta.ogDescription || meta.description,
        images: og.images,
        siteName: og.siteName
      },
      twitter: {
        handle: "@prabhukirantwt",
        cardType: "summary_large_image",
        title: `Prabhu Kiran Konda | ${meta.ogTitle || meta.title}`,
        description: meta.ogDescription || meta.description,
        image: "https://prabhukirankonda.vercel.app/og.png",
        imageAlt: "Prabhu Kiran Konda"
      }
    };
  }
  {
    {
      if ($page.url.pathname == "/") {
        setPageMeta({
          title: "Home",
          description: "Personal website and blog"
        });
      } else if ($page.url.pathname == "/blog") {
        setPageMeta({ title: "Blog", description: "Blog" });
      } else if ($page.url.pathname == "/projects") {
        setPageMeta({
          title: "Projects",
          description: "Projects"
        });
      } else if ($page.url.pathname == "/about") {
        setPageMeta({ title: "About", description: "About Me" });
      }
    }
  }
  $$unsubscribe_page();
  return `${validate_component(MetaTags, "MetaTags").$$render($$result, Object.assign({}, pageMeta), {}, {})}`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<nav class="z-50 top-0 left-0 right-0 h-14 md:h-[4.1rem] border-b fixed supports-[backdrop-filter]:bg-background/60 w-full bg-background/95 backdrop-blur hidden md:block"><div class="flex items-center justify-between h-full p-4 max-w-[95rem] mx-auto"><div class="flex items-center gap-4"><a href="/" class="text-3xl font-semibold tracking-wider md:text-4xl" style="font-family: 'Fuggles', cursive;" data-svelte-h="svelte-1ibvgnb"><span class="text-5xl text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-6xl">P</span>rabhu</a> ${``}</div> <div class="hidden md:block"><div class="flex space-x-4"><ul class="flex items-center">${each(routes, (route) => {
    return `<li><a${add_attribute("href", route.link, 0)} class="relative inline-block px-3 py-1 text-lg tracking-wider rounded-lg group hover:bg-accent hover:text-accent-foreground"><span${add_attribute(
      "class",
      cn("absolute rounded-full -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-[3px] bg-black dark:bg-white opacity-0 group-hover:opacity-100 transition-opacity", $page.url.pathname.startsWith(route.link) ? "opacity-100" : ""),
      0
    )}></span> ${escape(route.name)}</a> </li>`;
  })}</ul> ${validate_component(Theme_toggle, "ThemeToggle").$$render($$result, {}, {}, {})}</div></div></div></nav>`;
});
const Mode_watcher = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { track = true } = $$props;
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  return `${$$result.head += `<!-- HEAD_svelte-1k77ny7_START --><!-- HTML_TAG_START -->${`<script nonce="%sveltekit.nonce%">(${setInitialClassState.toString()})();<\/script>`}<!-- HTML_TAG_END --><!-- HEAD_svelte-1k77ny7_END -->`, ""}`;
});
function last(array) {
  return array[array.length - 1];
}
function lightable(value) {
  function subscribe2(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe: subscribe2 };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
function builder(name2, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name2}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name2}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name2}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name2}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function createElHelpers(prefix) {
  const name2 = (part) => part ? `${prefix}-${part}` : prefix;
  const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
  const selector = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
  const getEl = (part) => document.querySelector(selector(part));
  return {
    name: name2,
    attribute,
    selector,
    getEl
  };
}
function omit$1(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
const overridable$1 = (store2, onChange) => {
  const update2 = (updater, sideEffect) => {
    store2.update((curr) => {
      const next = updater(curr);
      let res = next;
      if (onChange) {
        res = onChange({ curr, next });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set2 = (curr) => {
    update2(() => curr);
  };
  return {
    ...store2,
    update: update2,
    set: set2
  };
};
function sleep$1(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function generateId$1() {
  return nanoid(10);
}
function generateIds(args) {
  return args.reduce((acc, curr) => {
    acc[curr] = generateId$1();
    return acc;
  }, {});
}
const isDom = () => typeof window !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return agent?.platform ?? navigator.platform;
}
const pt = (v2) => isDom() && v2.test(getPlatform().toLowerCase());
const isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
const isMac$1 = () => pt(/^mac/) && !isTouchDevice();
const isApple = () => pt(/mac|iphone|ipad|ipod/i);
const isIos = () => isApple() && !isMac$1();
const LOCK_CLASSNAME = "data-melt-scroll-lock";
function assignStyle(el, style) {
  if (!el)
    return;
  const previousStyle = el.style.cssText;
  Object.assign(el.style, style);
  return () => {
    el.style.cssText = previousStyle;
  };
}
function setCSSProperty$1(el, property, value) {
  if (!el)
    return;
  const previousValue = el.style.getPropertyValue(property);
  el.style.setProperty(property, value);
  return () => {
    if (previousValue) {
      el.style.setProperty(property, previousValue);
    } else {
      el.style.removeProperty(property);
    }
  };
}
function getPaddingProperty$1(documentElement) {
  const documentLeft = documentElement.getBoundingClientRect().left;
  const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
  return scrollbarX ? "paddingLeft" : "paddingRight";
}
function removeScroll(_document) {
  const doc = _document ?? document;
  const win = doc.defaultView ?? window;
  const { documentElement, body } = doc;
  const locked = body.hasAttribute(LOCK_CLASSNAME);
  if (locked)
    return noop;
  body.setAttribute(LOCK_CLASSNAME, "");
  const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
  const setScrollbarWidthProperty = () => setCSSProperty$1(documentElement, "--scrollbar-width", `${scrollbarWidth}px`);
  const paddingProperty = getPaddingProperty$1(documentElement);
  const scrollbarSidePadding = win.getComputedStyle(body)[paddingProperty];
  const setStyle2 = () => assignStyle(body, {
    overflow: "hidden",
    [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
  });
  const setIOSStyle = () => {
    const { scrollX, scrollY, visualViewport: visualViewport2 } = win;
    const offsetLeft = visualViewport2?.offsetLeft ?? 0;
    const offsetTop = visualViewport2?.offsetTop ?? 0;
    const restoreStyle = assignStyle(body, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(scrollY - Math.floor(offsetTop))}px`,
      left: `${-(scrollX - Math.floor(offsetLeft))}px`,
      right: "0",
      [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
    });
    return () => {
      restoreStyle?.();
      win.scrollTo(scrollX, scrollY);
    };
  };
  const cleanups = [setScrollbarWidthProperty(), isIos() ? setIOSStyle() : setStyle2()];
  return () => {
    cleanups.forEach((fn) => fn?.());
    body.removeAttribute(LOCK_CLASSNAME);
  };
}
function toWritableStores$1(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = writable(value);
  });
  return result;
}
function getPortalParent(node) {
  let parent = node.parentElement;
  while (isHTMLElement(parent) && !parent.hasAttribute("data-portal")) {
    parent = parent.parentElement;
  }
  return parent || "body";
}
function getPortalDestination(node, portalProp) {
  const portalParent = getPortalParent(node);
  if (portalProp !== void 0)
    return portalProp;
  if (portalParent === "body")
    return document.body;
  return null;
}
async function handleFocus(args) {
  const { prop, defaultEl } = args;
  await Promise.all([sleep$1(1), tick]);
  if (prop === void 0) {
    defaultEl?.focus();
    return;
  }
  const returned = isFunction(prop) ? prop(defaultEl) : prop;
  if (typeof returned === "string") {
    const el = document.querySelector(returned);
    if (!isHTMLElement(el))
      return;
    el.focus();
  } else if (isHTMLElement(returned)) {
    returned.focus();
  }
}
function createFocusTrap(config = {}) {
  let trap;
  const { immediate, ...focusTrapOptions } = config;
  const hasFocus = writable(false);
  const isPaused = writable(false);
  const activate = (opts) => trap?.activate(opts);
  const deactivate = (opts) => {
    trap?.deactivate(opts);
  };
  const pause = () => {
    if (trap) {
      trap.pause();
      isPaused.set(true);
    }
  };
  const unpause = () => {
    if (trap) {
      trap.unpause();
      isPaused.set(false);
    }
  };
  const useFocusTrap = (node) => {
    trap = createFocusTrap$1(node, {
      ...focusTrapOptions,
      onActivate() {
        hasFocus.set(true);
        config.onActivate?.();
      },
      onDeactivate() {
        hasFocus.set(false);
        config.onDeactivate?.();
      }
    });
    if (immediate) {
      activate();
    }
    return {
      destroy() {
        deactivate();
        trap = void 0;
      }
    };
  };
  return {
    useFocusTrap,
    hasFocus: readonly(hasFocus),
    isPaused: readonly(isPaused),
    activate,
    deactivate,
    pause,
    unpause
  };
}
const usePortal = (el, target = "body") => {
  let targetEl;
  if (!isHTMLElement(target) && typeof target !== "string") {
    return {
      destroy: noop
    };
  }
  async function update2(newTarget) {
    target = newTarget;
    if (typeof target === "string") {
      targetEl = document.querySelector(target);
      if (targetEl === null) {
        await tick();
        targetEl = document.querySelector(target);
      }
      if (targetEl === null) {
        throw new Error(`No element found matching css selector: "${target}"`);
      }
    } else if (target instanceof HTMLElement) {
      targetEl = target;
    } else {
      throw new TypeError(`Unknown portal target type: ${target === null ? "null" : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
    }
    el.dataset.portal = "";
    targetEl.appendChild(el);
    el.hidden = false;
  }
  function destroy() {
    el.remove();
  }
  update2(target);
  return {
    update: update2,
    destroy
  };
};
const { name } = createElHelpers("dialog");
const defaults = {
  preventScroll: true,
  closeOnEscape: true,
  closeOnOutsideClick: true,
  role: "dialog",
  defaultOpen: false,
  portal: "body",
  forceVisible: false,
  openFocus: void 0,
  closeFocus: void 0,
  onOutsideClick: void 0
};
const openDialogIds = writable([]);
const dialogIdParts = ["content", "title", "description"];
function createDialog(props) {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores$1(omit$1(withDefaults, "ids"));
  const { preventScroll: preventScroll2, closeOnEscape, closeOnOutsideClick, role, portal, forceVisible, openFocus, closeFocus, onOutsideClick } = options;
  const activeTrigger = writable(null);
  const ids = toWritableStores$1({
    ...generateIds(dialogIdParts),
    ...withDefaults.ids
  });
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable$1(openWritable, withDefaults?.onOpenChange);
  const isVisible = derived([open, forceVisible], ([$open, $forceVisible]) => {
    return $open || $forceVisible;
  });
  let unsubScroll = noop;
  function handleOpen(e) {
    const el = e.currentTarget;
    const triggerEl = e.currentTarget;
    if (!isHTMLElement(el) || !isHTMLElement(triggerEl))
      return;
    open.set(true);
    activeTrigger.set(triggerEl);
  }
  function handleClose() {
    open.set(false);
    handleFocus({
      prop: get_store_value(closeFocus),
      defaultEl: get_store_value(activeTrigger)
    });
  }
  effect$1([open], ([$open]) => {
    sleep$1(100).then(() => {
      if ($open) {
        openDialogIds.update((prev) => {
          prev.push(get_store_value(ids.content));
          return prev;
        });
      } else {
        openDialogIds.update((prev) => prev.filter((id) => id !== get_store_value(ids.content)));
      }
    });
  });
  const trigger = builder(name("trigger"), {
    stores: [open],
    returned: ([$open]) => {
      return {
        "aria-haspopup": "dialog",
        "aria-expanded": $open,
        type: "button"
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", (e) => {
        handleOpen(e);
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.ENTER && e.key !== kbd.SPACE)
          return;
        e.preventDefault();
        handleOpen(e);
      }));
      return {
        destroy: unsub
      };
    }
  });
  const overlay = builder(name("overlay"), {
    stores: [isVisible],
    returned: ([$isVisible]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        tabindex: -1,
        style: styleToString$1({
          display: $isVisible ? void 0 : "none"
        }),
        "aria-hidden": true,
        "data-state": $isVisible ? "open" : "closed"
      };
    },
    action: (node) => {
      let unsubEscapeKeydown = noop;
      if (get_store_value(closeOnEscape)) {
        const escapeKeydown = useEscapeKeydown(node, {
          handler: () => {
            handleClose();
          }
        });
        if (escapeKeydown && escapeKeydown.destroy) {
          unsubEscapeKeydown = escapeKeydown.destroy;
        }
      }
      return {
        destroy() {
          unsubEscapeKeydown();
        }
      };
    }
  });
  const content = builder(name("content"), {
    stores: [isVisible, ids.content, ids.description, ids.title],
    returned: ([$isVisible, $contentId, $descriptionId, $titleId]) => {
      return {
        id: $contentId,
        role: get_store_value(role),
        "aria-describedby": $descriptionId,
        "aria-labelledby": $titleId,
        "aria-modal": $isVisible ? "true" : void 0,
        "data-state": $isVisible ? "open" : "closed",
        tabindex: -1,
        hidden: $isVisible ? void 0 : true,
        style: styleToString$1({
          display: $isVisible ? void 0 : "none"
        })
      };
    },
    action: (node) => {
      let activate = noop;
      let deactivate = noop;
      const destroy = executeCallbacks(effect$1([open], ([$open]) => {
        if (!$open)
          return;
        const focusTrap = createFocusTrap({
          immediate: false,
          escapeDeactivates: true,
          clickOutsideDeactivates: true,
          returnFocusOnDeactivate: false,
          fallbackFocus: node
        });
        activate = focusTrap.activate;
        deactivate = focusTrap.deactivate;
        const ac = focusTrap.useFocusTrap(node);
        if (ac && ac.destroy) {
          return ac.destroy;
        } else {
          return focusTrap.deactivate;
        }
      }), effect$1([closeOnOutsideClick, open], ([$closeOnOutsideClick, $open]) => {
        return useClickOutside(node, {
          enabled: $open,
          handler: (e) => {
            get_store_value(onOutsideClick)?.(e);
            if (e.defaultPrevented)
              return;
            const $openDialogIds = get_store_value(openDialogIds);
            const isLast = last($openDialogIds) === get_store_value(ids.content);
            if ($closeOnOutsideClick && isLast) {
              handleClose();
            }
          }
        }).destroy;
      }), effect$1([closeOnEscape], ([$closeOnEscape]) => {
        if (!$closeOnEscape)
          return noop;
        const escapeKeydown = useEscapeKeydown(node, {
          handler: () => {
            handleClose();
          }
        });
        if (escapeKeydown && escapeKeydown.destroy) {
          return escapeKeydown.destroy;
        }
        return noop;
      }), effect$1([isVisible], ([$isVisible]) => {
        tick().then(() => {
          if (!$isVisible) {
            deactivate();
          } else {
            activate();
          }
        });
      }));
      return {
        destroy: () => {
          unsubScroll();
          destroy();
        }
      };
    }
  });
  const portalled = builder(name("portalled"), {
    stores: portal,
    returned: ($portal) => ({
      "data-portal": $portal ? "" : void 0
    }),
    action: (node) => {
      const unsubPortal = effect$1([portal], ([$portal]) => {
        if (!$portal)
          return noop;
        const portalDestination = getPortalDestination(node, $portal);
        if (portalDestination === null)
          return noop;
        const portalAction = usePortal(node, portalDestination);
        if (portalAction && portalAction.destroy) {
          return portalAction.destroy;
        } else {
          return noop;
        }
      });
      return {
        destroy() {
          unsubPortal();
        }
      };
    }
  });
  const title = builder(name("title"), {
    stores: [ids.title],
    returned: ([$titleId]) => ({
      id: $titleId
    })
  });
  const description = builder(name("description"), {
    stores: [ids.description],
    returned: ([$descriptionId]) => ({
      id: $descriptionId
    })
  });
  const close = builder(name("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        handleClose();
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.SPACE && e.key !== kbd.ENTER)
          return;
        e.preventDefault();
        handleClose();
      }));
      return {
        destroy: unsub
      };
    }
  });
  effect$1([open, preventScroll2], ([$open, $preventScroll]) => {
    if (!isBrowser$1)
      return;
    if ($preventScroll && $open)
      unsubScroll = removeScroll();
    if ($open) {
      const contentEl = document.getElementById(get_store_value(ids.content));
      handleFocus({ prop: get_store_value(openFocus), defaultEl: contentEl });
    }
    return () => {
      if (!get_store_value(forceVisible)) {
        unsubScroll();
      }
    };
  });
  return {
    ids,
    elements: {
      content,
      trigger,
      title,
      description,
      overlay,
      close,
      portalled
    },
    states: {
      open
    },
    options
  };
}
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function removeUndefined$1(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function getOptionUpdater$1(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store2 = options[key];
    if (store2) {
      store2.set(value);
    }
  };
}
function getDialogData() {
  const NAME = "dialog";
  const PARTS = [
    "close",
    "content",
    "description",
    "overlay",
    "portal",
    "title",
    "trigger"
  ];
  return {
    NAME,
    PARTS
  };
}
function setCtx$1(props) {
  const { NAME, PARTS } = getDialogData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const dialog = {
    ...createDialog({ ...removeUndefined$1(props), role: "dialog", forceVisible: true }),
    getAttrs
  };
  setContext(NAME, dialog);
  return {
    ...dialog,
    updateOption: getOptionUpdater$1(dialog.options)
  };
}
function getCtx$1() {
  const { NAME } = getDialogData();
  return getContext(NAME);
}
const Dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { preventScroll: preventScroll2 = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { closeOnOutsideClick = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { openFocus = void 0 } = $$props;
  let { closeFocus = void 0 } = $$props;
  let { onOutsideClick = void 0 } = $$props;
  const { states: { open: localOpen }, updateOption, ids } = setCtx$1({
    closeOnEscape,
    preventScroll: preventScroll2,
    closeOnOutsideClick,
    portal,
    forceVisible: true,
    defaultOpen: open,
    openFocus,
    closeFocus,
    onOutsideClick,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    }
  });
  const idValues = derived([ids.content, ids.description, ids.title], ([$contentId, $descriptionId, $titleId]) => ({
    content: $contentId,
    description: $descriptionId,
    title: $titleId
  }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll2 !== void 0)
    $$bindings.preventScroll(preventScroll2);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  if ($$props.openFocus === void 0 && $$bindings.openFocus && openFocus !== void 0)
    $$bindings.openFocus(openFocus);
  if ($$props.closeFocus === void 0 && $$bindings.closeFocus && closeFocus !== void 0)
    $$bindings.closeFocus(closeFocus);
  if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0)
    $$bindings.onOutsideClick(onOutsideClick);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("preventScroll", preventScroll2);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("openFocus", openFocus);
  }
  {
    updateOption("closeFocus", closeFocus);
  }
  {
    updateOption("onOutsideClick", onOutsideClick);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Dialog_portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder2;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $portalled, $$unsubscribe_portalled;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { portalled }, getAttrs } = getCtx$1();
  $$unsubscribe_portalled = subscribe(portalled, (value) => $portalled = value);
  const attrs = getAttrs("portal");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder2 = $portalled;
  {
    Object.assign(builder2, attrs);
  }
  $$unsubscribe_portalled();
  return `${asChild ? `${slots.default ? slots.default({ builder: builder2 }) : ``}` : `<div${spread([escape_object(builder2), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder: builder2 }) : ``}</div>`}`;
});
const Dialog_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder2;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id",
    "el"
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
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { content }, states: { open }, ids, getAttrs } = getCtx$1();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
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
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  {
    if (id) {
      ids.content.set(id);
    }
  }
  builder2 = $content;
  {
    Object.assign(builder2, attrs);
  }
  $$unsubscribe_content();
  $$unsubscribe_open();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder: builder2 }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder2), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder: builder2 }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder2), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder: builder2 }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder2), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder: builder2 }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder2), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder: builder2 }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder2), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder: builder2 }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Dialog_overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder2;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "el"
  ]);
  let $overlay, $$unsubscribe_overlay;
  let $open, $$unsubscribe_open;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { overlay }, states: { open }, getAttrs } = getCtx$1();
  $$unsubscribe_overlay = subscribe(overlay, (value) => $overlay = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs("overlay");
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
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  builder2 = $overlay;
  {
    Object.assign(builder2, attrs);
  }
  $$unsubscribe_overlay();
  $$unsubscribe_open();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder: builder2 }) : ``}` : `${transition && $open ? ` <div${spread([escape_object(builder2), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${inTransition && outTransition && $open ? ` <div${spread([escape_object(builder2), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${inTransition && $open ? ` <div${spread([escape_object(builder2), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${outTransition && $open ? ` <div${spread([escape_object(builder2), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${$open ? ` <div${spread([escape_object(builder2), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : ``}`}`}`}`}`}`;
});
function getOptionUpdater(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store2 = options[key];
    if (store2) {
      store2.set(value);
    }
  };
}
const TRANSITIONS = {
  DURATION: 0.5,
  EASE: [0.32, 0.72, 0, 1]
};
const VELOCITY_THRESHOLD = 0.4;
function effect(stores, fn) {
  if (typeof document === "undefined") {
    return () => {
    };
  }
  const unsub = derivedWithUnsubscribe(stores, (stores2, onUnsubscribe) => {
    return {
      stores: stores2,
      onUnsubscribe
    };
  }).subscribe(({ stores: stores2, onUnsubscribe }) => {
    const returned = fn(stores2);
    if (returned) {
      onUnsubscribe(returned);
    }
  });
  safeOnDestroy(unsub);
  return unsub;
}
function derivedWithUnsubscribe(stores, fn) {
  let unsubscribers = [];
  const onUnsubscribe = (cb) => {
    unsubscribers.push(cb);
  };
  const unsubscribe = () => {
    unsubscribers.forEach((fn2) => fn2());
    unsubscribers = [];
  };
  const derivedStore = derived(stores, ($storeValues) => {
    unsubscribe();
    return fn($storeValues, onUnsubscribe);
  });
  safeOnDestroy(unsubscribe);
  const subscribe2 = (...args) => {
    const unsub = derivedStore.subscribe(...args);
    return () => {
      unsub();
      unsubscribe();
    };
  };
  return {
    ...derivedStore,
    subscribe: subscribe2
  };
}
const safeOnDestroy = (fn) => {
  try {
    onDestroy(fn);
  } catch {
    return fn();
  }
};
const overridable = (store2, onChange) => {
  const update2 = (updater, sideEffect) => {
    store2.update((curr) => {
      const next = updater(curr);
      let res = next;
      if (onChange) {
        res = onChange({ curr, next });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set2 = (curr) => {
    update2(() => curr);
  };
  return {
    ...store2,
    update: update2,
    set: set2
  };
};
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = writable(value);
  });
  return result;
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
const cache = /* @__PURE__ */ new WeakMap();
function set(el, styles, ignoreCache = false) {
  if (!el || !(el instanceof HTMLElement) || !styles)
    return;
  const originalStyles = {};
  Object.entries(styles).forEach(([key, value]) => {
    if (key.startsWith("--")) {
      el.style.setProperty(key, value);
      return;
    }
    originalStyles[key] = el.style[key];
    el.style[key] = value;
  });
  if (ignoreCache)
    return;
  cache.set(el, originalStyles);
}
function reset(el, prop) {
  if (!el || !(el instanceof HTMLElement))
    return;
  const originalStyles = cache.get(el);
  if (!originalStyles) {
    return;
  }
  if (prop) {
    el.style[prop] = originalStyles[prop];
  } else {
    Object.entries(originalStyles).forEach(([key, value]) => {
      el.style[key] = value;
    });
  }
}
function getTranslate(element, direction) {
  const style = window.getComputedStyle(element);
  const transform = (
    // @ts-expect-error - vendor prefix
    style.transform || style.webkitTransform || style.mozTransform
  );
  let mat = transform.match(/^matrix3d\((.+)\)$/);
  if (mat) {
    return parseFloat(mat[1].split(", ")[isVertical(direction) ? 13 : 12]);
  }
  mat = transform.match(/^matrix\((.+)\)$/);
  return mat ? parseFloat(mat[1].split(", ")[isVertical(direction) ? 5 : 4]) : null;
}
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
const nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
const isBrowser = typeof document !== "undefined";
function isInput(target) {
  return target instanceof HTMLInputElement && !nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}
function isVertical(direction) {
  if (direction === "top" || direction === "bottom")
    return true;
  return false;
}
function isBottomOrRight(direction) {
  if (direction === "bottom" || direction === "right")
    return true;
  return false;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function handleSnapPoints({ activeSnapPoint, snapPoints, drawerRef, overlayRef, fadeFromIndex, openTime, direction }) {
  const isLastSnapPoint = derived([snapPoints, activeSnapPoint], ([$snapPoints, $activeSnapPoint]) => {
    return $activeSnapPoint === $snapPoints?.[$snapPoints.length - 1];
  });
  const shouldFade = derived([snapPoints, fadeFromIndex, activeSnapPoint], ([$snapPoints, $fadeFromIndex, $activeSnapPoint]) => {
    return $snapPoints && $snapPoints.length > 0 && ($fadeFromIndex || $fadeFromIndex === 0) && !Number.isNaN($fadeFromIndex) && $snapPoints[$fadeFromIndex] === $activeSnapPoint || !$snapPoints;
  });
  const activeSnapPointIndex = derived([snapPoints, activeSnapPoint], ([$snapPoints, $activeSnapPoint]) => $snapPoints?.findIndex((snapPoint) => snapPoint === $activeSnapPoint) ?? null);
  const snapPointsOffset = derived(snapPoints, ($snapPoints) => {
    if ($snapPoints) {
      return $snapPoints.map((snapPoint) => {
        const hasWindow = typeof window !== "undefined";
        const isPx = typeof snapPoint === "string";
        let snapPointAsNumber = 0;
        if (isPx) {
          snapPointAsNumber = parseInt(snapPoint, 10);
        }
        const $direction = get_store_value(direction);
        if (isVertical($direction)) {
          const height = isPx ? snapPointAsNumber : hasWindow ? snapPoint * window.innerHeight : 0;
          if (hasWindow) {
            return $direction === "bottom" ? window.innerHeight - height : window.innerHeight + height;
          }
          return height;
        }
        const width = isPx ? snapPointAsNumber : hasWindow ? snapPoint * window.innerWidth : 0;
        if (hasWindow) {
          return $direction === "right" ? window.innerWidth - width : window.innerWidth + width;
        }
        return width;
      });
    }
    return [];
  });
  const activeSnapPointOffset = derived([snapPointsOffset, activeSnapPointIndex], ([$snapPointsOffset, $activeSnapPointIndex]) => $activeSnapPointIndex !== null ? $snapPointsOffset?.[$activeSnapPointIndex] : null);
  effect([activeSnapPoint, drawerRef], ([$activeSnapPoint, $drawerRef]) => {
    if ($activeSnapPoint && $drawerRef) {
      const $snapPoints = get_store_value(snapPoints);
      const $snapPointsOffset = get_store_value(snapPointsOffset);
      const newIndex = $snapPoints?.findIndex((snapPoint) => snapPoint === $activeSnapPoint) ?? -1;
      if ($snapPointsOffset && newIndex !== -1 && typeof $snapPointsOffset[newIndex] === "number") {
        snapToPoint($snapPointsOffset[newIndex]);
      }
    }
  });
  function snapToPoint(dimension) {
    tick().then(() => {
      const $snapPointsOffset = get_store_value(snapPointsOffset);
      const newSnapPointIndex = $snapPointsOffset?.findIndex((snapPointDim) => snapPointDim === dimension) ?? null;
      const $drawerRef = get_store_value(drawerRef);
      const $direction = get_store_value(direction);
      onSnapPointChange(newSnapPointIndex);
      set($drawerRef, {
        transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
        transform: isVertical($direction) ? `translate3d(0, ${dimension}px, 0)` : `translate3d(${dimension}px, 0, 0)`
      });
      const $fadeFromIndex = get_store_value(fadeFromIndex);
      const $overlayRef = get_store_value(overlayRef);
      if (snapPointsOffset && newSnapPointIndex !== $snapPointsOffset.length - 1 && newSnapPointIndex !== $fadeFromIndex) {
        set($overlayRef, {
          transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
          opacity: "0"
        });
      } else {
        set($overlayRef, {
          transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
          opacity: "1"
        });
      }
      activeSnapPoint.update(() => {
        const $snapPoints = get_store_value(snapPoints);
        if (newSnapPointIndex === null || !$snapPoints)
          return null;
        return $snapPoints[newSnapPointIndex];
      });
    });
  }
  function onRelease({ draggedDistance, closeDrawer, velocity, dismissible }) {
    const $fadeFromIndex = get_store_value(fadeFromIndex);
    if ($fadeFromIndex === void 0)
      return;
    const $activeSnapPointOffset = get_store_value(activeSnapPointOffset);
    const $activeSnapPointIndex = get_store_value(activeSnapPointIndex);
    const $overlayRef = get_store_value(overlayRef);
    const $snapPointsOffset = get_store_value(snapPointsOffset);
    const $snapPoints = get_store_value(snapPoints);
    const $direction = get_store_value(direction);
    const currentPosition = $direction === "bottom" || $direction === "right" ? ($activeSnapPointOffset ?? 0) - draggedDistance : ($activeSnapPointOffset ?? 0) + draggedDistance;
    const isOverlaySnapPoint = $activeSnapPointIndex === $fadeFromIndex - 1;
    const isFirst = $activeSnapPointIndex === 0;
    const hasDraggedUp = draggedDistance > 0;
    if (isOverlaySnapPoint) {
      set($overlayRef, {
        transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`
      });
    }
    if (velocity > 2 && !hasDraggedUp) {
      if (dismissible)
        closeDrawer();
      else
        snapToPoint($snapPointsOffset[0]);
      return;
    }
    if (velocity > 2 && hasDraggedUp && $snapPointsOffset && $snapPoints) {
      snapToPoint($snapPointsOffset[$snapPoints.length - 1]);
      return;
    }
    const closestSnapPoint = $snapPointsOffset?.reduce((prev, curr) => {
      if (typeof prev !== "number" || typeof curr !== "number")
        return prev;
      return Math.abs(curr - currentPosition) < Math.abs(prev - currentPosition) ? curr : prev;
    });
    const dim = isVertical($direction) ? window.innerHeight : window.innerWidth;
    if (velocity > VELOCITY_THRESHOLD && Math.abs(draggedDistance) < dim * 0.4) {
      const dragDirection = hasDraggedUp ? 1 : -1;
      if (dragDirection > 0 && get_store_value(isLastSnapPoint) && $snapPoints) {
        snapToPoint($snapPointsOffset[$snapPoints.length - 1]);
        return;
      }
      if (isFirst && dragDirection < 0 && dismissible) {
        closeDrawer();
      }
      if ($activeSnapPointIndex === null)
        return;
      snapToPoint($snapPointsOffset[$activeSnapPointIndex + dragDirection]);
      return;
    }
    snapToPoint(closestSnapPoint);
  }
  function onDrag({ draggedDistance }) {
    const $drawerRef = get_store_value(drawerRef);
    const $activeSnapPointOffset = get_store_value(activeSnapPointOffset);
    if ($activeSnapPointOffset === null)
      return;
    const $snapPointsOffset = get_store_value(snapPointsOffset);
    const $direction = get_store_value(direction);
    const newValue = $direction === "bottom" || $direction === "right" ? $activeSnapPointOffset - draggedDistance : $activeSnapPointOffset + draggedDistance;
    const lastSnapPoint = $snapPointsOffset[$snapPointsOffset.length - 1];
    if (isBottomOrRight($direction) && newValue < lastSnapPoint) {
      return;
    }
    if (!isBottomOrRight($direction) && newValue > lastSnapPoint) {
      return;
    }
    set($drawerRef, {
      transform: isVertical($direction) ? `translate3d(0, ${newValue}px, 0)` : `translate3d(${newValue}px, 0, 0)`
    });
  }
  function getPercentageDragged(absDraggedDistance, isDraggingDown) {
    const $activeSnapPointIndex = get_store_value(activeSnapPointIndex);
    const $snapPointsOffset = get_store_value(snapPointsOffset);
    const $snapPoints = get_store_value(snapPoints);
    const $fadeFromIndex = get_store_value(fadeFromIndex);
    if (!$snapPoints || typeof $activeSnapPointIndex !== "number" || !$snapPointsOffset || $fadeFromIndex === void 0)
      return null;
    const isOverlaySnapPoint = $activeSnapPointIndex === $fadeFromIndex - 1;
    const isOverlaySnapPointOrHigher = $activeSnapPointIndex >= $fadeFromIndex;
    if (isOverlaySnapPointOrHigher && isDraggingDown) {
      return 0;
    }
    if (isOverlaySnapPoint && !isDraggingDown)
      return 1;
    if (!get_store_value(shouldFade) && !isOverlaySnapPoint)
      return null;
    const targetSnapPointIndex = isOverlaySnapPoint ? $activeSnapPointIndex + 1 : $activeSnapPointIndex - 1;
    const snapPointDistance = isOverlaySnapPoint ? $snapPointsOffset[targetSnapPointIndex] - $snapPointsOffset[targetSnapPointIndex - 1] : $snapPointsOffset[targetSnapPointIndex + 1] - $snapPointsOffset[targetSnapPointIndex];
    const percentageDragged = absDraggedDistance / Math.abs(snapPointDistance);
    if (isOverlaySnapPoint) {
      return 1 - percentageDragged;
    } else {
      return percentageDragged;
    }
  }
  function onSnapPointChange(activeSnapPointIndex2) {
    const $snapPoints = get_store_value(snapPoints);
    const $snapPointsOffset = get_store_value(snapPointsOffset);
    if ($snapPoints && activeSnapPointIndex2 === $snapPointsOffset.length - 1) {
      openTime.set(/* @__PURE__ */ new Date());
    }
  }
  return {
    isLastSnapPoint,
    shouldFade,
    getPercentageDragged,
    activeSnapPointIndex,
    onRelease,
    onDrag,
    snapPointsOffset
  };
}
function isMac() {
  return testPlatform(/^Mac/);
}
function isIPhone() {
  return testPlatform(/^iPhone/);
}
function isIPad() {
  return testPlatform(/^iPad/) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
  return isIPhone() || isIPad();
}
function testPlatform(re) {
  return typeof window !== "undefined" && window.navigator != null ? re.test(window.navigator.platform) : void 0;
}
const visualViewport = typeof document !== "undefined" && window.visualViewport;
function isScrollable(node) {
  const style = window.getComputedStyle(node);
  return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
function getScrollParent(node) {
  if (isScrollable(node)) {
    node = node.parentElement;
  }
  while (node && !isScrollable(node)) {
    node = node.parentElement;
  }
  return node || document.scrollingElement || document.documentElement;
}
let preventScrollCount = 0;
let restore;
function preventScroll() {
  if (typeof document === "undefined")
    return () => {
    };
  preventScrollCount++;
  if (preventScrollCount === 1) {
    if (isIOS()) {
      restore = preventScrollMobileSafari();
    } else {
      restore = preventScrollStandard();
    }
  }
  return () => {
    preventScrollCount--;
    if (preventScrollCount === 0) {
      restore();
    }
  };
}
function getPaddingProperty(documentElement) {
  const documentLeft = documentElement.getBoundingClientRect().left;
  const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
  return scrollbarX ? "paddingLeft" : "paddingRight";
}
function setCSSProperty(el, property, value) {
  if (!el)
    return;
  const previousValue = el.style.getPropertyValue(property);
  el.style.setProperty(property, value);
  return () => {
    if (previousValue) {
      el.style.setProperty(property, previousValue);
    } else {
      el.style.removeProperty(property);
    }
  };
}
function preventScrollStandard() {
  if (typeof document === "undefined")
    return () => {
    };
  const win = document.defaultView ?? window;
  const { documentElement, body } = document;
  const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
  const setScrollbarWidthProperty = () => setCSSProperty(documentElement, "--scrollbar-width", `${scrollbarWidth}px`);
  const paddingProperty = getPaddingProperty(documentElement);
  const scrollbarSidePadding = win.getComputedStyle(body)[paddingProperty];
  return chain(setScrollbarWidthProperty(), setStyle(body, paddingProperty, `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`), setStyle(body, "overflow", "hidden"));
}
function preventScrollMobileSafari() {
  let scrollable;
  let lastY = 0;
  const { documentElement, body, activeElement } = document;
  function onTouchStart(e) {
    scrollable = getScrollParent(e.target);
    if (scrollable === documentElement && scrollable === body)
      return;
    lastY = e.changedTouches[0].pageY;
  }
  function onTouchMove(e) {
    if (!scrollable || scrollable === documentElement || scrollable === body) {
      e.preventDefault();
      return;
    }
    const y2 = e.changedTouches[0].pageY;
    const scrollTop = scrollable.scrollTop;
    const bottom = scrollable.scrollHeight - scrollable.clientHeight;
    if (bottom === 0)
      return;
    if (scrollTop <= 0 && y2 > lastY || scrollTop >= bottom && y2 < lastY) {
      e.preventDefault();
    }
    lastY = y2;
  }
  function onTouchEnd(e) {
    const target = e.target;
    if (!(isInput(target) && target !== activeElement))
      return;
    e.preventDefault();
    target.style.transform = "translateY(-2000px)";
    target.focus();
    requestAnimationFrame(() => {
      target.style.transform = "";
    });
  }
  function onFocus(e) {
    const target = e.target;
    if (!isInput(target))
      return;
    target.style.transform = "translateY(-2000px)";
    requestAnimationFrame(() => {
      target.style.transform = "";
      if (visualViewport) {
        if (visualViewport.height < window.innerHeight) {
          requestAnimationFrame(() => {
            scrollIntoView(target);
          });
        } else {
          visualViewport.addEventListener("resize", () => scrollIntoView(target), { once: true });
        }
      }
    });
  }
  function onWindowScroll() {
    window.scrollTo(0, 0);
  }
  const scrollX = window.pageXOffset;
  const scrollY = window.pageYOffset;
  const restoreStyles = chain(
    setStyle(documentElement, "paddingRight", `${window.innerWidth - documentElement.clientWidth}px`),
    setStyle(documentElement, "overflow", "hidden")
    // setStyle(document.body, 'marginTop', `-${scrollY}px`),
  );
  window.scrollTo(0, 0);
  const removeEvents = chain(addEventListener(document, "touchstart", onTouchStart, { passive: false, capture: true }), addEventListener(document, "touchmove", onTouchMove, { passive: false, capture: true }), addEventListener(document, "touchend", onTouchEnd, { passive: false, capture: true }), addEventListener(document, "focus", onFocus, true), addEventListener(window, "scroll", onWindowScroll));
  return () => {
    restoreStyles();
    removeEvents();
    window.scrollTo(scrollX, scrollY);
  };
}
function setStyle(element, style, value) {
  const cur = element.style[style];
  element.style[style] = value;
  return () => {
    element.style[style] = cur;
  };
}
function scrollIntoView(target) {
  const { documentElement, body, scrollingElement } = document;
  const root = scrollingElement || documentElement;
  while (target && target !== root) {
    const scrollable = getScrollParent(target);
    if (scrollable !== documentElement && scrollable !== body && scrollable !== target) {
      const scrollableTop = scrollable.getBoundingClientRect().top;
      const targetTop = target.getBoundingClientRect().top;
      const targetBottom = target.getBoundingClientRect().bottom;
      const keyboardHeight = scrollable.getBoundingClientRect().bottom;
      if (targetBottom > keyboardHeight) {
        scrollable.scrollTop += targetTop - scrollableTop;
      }
    }
    target = scrollable.parentElement;
  }
}
let previousBodyPosition = null;
function handlePositionFixed({ isOpen, modal, nested, hasBeenOpened }) {
  const activeUrl = writable(typeof window !== "undefined" ? window.location.href : "");
  let scrollPos = 0;
  function setPositionFixed(open) {
    if (!(previousBodyPosition === null && open))
      return;
    previousBodyPosition = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      height: document.body.style.height
    };
    const { scrollX, innerHeight } = window;
    document.body.style.setProperty("position", "fixed", "important");
    document.body.style.top = `${-scrollPos}px`;
    document.body.style.left = `${-scrollX}px`;
    document.body.style.right = "0px";
    document.body.style.height = "auto";
    setTimeout(() => requestAnimationFrame(() => {
      const bottomBarHeight = innerHeight - window.innerHeight;
      if (bottomBarHeight && scrollPos >= innerHeight) {
        document.body.style.top = `${-(scrollPos + bottomBarHeight)}px`;
      }
    }), 300);
  }
  function restorePositionSetting() {
    if (previousBodyPosition === null)
      return;
    const $activeUrl = get_store_value(activeUrl);
    const y2 = -parseInt(document.body.style.top, 10);
    const x3 = -parseInt(document.body.style.left, 10);
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;
    document.body.style.height = previousBodyPosition.height;
    document.body.style.right = "unset";
    requestAnimationFrame(() => {
      if ($activeUrl !== window.location.href) {
        activeUrl.set(window.location.href);
        return;
      }
      window.scrollTo(x3, y2);
    });
    previousBodyPosition = null;
  }
  effect([isOpen, activeUrl], ([$isOpen, _]) => {
    if (typeof document === "undefined")
      return;
    if (get_store_value(nested) || !get_store_value(hasBeenOpened))
      return;
    if ($isOpen) {
      setPositionFixed($isOpen);
      if (!get_store_value(modal)) {
        setTimeout(() => {
          restorePositionSetting();
        }, 500);
      }
    } else {
      restorePositionSetting();
    }
  });
  return { restorePositionSetting };
}
const CLOSE_THRESHOLD = 0.25;
const SCROLL_LOCK_TIMEOUT = 100;
const BORDER_RADIUS = 8;
const NESTED_DISPLACEMENT = 16;
const WINDOW_TOP_OFFSET = 26;
const DRAG_CLASS = "vaul-dragging";
const openDrawerIds = writable([]);
const defaultProps = {
  closeThreshold: CLOSE_THRESHOLD,
  shouldScaleBackground: true,
  scrollLockTimeout: SCROLL_LOCK_TIMEOUT,
  onDrag: void 0,
  onRelease: void 0,
  snapPoints: void 0,
  fadeFromIndex: void 0,
  defaultActiveSnapPoint: void 0,
  onActiveSnapPointChange: void 0,
  defaultOpen: false,
  onOpenChange: void 0,
  fixed: void 0,
  dismissible: true,
  modal: true,
  nested: false,
  onClose: void 0,
  direction: "bottom"
};
const omittedOptions = [
  "defaultOpen",
  "onOpenChange",
  "defaultActiveSnapPoint",
  "onActiveSnapPointChange",
  "onDrag",
  "onRelease",
  "onClose"
];
function createVaul(props) {
  const { snapPoints: snapPointsProp, fadeFromIndex: fadeFromIndexProp = snapPointsProp && snapPointsProp.length - 1, ...withDefaults } = { ...defaultProps, ...removeUndefined(props) };
  const options = toWritableStores(omit({
    ...withDefaults,
    snapPoints: snapPointsProp,
    fadeFromIndex: fadeFromIndexProp
  }, ...omittedOptions));
  const triggerRef = writable(void 0);
  const { onDrag: onDragProp, onRelease: onReleaseProp, onClose, onOpenChange } = withDefaults;
  const { snapPoints, fadeFromIndex, fixed, dismissible, modal, nested, shouldScaleBackground, scrollLockTimeout, closeThreshold, direction } = options;
  const openStore = writable(withDefaults.defaultOpen);
  const isOpen = overridable(openStore, withDefaults.onOpenChange);
  const hasBeenOpened = writable(false);
  const visible = writable(false);
  const justReleased = writable(false);
  const overlayRef = writable(void 0);
  const openTime = writable(null);
  const keyboardIsOpen = writable(false);
  const drawerRef = writable(void 0);
  const drawerId = writable(void 0);
  let isDragging = false;
  let dragStartTime = null;
  let isClosing = false;
  let pointerStart = 0;
  let dragEndTime = null;
  let lastTimeDragPrevented = null;
  let isAllowedToDrag = false;
  let drawerHeightRef = get_store_value(drawerRef)?.getBoundingClientRect().height || 0;
  let previousDiffFromInitial = 0;
  let initialDrawerHeight = 0;
  let nestedOpenChangeTimer = null;
  const activeSnapPoint = overridable(writable(withDefaults.defaultActiveSnapPoint), withDefaults.onActiveSnapPointChange);
  const { activeSnapPointIndex, getPercentageDragged: getSnapPointsPercentageDragged, onDrag: onDragSnapPoints, onRelease: onReleaseSnapPoints, shouldFade, snapPointsOffset } = handleSnapPoints({
    snapPoints,
    activeSnapPoint,
    drawerRef,
    fadeFromIndex,
    overlayRef,
    openTime,
    direction
  });
  const getContentStyle = derived([snapPointsOffset], ([$snapPointsOffset]) => {
    return (style = "") => {
      if ($snapPointsOffset && $snapPointsOffset.length > 0) {
        const styleProp = styleToString({
          "--snap-point-height": `${$snapPointsOffset[0]}px`
        });
        return style + styleProp;
      }
      return style;
    };
  });
  effect([drawerRef], ([$drawerRef]) => {
    if ($drawerRef) {
      drawerId.set($drawerRef.id);
    }
  });
  effect([isOpen], ([$open]) => {
    sleep(100).then(() => {
      const id = get_store_value(drawerId);
      if ($open && id) {
        openDrawerIds.update((prev) => {
          if (prev.includes(id)) {
            return prev;
          }
          prev.push(id);
          return prev;
        });
      } else {
        openDrawerIds.update((prev) => prev.filter((id2) => id2 !== id2));
      }
    });
  });
  effect([isOpen], ([$isOpen]) => {
    if (!$isOpen && get_store_value(shouldScaleBackground)) {
      const id = setTimeout(() => {
        reset(document.body, "background");
      }, 200);
      return () => clearTimeout(id);
    }
  });
  effect([isOpen], ([$isOpen]) => {
    let unsub = () => {
    };
    if ($isOpen) {
      unsub = preventScroll();
    }
    return unsub;
  });
  const { restorePositionSetting } = handlePositionFixed({ isOpen, modal, nested, hasBeenOpened });
  effect([drawerRef], ([$drawerRef]) => {
    let unsub = noop$1;
    if ($drawerRef) {
      unsub = handleEscapeKeydown($drawerRef, () => {
        closeDrawer(true);
      });
    }
    return () => {
      unsub();
    };
  });
  function openDrawer() {
    if (isClosing)
      return;
    hasBeenOpened.set(true);
    isOpen.set(true);
  }
  function onPress(event) {
    const $drawerRef = get_store_value(drawerRef);
    if (!get_store_value(dismissible) && !get_store_value(snapPoints))
      return;
    if ($drawerRef && !$drawerRef.contains(event.target))
      return;
    drawerHeightRef = $drawerRef?.getBoundingClientRect().height || 0;
    isDragging = true;
    dragStartTime = /* @__PURE__ */ new Date();
    if (isIOS()) {
      window.addEventListener("touchend", () => isAllowedToDrag = false, { once: true });
    }
    event.target.setPointerCapture(event.pointerId);
    pointerStart = isVertical(get_store_value(direction)) ? event.screenY : event.screenX;
  }
  function shouldDrag(el, isDraggingInDirection) {
    const $drawerRef = get_store_value(drawerRef);
    let element = el;
    const highlightedText = window.getSelection()?.toString();
    const $direction = get_store_value(direction);
    const swipeAmount = $drawerRef ? getTranslate($drawerRef, $direction) : null;
    const date = /* @__PURE__ */ new Date();
    if (element.hasAttribute("data-vaul-no-drag") || element.closest("[data-vaul-no-drag]")) {
      return false;
    }
    const $openTime = get_store_value(openTime);
    if ($openTime && date.getTime() - $openTime.getTime() < 500) {
      return false;
    }
    if (swipeAmount !== null) {
      if ($direction === "bottom" || $direction === "right" ? swipeAmount > 0 : swipeAmount < 0) {
        return true;
      }
    }
    if (swipeAmount !== null && swipeAmount > 0) {
      return true;
    }
    if (highlightedText && highlightedText.length > 0) {
      return false;
    }
    const $scrollLockTimeout = get_store_value(scrollLockTimeout);
    if (lastTimeDragPrevented && date.getTime() - lastTimeDragPrevented.getTime() < $scrollLockTimeout && swipeAmount === 0) {
      lastTimeDragPrevented = date;
      return false;
    }
    if (isDraggingInDirection) {
      lastTimeDragPrevented = date;
      return false;
    }
    while (element) {
      if (element.scrollHeight > element.clientHeight) {
        if (element.scrollTop !== 0) {
          lastTimeDragPrevented = /* @__PURE__ */ new Date();
          return false;
        }
        if (element.getAttribute("role") === "dialog") {
          return true;
        }
      }
      element = element.parentNode;
    }
    return true;
  }
  function onDrag(event) {
    const $drawerRef = get_store_value(drawerRef);
    if (!$drawerRef || !isDragging)
      return;
    const $direction = get_store_value(direction);
    const directionMultiplier = getDirectionMultiplier($direction);
    const draggedDistance = getDistanceMoved(pointerStart, $direction, event) * directionMultiplier;
    const isDraggingInDirection = draggedDistance > 0;
    const $activeSnapPointIndex = get_store_value(activeSnapPointIndex);
    const $snapPoints = get_store_value(snapPoints);
    if ($snapPoints && $activeSnapPointIndex === 0 && !get_store_value(dismissible))
      return;
    if (!isAllowedToDrag && !shouldDrag(event.target, isDraggingInDirection)) {
      return;
    }
    $drawerRef.classList.add(DRAG_CLASS);
    isAllowedToDrag = true;
    set($drawerRef, {
      transition: "none"
    });
    const $overlayRef = get_store_value(overlayRef);
    set($overlayRef, {
      transition: "none"
    });
    if ($snapPoints) {
      onDragSnapPoints({ draggedDistance });
    }
    if (isDraggingInDirection && !$snapPoints) {
      const dampenedDraggedDistance = dampenValue(draggedDistance);
      const translateValue = Math.min(dampenedDraggedDistance * -1, 0) * directionMultiplier;
      set($drawerRef, {
        transform: isVertical($direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
      });
      return;
    }
    const absDraggedDistance = Math.abs(draggedDistance);
    let percentageDragged = absDraggedDistance / drawerHeightRef;
    const snapPointPercentageDragged = getSnapPointsPercentageDragged(absDraggedDistance, isDraggingInDirection);
    if (snapPointPercentageDragged !== null) {
      percentageDragged = snapPointPercentageDragged;
    }
    const opacityValue = 1 - percentageDragged;
    const $fadeFromIndex = get_store_value(fadeFromIndex);
    const $shouldFade = get_store_value(shouldFade);
    if ($shouldFade || $fadeFromIndex && $activeSnapPointIndex === $fadeFromIndex - 1) {
      onDragProp?.(event, percentageDragged);
      set($overlayRef, {
        opacity: `${opacityValue}`,
        transition: "none"
      }, true);
    }
    const wrapper = document.querySelector("[data-vaul-drawer-wrapper]");
    if (wrapper && $overlayRef && get_store_value(shouldScaleBackground)) {
      const scaleValue = Math.min(getScale() + percentageDragged * (1 - getScale()), 1);
      const borderRadiusValue = 8 - percentageDragged * 8;
      const translateValue = Math.max(0, 14 - percentageDragged * 14);
      set(wrapper, {
        borderRadius: `${borderRadiusValue}px`,
        transform: isVertical($direction) ? `scale(${scaleValue}) translate3d(0, ${translateValue}px, 0)` : `scale(${scaleValue}) translate3d(${translateValue}px, 0, 0)`,
        transition: "none"
      }, true);
    }
    if (!$snapPoints) {
      const translateValue = absDraggedDistance * directionMultiplier;
      set($drawerRef, {
        transform: isVertical($direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
      });
    }
  }
  function scaleBackground(open, backgroundColor = "black") {
    const wrapper = document.querySelector("[data-vaul-drawer-wrapper]");
    if (!wrapper || !get_store_value(shouldScaleBackground))
      return;
    const $direction = get_store_value(direction);
    if (open) {
      set(document.body, {
        background: document.body.style.backgroundColor || document.body.style.background
      });
      set(document.body, {
        background: backgroundColor
      }, true);
      set(wrapper, {
        borderRadius: `${BORDER_RADIUS}px`,
        overflow: "hidden",
        ...isVertical($direction) ? {
          transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${TRANSITIONS.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(",")})`
      });
    } else {
      reset(wrapper, "overflow");
      reset(wrapper, "transform");
      reset(wrapper, "borderRadius");
      set(wrapper, {
        transitionProperty: "transform, border-radius",
        transitionDuration: `${TRANSITIONS.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(",")})`
      });
    }
  }
  effect([activeSnapPointIndex, snapPoints, snapPointsOffset], ([$activeSnapPointIndex, $snapPoints, $snapPointsOffset]) => {
    function onVisualViewportChange() {
      const $drawerRef = get_store_value(drawerRef);
      if (!$drawerRef)
        return;
      const $keyboardIsOpen = get_store_value(keyboardIsOpen);
      const focusedElement = document.activeElement;
      if (isInput(focusedElement) || $keyboardIsOpen) {
        const visualViewportHeight = window.visualViewport?.height || 0;
        let diffFromInitial = window.innerHeight - visualViewportHeight;
        const drawerHeight = $drawerRef.getBoundingClientRect().height || 0;
        if (!initialDrawerHeight) {
          initialDrawerHeight = drawerHeight;
        }
        const offsetFromTop = $drawerRef.getBoundingClientRect().top;
        if (Math.abs(previousDiffFromInitial - diffFromInitial) > 60) {
          keyboardIsOpen.set(!$keyboardIsOpen);
        }
        if ($snapPoints && $snapPoints.length > 0 && $snapPointsOffset && $activeSnapPointIndex) {
          const activeSnapPointHeight = $snapPointsOffset[$activeSnapPointIndex] || 0;
          diffFromInitial += activeSnapPointHeight;
        }
        previousDiffFromInitial = diffFromInitial;
        if (drawerHeight > visualViewportHeight || $keyboardIsOpen) {
          const height = $drawerRef.getBoundingClientRect().height;
          let newDrawerHeight = height;
          if (height > visualViewportHeight) {
            newDrawerHeight = visualViewportHeight - WINDOW_TOP_OFFSET;
          }
          if (get_store_value(fixed)) {
            $drawerRef.style.height = `${height - Math.max(diffFromInitial, 0)}px`;
          } else {
            $drawerRef.style.height = `${Math.max(newDrawerHeight, visualViewportHeight - offsetFromTop)}px`;
          }
        } else {
          $drawerRef.style.height = `${initialDrawerHeight}px`;
        }
        if ($snapPoints && $snapPoints.length > 0 && !$keyboardIsOpen) {
          $drawerRef.style.bottom = `0px`;
        } else {
          $drawerRef.style.bottom = `${Math.max(diffFromInitial, 0)}px`;
        }
      }
    }
    let removeListener = noop$1;
    if (window.visualViewport) {
      removeListener = addEventListener(window.visualViewport, "resize", onVisualViewportChange);
    }
    return () => {
      removeListener();
    };
  });
  function closeDrawer(withKeyboard = false) {
    if (isClosing)
      return;
    const $drawerRef = get_store_value(drawerRef);
    if (!$drawerRef)
      return;
    const $direction = get_store_value(direction);
    onClose?.();
    set($drawerRef, {
      transform: isVertical($direction) ? `translate3d(0, ${$direction === "bottom" ? "100%" : "-100%"}, 0)` : `translate3d(${$direction === "right" ? "100%" : "-100%"}, 0, 0)`,
      transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`
    });
    set(get_store_value(overlayRef), {
      opacity: "0",
      transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`
    });
    scaleBackground(false);
    isClosing = true;
    setTimeout(() => {
      visible.set(false);
      isOpen.set(false);
      isClosing = false;
      if (withKeyboard) {
        get_store_value(triggerRef)?.focus();
      }
    }, 300);
    const $snapPoints = get_store_value(snapPoints);
    setTimeout(() => {
      reset(document.documentElement, "scrollBehavior");
      if ($snapPoints) {
        activeSnapPoint.set($snapPoints[0]);
      }
    }, TRANSITIONS.DURATION * 1e3);
  }
  effect([isOpen], ([$isOpen]) => {
    if ($isOpen) {
      hasBeenOpened.set(true);
    } else {
      closeDrawer();
    }
  });
  function resetDrawer() {
    const $drawerRef = get_store_value(drawerRef);
    if (!$drawerRef)
      return;
    const $overlayRef = get_store_value(overlayRef);
    const wrapper = document.querySelector("[data-vaul-drawer-wrapper]");
    const $direction = get_store_value(direction);
    const currentSwipeAmount = getTranslate($drawerRef, $direction);
    set($drawerRef, {
      transform: "translate3d(0, 0, 0)",
      transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`
    });
    set($overlayRef, {
      transition: `opacity ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
      opacity: "1"
    });
    const $shouldScaleBackground = get_store_value(shouldScaleBackground);
    const $isOpen = get_store_value(isOpen);
    if ($shouldScaleBackground && currentSwipeAmount && currentSwipeAmount > 0 && $isOpen) {
      set(wrapper, {
        borderRadius: `${BORDER_RADIUS}px`,
        overflow: "hidden",
        ...isVertical($direction) ? {
          transform: `scale(${getScale()}) translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
          transformOrigin: "top"
        } : {
          transform: `scale(${getScale()}) translate3d(calc(env(safe-area-inset-top) + 14px), 0, 0)`,
          transformOrigin: "left"
        },
        transitionProperty: "transform, border-radius",
        transitionDuration: `${TRANSITIONS.DURATION}s`,
        transitionTimingFunction: `cubic-bezier(${TRANSITIONS.EASE.join(",")})`
      }, true);
    }
  }
  function onRelease(event) {
    const $drawerRef = get_store_value(drawerRef);
    if (!isDragging || !$drawerRef)
      return;
    if (isAllowedToDrag && isInput(event.target)) {
      event.target.blur();
    }
    $drawerRef.classList.remove(DRAG_CLASS);
    isAllowedToDrag = false;
    isDragging = false;
    dragEndTime = /* @__PURE__ */ new Date();
    const $direction = get_store_value(direction);
    const swipeAmount = getTranslate($drawerRef, $direction);
    if (event.target && !shouldDrag(event.target, false) || !swipeAmount || Number.isNaN(swipeAmount))
      return;
    if (dragStartTime === null)
      return;
    const timeTaken = dragEndTime.getTime() - dragStartTime.getTime();
    const distMoved = getDistanceMoved(pointerStart, $direction, event);
    const velocity = Math.abs(distMoved) / timeTaken;
    if (velocity > 0.05) {
      justReleased.set(true);
      setTimeout(() => {
        justReleased.set(false);
      }, 200);
    }
    if (get_store_value(snapPoints)) {
      onReleaseSnapPoints({
        draggedDistance: distMoved * getDirectionMultiplier($direction),
        closeDrawer,
        velocity,
        dismissible: get_store_value(dismissible)
      });
      onReleaseProp?.(event, true);
      return;
    }
    if ($direction === "bottom" || $direction === "right" ? distMoved > 0 : distMoved < 0) {
      resetDrawer();
      onReleaseProp?.(event, true);
      return;
    }
    if (velocity > VELOCITY_THRESHOLD) {
      closeDrawer();
      onReleaseProp?.(event, false);
      return;
    }
    const visibleDrawerHeight = Math.min(get_store_value(drawerRef)?.getBoundingClientRect().height ?? 0, window.innerHeight);
    if (swipeAmount >= visibleDrawerHeight * get_store_value(closeThreshold)) {
      closeDrawer();
      onReleaseProp?.(event, false);
      return;
    }
    onReleaseProp?.(event, true);
    resetDrawer();
  }
  effect([isOpen], ([$isOpen]) => {
    if (!$isOpen)
      return;
    if (isBrowser) {
      set(document.documentElement, {
        scrollBehavior: "auto"
      });
    }
    openTime.set(/* @__PURE__ */ new Date());
    scaleBackground(true, props.backgroundColor);
  });
  effect([visible], ([$visible]) => {
    if (!$visible)
      return;
    const $drawerRef = get_store_value(drawerRef);
    if (!$drawerRef)
      return;
    const children = $drawerRef.querySelectorAll("*");
    children.forEach((child) => {
      const htmlChild = child;
      if (htmlChild.scrollHeight > htmlChild.clientHeight || htmlChild.scrollWidth > htmlChild.clientWidth) {
        htmlChild.classList.add("vaul-scrollable");
      }
    });
  });
  function onNestedOpenChange(o) {
    const $drawerRef = get_store_value(drawerRef);
    const scale = o ? (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth : 1;
    const y2 = o ? -NESTED_DISPLACEMENT : 0;
    if (nestedOpenChangeTimer) {
      window.clearTimeout(nestedOpenChangeTimer);
    }
    set($drawerRef, {
      transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
      transform: `scale(${scale}) translate3d(0, ${y2}px, 0)`
    });
    if (!o && $drawerRef) {
      nestedOpenChangeTimer = setTimeout(() => {
        const $direction = get_store_value(direction);
        const translateValue = getTranslate($drawerRef, $direction);
        set($drawerRef, {
          transition: "none",
          transform: isVertical($direction) ? `translate3d(0, ${translateValue}px, 0)` : `translate3d(${translateValue}px, 0, 0)`
        });
      }, 500);
    }
  }
  function onNestedDrag(_, percentageDragged) {
    if (percentageDragged < 0)
      return;
    const initialScale = (window.innerWidth - NESTED_DISPLACEMENT) / window.innerWidth;
    const newScale = initialScale + percentageDragged * (1 - initialScale);
    const newTranslate = -NESTED_DISPLACEMENT + percentageDragged * NESTED_DISPLACEMENT;
    const $direction = get_store_value(direction);
    set(get_store_value(drawerRef), {
      transform: isVertical($direction) ? `scale(${newScale}) translate3d(0, ${newTranslate}px, 0)` : `scale(${newScale}) translate3d(${newTranslate}px, 0, 0)`,
      transition: "none"
    });
  }
  function onNestedRelease(_, o) {
    const $direction = get_store_value(direction);
    const dim = isVertical($direction) ? window.innerHeight : window.innerWidth;
    const scale = o ? (dim - NESTED_DISPLACEMENT) / dim : 1;
    const translate = o ? -NESTED_DISPLACEMENT : 0;
    if (o) {
      set(get_store_value(drawerRef), {
        transition: `transform ${TRANSITIONS.DURATION}s cubic-bezier(${TRANSITIONS.EASE.join(",")})`,
        transform: isVertical($direction) ? `scale(${scale}) translate3d(0, ${translate}px, 0)` : `scale(${scale}) translate3d(${translate}px, 0, 0)`
      });
    }
  }
  return {
    states: {
      isOpen,
      hasBeenOpened,
      snapPoints,
      activeSnapPoint,
      snapPointsOffset,
      keyboardIsOpen,
      shouldFade,
      visible,
      drawerId,
      openDrawerIds
    },
    helpers: {
      getContentStyle
    },
    methods: {
      closeDrawer,
      onOpenChange,
      onPress,
      onRelease,
      onDrag,
      scaleBackground,
      onNestedDrag,
      onNestedOpenChange,
      onNestedRelease,
      restorePositionSetting,
      openDrawer
    },
    refs: {
      drawerRef,
      overlayRef,
      triggerRef
    },
    options
  };
}
function dampenValue(v2) {
  return 8 * (Math.log(v2 + 1) - 2);
}
function getScale() {
  return (window.innerWidth - WINDOW_TOP_OFFSET) / window.innerWidth;
}
function getDistanceMoved(pointerStart, direction, event) {
  if (event.type.startsWith("touch")) {
    return getDistanceMovedForTouch(pointerStart, direction, event);
  } else {
    return getDistanceMovedForPointer(pointerStart, direction, event);
  }
}
function getDistanceMovedForPointer(pointerStart, direction, event) {
  return pointerStart - (isVertical(direction) ? event.screenY : event.screenX);
}
function getDistanceMovedForTouch(pointerStart, direction, event) {
  return pointerStart - (isVertical(direction) ? event.changedTouches[0].screenY : event.changedTouches[0].screenX);
}
function getDirectionMultiplier(direction) {
  return direction === "bottom" || direction === "right" ? 1 : -1;
}
const VAUL_ROOT = Symbol("VAUL_ROOT");
function setCtx(props = {}) {
  const vaul = createVaul(props);
  const updateOption = getOptionUpdater(vaul.options);
  setContext(VAUL_ROOT, { ...vaul, updateOption });
  return {
    ...vaul,
    updateOption
  };
}
function getCtx() {
  return getContext(VAUL_ROOT);
}
const css = {
  code: '[data-vaul-drawer]{touch-action:none;transition:transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)}[data-vaul-drawer][data-vaul-drawer-direction="bottom"]{transform:translate3d(0, 100%, 0)}[data-vaul-drawer][data-vaul-drawer-direction="top"]{transform:translate3d(0, -100%, 0)}[data-vaul-drawer][data-vaul-drawer-direction="left"]{transform:translate3d(-100%, 0, 0)}[data-vaul-drawer][data-vaul-drawer-direction="right"]{transform:translate3d(100%, 0, 0)}.vaul-dragging .vaul-scrollable [data-vaul-drawer-direction="top"]{overflow-y:hidden !important}.vaul-dragging .vaul-scrollable [data-vaul-drawer-direction="bottom"]{overflow-y:hidden !important}.vaul-dragging .vaul-scrollable [data-vaul-drawer-direction="left"]{overflow-x:hidden !important}.vaul-dragging .vaul-scrollable [data-vaul-drawer-direction="right"]{overflow-x:hidden !important}[data-vaul-drawer][data-vaul-drawer-visible="true"][data-vaul-drawer-direction="top"]{transform:translate3d(0, var(--snap-point-height, 0), 0)}\n			[data-vaul-drawer][data-vaul-drawer-visible="true"][data-vaul-drawer-direction="bottom"]\n		{transform:translate3d(0, var(--snap-point-height, 0), 0)}[data-vaul-drawer][data-vaul-drawer-visible="true"][data-vaul-drawer-direction="left"]{transform:translate3d(var(--snap-point-height, 0), 0, 0)}[data-vaul-drawer][data-vaul-drawer-visible="true"][data-vaul-drawer-direction="right"]{transform:translate3d(var(--snap-point-height, 0), 0, 0)}[data-vaul-overlay]{opacity:0;transition:opacity 0.5s cubic-bezier(0.32, 0.72, 0, 1)}[data-vaul-overlay][data-vaul-drawer-visible="true"]{opacity:1}[data-vaul-drawer]::after{content:"";position:absolute;background:inherit;background-color:inherit}[data-vaul-drawer][data-vaul-drawer-direction="top"]::after{top:initial;bottom:100%;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction="bottom"]::after{top:100%;bottom:initial;left:0;right:0;height:200%}[data-vaul-drawer][data-vaul-drawer-direction="left"]::after{left:initial;right:100%;top:0;bottom:0;width:200%}[data-vaul-drawer][data-vaul-drawer-direction="right"]::after{left:100%;right:initial;top:0;bottom:0;width:200%}\n			[data-vaul-overlay][data-vaul-snap-points="true"]:not(\n					[data-vaul-snap-points-overlay="true"]\n				):not([data-state="closed"])\n		{opacity:0}\n			[data-vaul-overlay][data-vaul-snap-points-overlay="true"]:not(\n					[data-vaul-drawer-visible="false"]\n				)\n		{opacity:1}@keyframes fake-animation{from{}to{}}@media(hover: hover) and (pointer: fine){[data-vaul-drawer]{-webkit-user-select:none;-moz-user-select:none;user-select:none}}',
  map: null
};
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "open",
    "onOpenChange",
    "closeThreshold",
    "scrollLockTimeout",
    "snapPoints",
    "fadeFromIndex",
    "openFocus",
    "onOutsideClick",
    "closeOnOutsideClick",
    "backgroundColor",
    "nested",
    "shouldScaleBackground",
    "activeSnapPoint",
    "onActiveSnapPointChange",
    "onRelease",
    "onDrag",
    "onClose",
    "dismissible",
    "direction"
  ]);
  let $isOpen, $$unsubscribe_isOpen;
  let $keyboardIsOpen, $$unsubscribe_keyboardIsOpen;
  let $localDismissible, $$unsubscribe_localDismissible;
  let { open = false } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { closeThreshold = void 0 } = $$props;
  let { scrollLockTimeout = void 0 } = $$props;
  let { snapPoints = void 0 } = $$props;
  let { fadeFromIndex = void 0 } = $$props;
  let { openFocus = void 0 } = $$props;
  let { onOutsideClick = void 0 } = $$props;
  let { closeOnOutsideClick = true } = $$props;
  let { backgroundColor = "black" } = $$props;
  let { nested = false } = $$props;
  let { shouldScaleBackground = false } = $$props;
  let { activeSnapPoint = void 0 } = $$props;
  let { onActiveSnapPointChange = void 0 } = $$props;
  let { onRelease = void 0 } = $$props;
  let { onDrag = void 0 } = $$props;
  let { onClose = void 0 } = $$props;
  let { dismissible = void 0 } = $$props;
  let { direction = "bottom" } = $$props;
  const { states: { keyboardIsOpen, activeSnapPoint: localActiveSnapPoint, drawerId, openDrawerIds: openDrawerIds2, isOpen }, methods: { closeDrawer, openDrawer }, options: { dismissible: localDismissible }, updateOption } = setCtx({
    defaultOpen: open,
    defaultActiveSnapPoint: activeSnapPoint,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    },
    onActiveSnapPointChange: ({ next }) => {
      if (next === void 0 && snapPoints && activeSnapPoint !== next) {
        const newNext = snapPoints[0];
        onActiveSnapPointChange?.(newNext);
        activeSnapPoint = newNext;
        return newNext;
      }
      if (activeSnapPoint !== next) {
        onActiveSnapPointChange?.(next);
        activeSnapPoint = next;
      }
      return next;
    },
    closeThreshold,
    scrollLockTimeout,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    snapPoints,
    fadeFromIndex,
    nested,
    onDrag,
    onClose,
    onRelease,
    shouldScaleBackground,
    backgroundColor,
    dismissible,
    direction
  });
  $$unsubscribe_keyboardIsOpen = subscribe(keyboardIsOpen, (value) => $keyboardIsOpen = value);
  $$unsubscribe_isOpen = subscribe(isOpen, (value) => $isOpen = value);
  $$unsubscribe_localDismissible = subscribe(localDismissible, (value) => $localDismissible = value);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  if ($$props.closeThreshold === void 0 && $$bindings.closeThreshold && closeThreshold !== void 0)
    $$bindings.closeThreshold(closeThreshold);
  if ($$props.scrollLockTimeout === void 0 && $$bindings.scrollLockTimeout && scrollLockTimeout !== void 0)
    $$bindings.scrollLockTimeout(scrollLockTimeout);
  if ($$props.snapPoints === void 0 && $$bindings.snapPoints && snapPoints !== void 0)
    $$bindings.snapPoints(snapPoints);
  if ($$props.fadeFromIndex === void 0 && $$bindings.fadeFromIndex && fadeFromIndex !== void 0)
    $$bindings.fadeFromIndex(fadeFromIndex);
  if ($$props.openFocus === void 0 && $$bindings.openFocus && openFocus !== void 0)
    $$bindings.openFocus(openFocus);
  if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0)
    $$bindings.onOutsideClick(onOutsideClick);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.backgroundColor === void 0 && $$bindings.backgroundColor && backgroundColor !== void 0)
    $$bindings.backgroundColor(backgroundColor);
  if ($$props.nested === void 0 && $$bindings.nested && nested !== void 0)
    $$bindings.nested(nested);
  if ($$props.shouldScaleBackground === void 0 && $$bindings.shouldScaleBackground && shouldScaleBackground !== void 0)
    $$bindings.shouldScaleBackground(shouldScaleBackground);
  if ($$props.activeSnapPoint === void 0 && $$bindings.activeSnapPoint && activeSnapPoint !== void 0)
    $$bindings.activeSnapPoint(activeSnapPoint);
  if ($$props.onActiveSnapPointChange === void 0 && $$bindings.onActiveSnapPointChange && onActiveSnapPointChange !== void 0)
    $$bindings.onActiveSnapPointChange(onActiveSnapPointChange);
  if ($$props.onRelease === void 0 && $$bindings.onRelease && onRelease !== void 0)
    $$bindings.onRelease(onRelease);
  if ($$props.onDrag === void 0 && $$bindings.onDrag && onDrag !== void 0)
    $$bindings.onDrag(onDrag);
  if ($$props.onClose === void 0 && $$bindings.onClose && onClose !== void 0)
    $$bindings.onClose(onClose);
  if ($$props.dismissible === void 0 && $$bindings.dismissible && dismissible !== void 0)
    $$bindings.dismissible(dismissible);
  if ($$props.direction === void 0 && $$bindings.direction && direction !== void 0)
    $$bindings.direction(direction);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    activeSnapPoint !== void 0 && localActiveSnapPoint.set(activeSnapPoint);
    {
      updateOption("closeThreshold", closeThreshold);
    }
    {
      updateOption("scrollLockTimeout", scrollLockTimeout);
    }
    {
      updateOption("snapPoints", snapPoints);
    }
    {
      updateOption("fadeFromIndex", fadeFromIndex);
    }
    {
      updateOption("openFocus", openFocus);
    }
    {
      updateOption("shouldScaleBackground", shouldScaleBackground);
    }
    {
      updateOption("backgroundColor", backgroundColor);
    }
    {
      updateOption("dismissible", dismissible);
    }
    {
      updateOption("direction", direction);
    }
    open && !$isOpen && openDrawer();
    !open && $isOpen && closeDrawer();
    $$rendered = `${validate_component(Dialog, "DialogPrimitive.Root").$$render(
      $$result,
      Object.assign(
        {},
        { closeOnOutsideClick },
        { closeOnEscape: false },
        { preventScroll: false },
        {
          onOpenChange: (o) => {
            onOpenChange?.(o);
            if (!o) {
              closeDrawer();
            } else if (o) {
              openDrawer();
            }
          }
        },
        {
          onOutsideClick: (e) => {
            if (!closeOnOutsideClick)
              return;
            onOutsideClick?.(e);
            if (e?.defaultPrevented)
              return;
            if ($keyboardIsOpen) {
              keyboardIsOpen.set(false);
            }
            e.preventDefault();
            if (!$localDismissible) {
              return;
            }
            const $openDialogIds = get_store_value(openDrawerIds2);
            const isLast = $openDialogIds[$openDialogIds.length - 1] === get_store_value(drawerId);
            if (isLast) {
              onOpenChange?.(false);
              closeDrawer();
            }
          }
        },
        $$restProps,
        { open }
      ),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_isOpen();
  $$unsubscribe_keyboardIsOpen();
  $$unsubscribe_localDismissible();
  return $$rendered;
});
const Visible = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  getCtx();
  return ``;
});
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["style"]);
  let $drawerRef, $$unsubscribe_drawerRef;
  let $getContentStyle, $$unsubscribe_getContentStyle;
  let $direction, $$unsubscribe_direction;
  let $visible, $$unsubscribe_visible;
  const { refs: { drawerRef }, states: { visible }, helpers: { getContentStyle }, methods: { onPress, onDrag, onRelease }, options: { direction } } = getCtx();
  $$unsubscribe_drawerRef = subscribe(drawerRef, (value) => $drawerRef = value);
  $$unsubscribe_visible = subscribe(visible, (value) => $visible = value);
  $$unsubscribe_getContentStyle = subscribe(getContentStyle, (value) => $getContentStyle = value);
  $$unsubscribe_direction = subscribe(direction, (value) => $direction = value);
  let { style = "" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Dialog_content, "DialogPrimitive.Content").$$render(
      $$result,
      Object.assign(
        {},
        { style: $getContentStyle(style) },
        { "data-vaul-drawer": "" },
        { "data-vaul-drawer-direction": $direction },
        {
          "data-vaul-drawer-visible": $visible ? "true" : "false"
        },
        $$restProps,
        { el: $drawerRef }
      ),
      {
        el: ($$value) => {
          $drawerRef = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Visible, "Visible").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_drawerRef();
  $$unsubscribe_getContentStyle();
  $$unsubscribe_direction();
  $$unsubscribe_visible();
  return $$rendered;
});
const Overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasSnapPoints;
  let $$restProps = compute_rest_props($$props, []);
  let $snapPoints, $$unsubscribe_snapPoints;
  let $overlayRef, $$unsubscribe_overlayRef;
  let $visible, $$unsubscribe_visible;
  let $isOpen, $$unsubscribe_isOpen;
  let $shouldFade, $$unsubscribe_shouldFade;
  const { refs: { overlayRef }, states: { isOpen, visible, snapPoints, shouldFade }, methods: { onRelease } } = getCtx();
  $$unsubscribe_overlayRef = subscribe(overlayRef, (value) => $overlayRef = value);
  $$unsubscribe_isOpen = subscribe(isOpen, (value) => $isOpen = value);
  $$unsubscribe_visible = subscribe(visible, (value) => $visible = value);
  $$unsubscribe_snapPoints = subscribe(snapPoints, (value) => $snapPoints = value);
  $$unsubscribe_shouldFade = subscribe(shouldFade, (value) => $shouldFade = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    hasSnapPoints = $snapPoints && $snapPoints.length > 0;
    $$rendered = `${validate_component(Dialog_overlay, "DialogPrimitive.Overlay").$$render(
      $$result,
      Object.assign(
        {},
        {
          "data-vaul-drawer-visible": $visible ? "true" : "false"
        },
        { "data-vaul-overlay": "" },
        {
          "data-vaul-snap-points": $isOpen && hasSnapPoints ? "true" : "false"
        },
        {
          "data-vaul-snap-points-overlay": $isOpen && $shouldFade ? "true" : "false"
        },
        $$restProps,
        { el: $overlayRef }
      ),
      {
        el: ($$value) => {
          $overlayRef = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_snapPoints();
  $$unsubscribe_overlayRef();
  $$unsubscribe_visible();
  $$unsubscribe_isOpen();
  $$unsubscribe_shouldFade();
  return $$rendered;
});
const Portal = Dialog_portal;
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["shouldScaleBackground", "open", "activeSnapPoint"]);
  let { shouldScaleBackground = true } = $$props;
  let { open = false } = $$props;
  let { activeSnapPoint = void 0 } = $$props;
  if ($$props.shouldScaleBackground === void 0 && $$bindings.shouldScaleBackground && shouldScaleBackground !== void 0)
    $$bindings.shouldScaleBackground(shouldScaleBackground);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.activeSnapPoint === void 0 && $$bindings.activeSnapPoint && activeSnapPoint !== void 0)
    $$bindings.activeSnapPoint(activeSnapPoint);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Root, "DrawerPrimitive.Root").$$render(
      $$result,
      Object.assign({}, { shouldScaleBackground }, $$restProps, { open }, { activeSnapPoint }),
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        },
        activeSnapPoint: ($$value) => {
          activeSnapPoint = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Drawer_overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["el", "class"]);
  let { el = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.el === void 0 && $$bindings.el && el !== void 0)
    $$bindings.el(el);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Overlay, "DrawerPrimitive.Overlay").$$render(
      $$result,
      Object.assign(
        {},
        {
          class: cn("fixed inset-0 z-50 bg-black/80", className)
        },
        $$restProps,
        { el }
      ),
      {
        el: ($$value) => {
          el = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Drawer_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Portal, "DrawerPrimitive.Portal").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Drawer_overlay, "DrawerOverlay").$$render($$result, {}, {}, {})} ${validate_component(Content, "DrawerPrimitive.Content").$$render(
        $$result,
        Object.assign(
          {},
          {
            class: cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className)
          },
          $$restProps
        ),
        {},
        {
          default: () => {
            return `<div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"></div> ${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}`;
    }
  })}`;
});
const Mobile_nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  let $page, $$unsubscribe_page;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let showDrawer = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        if ($navigating) {
          showDrawer = false;
        }
      }
    }
    $$rendered = `${`<div${add_attribute("class", cn("fixed bottom-0 z-[100] h-[4rem] w-full bg-gray-50 shadow-xl md:hidden dark:bg-zinc-900", !showDrawer && "border-t"), 0)}><div class="flex h-full items-center justify-between px-6"><div><div class="flex items-center justify-center gap-2"><a href="/" class="text-3xl font-semibold tracking-wider md:text-4xl" style="font-family: 'Fuggles', cursive;" data-svelte-h="svelte-1ranlat"><span class="text-5xl text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-6xl">P</span>rabhu</a> ${$page.url.pathname === routes.find((route) => route.link === $page.url.pathname)?.link ? (() => {
      let name2 = routes.find((route) => route.link === $page.url.pathname)?.name;
      return ` <div class="flex items-center justify-center gap-2 mt-3"><div class="h-5 w-[1px] bg-primary"></div> <p class="text-xs tracking-wider">${escape(name2)}</p></div>`;
    })() : ``}</div></div> <div class="flex items-center justify-between gap-2">${validate_component(Theme_toggle, "ThemeToggle").$$render($$result, {}, {}, {})} <button class="flex items-center justify-center">${!showDrawer ? `${validate_component(Menu$1, "Menu").$$render($$result, { class: "h-6 w-6" }, {}, {})}` : `${validate_component(X$1, "X").$$render($$result, { class: "h-6 w-6" }, {}, {})}`}</button></div></div></div>`} ${validate_component(Drawer, "Drawer.Root").$$render(
      $$result,
      {
        shouldScaleBackground: true,
        backgroundColor: "",
        open: showDrawer
      },
      {
        open: ($$value) => {
          showDrawer = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(Drawer_content, "Drawer.Content").$$render($$result, { class: "mb-16 dark:bg-zinc-900" }, {}, {
            default: () => {
              return `<div class="w-full gap-4 flex flex-col p-6"><div><div class="flex flex-col items-center gap-5">${each(routes, (route) => {
                return `<a${add_attribute("href", route.link, 0)}${add_attribute("class", cn("group relative inline-block w-full rounded-lg px-3 py-1 text-lg tracking-wider hover:bg-accent hover:text-accent-foreground", $page.url.pathname.startsWith(route.link) && "bg-accent text-accent-foreground"), 0)}>${escape(route.name)} </a>`;
              })}</div></div></div>`;
            }
          })}`;
        }
      }
    )} `;
  } while (!$$settled);
  $$unsubscribe_navigating();
  $$unsubscribe_page();
  return $$rendered;
});
var P = Object.defineProperty;
var F = (r, e, t) => e in r ? P(r, e, { enumerable: true, configurable: true, writable: true, value: t }) : r[e] = t;
var h = (r, e, t) => (F(r, typeof e != "symbol" ? e + "" : e, t), t);
var I = class {
  constructor() {
    h(this, "listeners", /* @__PURE__ */ new Map());
  }
  /**
   * Subscribes a given listener.
   */
  subscribe(e, t) {
    this.listeners.has(e) || this.listeners.set(e, []), !this.listeners.get(e).includes(t) && this.listeners.get(e).push(t);
  }
  /**
   * Unsubscribes the given listener.
   */
  unsubscribe(e, t) {
    this.listeners.has(e) && this.listeners.get(e).includes(t) && (this.listeners.get(e).splice(this.listeners.get(e).indexOf(t), 1), this.listeners.get(e).length === 0 && this.listeners.delete(e));
  }
  /**
   * Emits an event to all active listeners.
   */
  emit(e, t) {
    this.listeners.has(e) && this.listeners.get(e).forEach((s) => s(t));
  }
};
var L = {
  broadcast: false
};
var S = {
  broadcast: false
};
var O = class {
  /**
   * Creates the cache item given the data and expiration at.
   */
  constructor({ data: e, expiresAt: t = null }) {
    h(this, "data");
    h(this, "expiresAt");
    this.data = e, this.expiresAt = t;
  }
  /**
   * Determines if the current cache item is still being resolved.
   * This returns true if data is a promise, or false if type `D`.
   */
  isResolving() {
    return this.data instanceof Promise;
  }
  /**
   * Determines if the given cache item has expired.
   */
  hasExpired() {
    return this.expiresAt === null || this.expiresAt < /* @__PURE__ */ new Date();
  }
  /**
   * Set the expiration time of the given cache item relative to now.
   */
  expiresIn(e) {
    return this.expiresAt = /* @__PURE__ */ new Date(), this.expiresAt.setMilliseconds(this.expiresAt.getMilliseconds() + e), this;
  }
};
var q = class {
  constructor() {
    h(this, "elements", /* @__PURE__ */ new Map());
    h(this, "event", new I());
  }
  /**
   * Resolves the promise and replaces the Promise to the resolved data.
   * It also broadcasts the value change if needed or deletes the key if
   * the value resolves to undefined or null.
   */
  resolve(e, t) {
    Promise.resolve(t.data).then((s) => {
      if (s == null)
        return this.remove(e);
      t.data = s, this.broadcast(e, s);
    });
  }
  /**
   * Gets an element from the cache.
   *
   * It is assumed the item always exist when
   * you get it. Use the has method to check
   * for the existence of it.
   */
  get(e) {
    return this.elements.get(e);
  }
  /**
   * Sets an element to the cache.
   */
  set(e, t) {
    this.elements.set(e, t), this.resolve(e, t);
  }
  /**
   * Removes an key-value pair from the cache.
   */
  remove(e, t) {
    const { broadcast: s } = { ...L, ...t };
    s && this.broadcast(e, void 0), this.elements.delete(e);
  }
  /**
   * Removes all the key-value pairs from the cache.
   */
  clear(e) {
    const { broadcast: t } = { ...S, ...e };
    if (t)
      for (const s of this.elements.keys())
        this.broadcast(s, void 0);
    this.elements.clear();
  }
  /**
   * Determines if the given key exists
   * in the cache.
   */
  has(e) {
    return this.elements.has(e);
  }
  /**
   * Subscribes the callback to the given key.
   */
  subscribe(e, t) {
    this.event.subscribe(e, t);
  }
  /**
   * Unsubscribes to the given key events.
   */
  unsubscribe(e, t) {
    this.event.unsubscribe(e, t);
  }
  /**
   * Broadcasts a value change  on all subscribed instances.
   */
  broadcast(e, t) {
    this.event.emit(e, t);
  }
};
var x = {
  cache: new q(),
  errors: new I(),
  fetcher: async (r) => {
    const e = await fetch(r);
    if (!e.ok)
      throw Error("Not a 2XX response.");
    return e.json();
  },
  fallbackData: void 0,
  loadInitialCache: true,
  revalidateOnStart: true,
  dedupingInterval: 2e3,
  revalidateOnFocus: true,
  focusThrottleInterval: 5e3,
  revalidateOnReconnect: true,
  reconnectWhen: (r, { enabled: e }) => e && typeof window < "u" ? (window.addEventListener("online", r), () => window.removeEventListener("online", r)) : () => {
  },
  focusWhen: (r, { enabled: e, throttleInterval: t }) => {
    if (e && typeof window < "u") {
      let s = null;
      const i = () => {
        const a = Date.now();
        (s === null || a - s > t) && (s = a, r());
      };
      return window.addEventListener("focus", i), () => window.removeEventListener("focus", i);
    }
    return () => {
    };
  },
  revalidateFunction: void 0
};
var E = {
  ...x,
  force: false
};
var T = {
  revalidate: true,
  revalidateOptions: { ...E },
  revalidateFunction: void 0
};
var X = {
  broadcast: false
};
var H = class {
  /**
   * Creates a new instance of SWR.
   */
  constructor(e) {
    h(this, "options");
    this.options = { ...x, ...e };
  }
  /**
   * Gets the cache of the SWR.
   */
  get cache() {
    return this.options.cache;
  }
  /**
   * Gets the cache of the SWR.
   */
  get errors() {
    return this.options.errors;
  }
  /**
   * Requests the data using the provided fetcher.
   */
  async requestData(e, t) {
    return await Promise.resolve(t(e)).catch((s) => {
      throw this.errors.emit(e, s), s;
    });
  }
  /**
   * Resolves the given to a SWRKey or undefined.
   */
  resolveKey(e) {
    if (typeof e == "function")
      try {
        return e();
      } catch (e2) {
        return;
      }
    return e;
  }
  /**
   * Clear the specified keys from the cache. If no keys
   * are specified, it clears all the cache keys.
   */
  clear(e, t) {
    const s = { ...X, ...t };
    if (e == null)
      return this.cache.clear(s);
    if (!Array.isArray(e))
      return this.cache.remove(e, s);
    for (const i of e)
      this.cache.remove(i, s);
  }
  /**
   * Revalidates the key and mutates the cache if needed.
   */
  async revalidate(e, t) {
    if (!e)
      throw new Error("[Revalidate] Key issue: ${key}");
    const { fetcher: s, dedupingInterval: i } = this.options, { force: a, fetcher: o, dedupingInterval: n } = {
      ...E,
      fetcher: s,
      dedupingInterval: i,
      ...t
    };
    if (a || !this.cache.has(e) || this.cache.has(e) && this.cache.get(e).hasExpired()) {
      const c2 = this.requestData(e, o), l = c2.catch(() => {
      });
      return this.cache.set(e, new O({ data: l }).expiresIn(n)), await c2;
    }
    return this.getWait(e);
  }
  /**
   * Mutates the data of a given key with a new value.
   * This is used to replace the cache contents of the
   * given key manually.
   */
  async mutate(e, t, s) {
    var _a;
    if (!e)
      throw new Error("[Mutate] Key issue: ${key}");
    const {
      revalidate: i,
      revalidateOptions: a,
      revalidateFunction: o
    } = {
      ...T,
      ...s
    };
    let n;
    if (typeof t == "function") {
      let c2;
      if (this.cache.has(e)) {
        const l = this.cache.get(e);
        l.isResolving() || (c2 = l.data);
      }
      n = t(c2);
    } else
      n = t;
    return this.cache.set(e, new O({ data: n })), i ? await ((_a = o == null ? void 0 : o(e, a)) != null ? _a : this.revalidate(e, a)) : n;
  }
  /**
   * Gets the data of the given key. Keep in mind
   * this data will be stale and revalidate in the background
   * unless specified otherwise.
   */
  subscribeData(e, t) {
    if (e) {
      const s = (i) => t(i);
      return this.cache.subscribe(e, s), () => this.cache.unsubscribe(e, s);
    }
    return () => {
    };
  }
  /**
   * Subscribes to errors on the given key.
   */
  subscribeErrors(e, t) {
    if (e) {
      const s = (i) => t(i);
      return this.errors.subscribe(e, s), () => this.errors.unsubscribe(e, s);
    }
    return () => {
    };
  }
  /**
   * Gets the current cached data of the given key.
   * This does not trigger any revalidation nor mutation
   * of the data.
   * - If the data has never been validated
   * (there is no cache) it will return undefined.
   * - If the item is pending to resolve (there is a request
   * pending to resolve) it will return undefined.
   */
  get(e) {
    if (e && this.cache.has(e)) {
      const t = this.cache.get(e);
      if (!t.isResolving())
        return t.data;
    }
  }
  /**
   * Gets an element from the cache. The difference
   * with the get is that this method returns a promise
   * that will resolve the the value. If there's no item
   * in the cache, it will wait for it before resolving.
   */
  getWait(e) {
    return new Promise((t, s) => {
      const i = this.subscribeData(e, (n) => {
        if (i(), n !== void 0)
          return t(n);
      }), a = this.subscribeErrors(e, (n) => {
        if (a(), n !== void 0)
          return s(n);
      }), o = this.get(e);
      if (o !== void 0)
        return t(o);
    });
  }
  /**
   * Use a SWR value given the key and
   * subscribe to future changes.
   */
  subscribe(e, t, s, i) {
    const {
      fetcher: a,
      fallbackData: o,
      loadInitialCache: n,
      revalidateOnStart: c2,
      dedupingInterval: l,
      revalidateOnFocus: A2,
      focusThrottleInterval: C,
      revalidateOnReconnect: R,
      reconnectWhen: W2,
      focusWhen: D2,
      revalidateFunction: d
    } = {
      // Current instance options
      // (includes default options)
      ...this.options,
      // Current call options.
      ...i
    }, K2 = (m) => {
      var _a;
      return (_a = d == null ? void 0 : d(this.resolveKey(e), m)) != null ? _a : this.revalidate(this.resolveKey(e), m);
    }, f = () => K2({ fetcher: a, dedupingInterval: l }), u = n ? this.get(this.resolveKey(e)) : o != null ? o : void 0, g = c2 ? f() : Promise.resolve(void 0), M = u ? Promise.resolve(u) : g;
    u && (t == null || t(u));
    const v2 = t ? this.subscribeData(this.resolveKey(e), t) : void 0, b = s ? this.subscribeErrors(this.resolveKey(e), s) : void 0, p2 = D2(f, {
      throttleInterval: C,
      enabled: A2
    }), w2 = W2(f, {
      enabled: R
    });
    return { unsubscribe: () => {
      v2 == null || v2(), b == null || b(), p2 == null || p2(), w2 == null || w2();
    }, dataPromise: M, revalidatePromise: g };
  }
};
function p() {
}
function D(t) {
  return t();
}
function q2(t) {
  t.forEach(D);
}
function x2(t) {
  return typeof t == "function";
}
function K(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function z(t, ...e) {
  if (t == null) {
    for (const r of e)
      r(void 0);
    return p;
  }
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
var v = [];
function A(t, e) {
  return {
    subscribe: y(t, e).subscribe
  };
}
function y(t, e = p) {
  let n;
  const r = /* @__PURE__ */ new Set();
  function i(u) {
    if (K(t, u) && (t = u, n)) {
      const f = !v.length;
      for (const s of r)
        s[1](), v.push(s, t);
      if (f) {
        for (let s = 0; s < v.length; s += 2)
          v[s][0](v[s + 1]);
        v.length = 0;
      }
    }
  }
  function a(u) {
    i(u(t));
  }
  function d(u, f = p) {
    const s = [u, f];
    return r.add(s), r.size === 1 && (n = e(i, a) || p), u(t), () => {
      r.delete(s), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: d };
}
function S2(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = e.length < 2;
  return A(n, (d, u) => {
    let f = false;
    const s = [];
    let h2 = 0, o = p;
    const l = () => {
      if (h2)
        return;
      o();
      const b = e(r ? s[0] : s, d, u);
      a ? d(b) : o = x2(b) ? b : p;
    }, g = i.map(
      (b, m) => z(
        b,
        (R) => {
          s[m] = R, h2 &= ~(1 << m), f && l();
        },
        () => {
          h2 |= 1 << m;
        }
      )
    );
    return f = true, l(), function() {
      q2(g), o(), f = false;
    };
  });
}
var O2 = class extends H {
  /**
   * Svelte specific use of SWR.
   */
  useSWR(e, n) {
    const i = y(void 0, () => () => void 0), a = y(void 0, () => () => void 0);
    onDestroy(() => void 0);
    const d = (o, l) => this.mutate(this.resolveKey(e), o, {
      revalidateOptions: n,
      ...l
    }), u = (o) => this.revalidate(this.resolveKey(e), { ...n, ...o }), f = (o) => this.clear(this.resolveKey(e), o), s = S2([i, a], ([o, l]) => o === void 0 && l === void 0), h2 = S2([i, a], ([o, l]) => o !== void 0 && l === void 0);
    return { data: i, error: a, mutate: d, revalidate: u, clear: f, isLoading: s, isValid: h2 };
  }
};
var W = (t) => new O2(t);
var c = W();
var F2 = (t, e) => c.useSWR(t, e);
var textStreamPart = {
  code: "0",
  name: "text",
  parse: (value) => {
    if (typeof value !== "string") {
      throw new Error('"text" parts expect a string value.');
    }
    return { type: "text", value };
  }
};
var functionCallStreamPart = {
  code: "1",
  name: "function_call",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("function_call" in value) || typeof value.function_call !== "object" || value.function_call == null || !("name" in value.function_call) || !("arguments" in value.function_call) || typeof value.function_call.name !== "string" || typeof value.function_call.arguments !== "string") {
      throw new Error(
        '"function_call" parts expect an object with a "function_call" property.'
      );
    }
    return {
      type: "function_call",
      value
    };
  }
};
var dataStreamPart = {
  code: "2",
  name: "data",
  parse: (value) => {
    if (!Array.isArray(value)) {
      throw new Error('"data" parts expect an array value.');
    }
    return { type: "data", value };
  }
};
var errorStreamPart = {
  code: "3",
  name: "error",
  parse: (value) => {
    if (typeof value !== "string") {
      throw new Error('"error" parts expect a string value.');
    }
    return { type: "error", value };
  }
};
var assistantMessageStreamPart = {
  code: "4",
  name: "assistant_message",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("id" in value) || !("role" in value) || !("content" in value) || typeof value.id !== "string" || typeof value.role !== "string" || value.role !== "assistant" || !Array.isArray(value.content) || !value.content.every(
      (item) => item != null && typeof item === "object" && "type" in item && item.type === "text" && "text" in item && item.text != null && typeof item.text === "object" && "value" in item.text && typeof item.text.value === "string"
    )) {
      throw new Error(
        '"assistant_message" parts expect an object with an "id", "role", and "content" property.'
      );
    }
    return {
      type: "assistant_message",
      value
    };
  }
};
var assistantControlDataStreamPart = {
  code: "5",
  name: "assistant_control_data",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("threadId" in value) || !("messageId" in value) || typeof value.threadId !== "string" || typeof value.messageId !== "string") {
      throw new Error(
        '"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.'
      );
    }
    return {
      type: "assistant_control_data",
      value: {
        threadId: value.threadId,
        messageId: value.messageId
      }
    };
  }
};
var dataMessageStreamPart = {
  code: "6",
  name: "data_message",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("role" in value) || !("data" in value) || typeof value.role !== "string" || value.role !== "data") {
      throw new Error(
        '"data_message" parts expect an object with a "role" and "data" property.'
      );
    }
    return {
      type: "data_message",
      value
    };
  }
};
var toolCallStreamPart = {
  code: "7",
  name: "tool_calls",
  parse: (value) => {
    if (value == null || typeof value !== "object" || !("tool_calls" in value) || typeof value.tool_calls !== "object" || value.tool_calls == null || !Array.isArray(value.tool_calls) || value.tool_calls.some((tc) => {
      tc == null || typeof tc !== "object" || !("id" in tc) || typeof tc.id !== "string" || !("type" in tc) || typeof tc.type !== "string" || !("function" in tc) || tc.function == null || typeof tc.function !== "object" || !("arguments" in tc.function) || typeof tc.function.name !== "string" || typeof tc.function.arguments !== "string";
    })) {
      throw new Error(
        '"tool_calls" parts expect an object with a ToolCallPayload.'
      );
    }
    return {
      type: "tool_calls",
      value
    };
  }
};
var messageAnnotationsStreamPart = {
  code: "8",
  name: "message_annotations",
  parse: (value) => {
    if (!Array.isArray(value)) {
      throw new Error('"message_annotations" parts expect an array value.');
    }
    return { type: "message_annotations", value };
  }
};
var streamParts = [
  textStreamPart,
  functionCallStreamPart,
  dataStreamPart,
  errorStreamPart,
  assistantMessageStreamPart,
  assistantControlDataStreamPart,
  dataMessageStreamPart,
  toolCallStreamPart,
  messageAnnotationsStreamPart
];
var streamPartsByCode = {
  [textStreamPart.code]: textStreamPart,
  [functionCallStreamPart.code]: functionCallStreamPart,
  [dataStreamPart.code]: dataStreamPart,
  [errorStreamPart.code]: errorStreamPart,
  [assistantMessageStreamPart.code]: assistantMessageStreamPart,
  [assistantControlDataStreamPart.code]: assistantControlDataStreamPart,
  [dataMessageStreamPart.code]: dataMessageStreamPart,
  [toolCallStreamPart.code]: toolCallStreamPart,
  [messageAnnotationsStreamPart.code]: messageAnnotationsStreamPart
};
({
  [textStreamPart.name]: textStreamPart.code,
  [functionCallStreamPart.name]: functionCallStreamPart.code,
  [dataStreamPart.name]: dataStreamPart.code,
  [errorStreamPart.name]: errorStreamPart.code,
  [assistantMessageStreamPart.name]: assistantMessageStreamPart.code,
  [assistantControlDataStreamPart.name]: assistantControlDataStreamPart.code,
  [dataMessageStreamPart.name]: dataMessageStreamPart.code,
  [toolCallStreamPart.name]: toolCallStreamPart.code,
  [messageAnnotationsStreamPart.name]: messageAnnotationsStreamPart.code
});
var validCodes = streamParts.map((part) => part.code);
var parseStreamPart = (line) => {
  const firstSeparatorIndex = line.indexOf(":");
  if (firstSeparatorIndex === -1) {
    throw new Error("Failed to parse stream string. No separator found.");
  }
  const prefix = line.slice(0, firstSeparatorIndex);
  if (!validCodes.includes(prefix)) {
    throw new Error(`Failed to parse stream string. Invalid code ${prefix}.`);
  }
  const code = prefix;
  const textValue = line.slice(firstSeparatorIndex + 1);
  const jsonValue = JSON.parse(textValue);
  return streamPartsByCode[code].parse(jsonValue);
};
var NEWLINE = "\n".charCodeAt(0);
function concatChunks(chunks, totalLength) {
  const concatenatedChunks = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    concatenatedChunks.set(chunk, offset);
    offset += chunk.length;
  }
  chunks.length = 0;
  return concatenatedChunks;
}
async function* readDataStream(reader, {
  isAborted
} = {}) {
  const decoder = new TextDecoder();
  const chunks = [];
  let totalLength = 0;
  while (true) {
    const { value } = await reader.read();
    if (value) {
      chunks.push(value);
      totalLength += value.length;
      if (value[value.length - 1] !== NEWLINE) {
        continue;
      }
    }
    if (chunks.length === 0) {
      break;
    }
    const concatenatedChunks = concatChunks(chunks, totalLength);
    totalLength = 0;
    const streamParts2 = decoder.decode(concatenatedChunks, { stream: true }).split("\n").filter((line) => line !== "").map(parseStreamPart);
    for (const streamPart of streamParts2) {
      yield streamPart;
    }
    if (isAborted == null ? void 0 : isAborted()) {
      reader.cancel();
      break;
    }
  }
}
var generateId = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  7
);
function assignAnnotationsToMessage(message, annotations) {
  if (!message || !annotations || !annotations.length)
    return message;
  return { ...message, annotations: [...annotations] };
}
async function parseComplexResponse({
  reader,
  abortControllerRef,
  update: update2,
  onFinish,
  generateId: generateId2 = generateId,
  getCurrentDate = () => /* @__PURE__ */ new Date()
}) {
  const createdAt = getCurrentDate();
  const prefixMap = {
    data: []
  };
  let message_annotations = void 0;
  for await (const { type, value } of readDataStream(reader, {
    isAborted: () => (abortControllerRef == null ? void 0 : abortControllerRef.current) === null
  })) {
    if (type === "text") {
      if (prefixMap["text"]) {
        prefixMap["text"] = {
          ...prefixMap["text"],
          content: (prefixMap["text"].content || "") + value
        };
      } else {
        prefixMap["text"] = {
          id: generateId2(),
          role: "assistant",
          content: value,
          createdAt
        };
      }
    }
    let functionCallMessage = null;
    if (type === "function_call") {
      prefixMap["function_call"] = {
        id: generateId2(),
        role: "assistant",
        content: "",
        function_call: value.function_call,
        name: value.function_call.name,
        createdAt
      };
      functionCallMessage = prefixMap["function_call"];
    }
    let toolCallMessage = null;
    if (type === "tool_calls") {
      prefixMap["tool_calls"] = {
        id: generateId2(),
        role: "assistant",
        content: "",
        tool_calls: value.tool_calls,
        createdAt
      };
      toolCallMessage = prefixMap["tool_calls"];
    }
    if (type === "data") {
      prefixMap["data"].push(...value);
    }
    let responseMessage = prefixMap["text"];
    if (type === "message_annotations") {
      if (!message_annotations) {
        message_annotations = [...value];
      } else {
        message_annotations.push(...value);
      }
      functionCallMessage = assignAnnotationsToMessage(
        prefixMap["function_call"],
        message_annotations
      );
      toolCallMessage = assignAnnotationsToMessage(
        prefixMap["tool_calls"],
        message_annotations
      );
      responseMessage = assignAnnotationsToMessage(
        prefixMap["text"],
        message_annotations
      );
    }
    if (message_annotations == null ? void 0 : message_annotations.length) {
      const messagePrefixKeys = [
        "text",
        "function_call",
        "tool_calls"
      ];
      messagePrefixKeys.forEach((key) => {
        if (prefixMap[key]) {
          prefixMap[key].annotations = [...message_annotations];
        }
      });
    }
    const merged = [functionCallMessage, toolCallMessage, responseMessage].filter(Boolean).map((message) => ({
      ...assignAnnotationsToMessage(message, message_annotations)
    }));
    update2(merged, [...prefixMap["data"]]);
  }
  onFinish == null ? void 0 : onFinish(prefixMap);
  return {
    messages: [
      prefixMap.text,
      prefixMap.function_call,
      prefixMap.tool_calls
    ].filter(Boolean),
    data: prefixMap.data
  };
}
function createChunkDecoder(complex) {
  const decoder = new TextDecoder();
  if (!complex) {
    return function(chunk) {
      if (!chunk)
        return "";
      return decoder.decode(chunk, { stream: true });
    };
  }
  return function(chunk) {
    const decoded = decoder.decode(chunk, { stream: true }).split("\n").filter((line) => line !== "");
    return decoded.map(parseStreamPart).filter(Boolean);
  };
}
var COMPLEX_HEADER = "X-Experimental-Stream-Data";
async function callChatApi({
  api,
  messages,
  body,
  credentials,
  headers,
  abortController,
  appendMessage,
  restoreMessagesOnFailure,
  onResponse,
  onUpdate,
  onFinish,
  generateId: generateId2
}) {
  var _a;
  const response = await fetch(api, {
    method: "POST",
    body: JSON.stringify({
      messages,
      ...body
    }),
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    signal: (_a = abortController == null ? void 0 : abortController()) == null ? void 0 : _a.signal,
    credentials
  }).catch((err) => {
    restoreMessagesOnFailure();
    throw err;
  });
  if (onResponse) {
    try {
      await onResponse(response);
    } catch (err) {
      throw err;
    }
  }
  if (!response.ok) {
    restoreMessagesOnFailure();
    throw new Error(
      await response.text() || "Failed to fetch the chat response."
    );
  }
  if (!response.body) {
    throw new Error("The response body is empty.");
  }
  const reader = response.body.getReader();
  const isComplexMode = response.headers.get(COMPLEX_HEADER) === "true";
  if (isComplexMode) {
    return await parseComplexResponse({
      reader,
      abortControllerRef: abortController != null ? { current: abortController() } : void 0,
      update: onUpdate,
      onFinish(prefixMap) {
        if (onFinish && prefixMap.text != null) {
          onFinish(prefixMap.text);
        }
      },
      generateId: generateId2
    });
  } else {
    const createdAt = /* @__PURE__ */ new Date();
    const decode = createChunkDecoder(false);
    let streamedResponse = "";
    const replyId = generateId2();
    let responseMessage = {
      id: replyId,
      createdAt,
      content: "",
      role: "assistant"
    };
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      streamedResponse += decode(value);
      if (streamedResponse.startsWith('{"function_call":')) {
        responseMessage["function_call"] = streamedResponse;
      } else if (streamedResponse.startsWith('{"tool_calls":')) {
        responseMessage["tool_calls"] = streamedResponse;
      } else {
        responseMessage["content"] = streamedResponse;
      }
      appendMessage({ ...responseMessage });
      if ((abortController == null ? void 0 : abortController()) === null) {
        reader.cancel();
        break;
      }
    }
    if (streamedResponse.startsWith('{"function_call":')) {
      const parsedFunctionCall = JSON.parse(streamedResponse).function_call;
      responseMessage["function_call"] = parsedFunctionCall;
      appendMessage({ ...responseMessage });
    }
    if (streamedResponse.startsWith('{"tool_calls":')) {
      const parsedToolCalls = JSON.parse(streamedResponse).tool_calls;
      responseMessage["tool_calls"] = parsedToolCalls;
      appendMessage({ ...responseMessage });
    }
    if (onFinish) {
      onFinish(responseMessage);
    }
    return responseMessage;
  }
}
async function processChatStream({
  getStreamedResponse: getStreamedResponse2,
  experimental_onFunctionCall,
  experimental_onToolCall,
  updateChatRequest,
  getCurrentMessages
}) {
  while (true) {
    const messagesAndDataOrJustMessage = await getStreamedResponse2();
    if ("messages" in messagesAndDataOrJustMessage) {
      let hasFollowingResponse = false;
      for (const message of messagesAndDataOrJustMessage.messages) {
        if ((message.function_call === void 0 || typeof message.function_call === "string") && (message.tool_calls === void 0 || typeof message.tool_calls === "string")) {
          continue;
        }
        hasFollowingResponse = true;
        if (experimental_onFunctionCall) {
          const functionCall = message.function_call;
          if (typeof functionCall !== "object") {
            console.warn(
              "experimental_onFunctionCall should not be defined when using tools"
            );
            continue;
          }
          const functionCallResponse = await experimental_onFunctionCall(
            getCurrentMessages(),
            functionCall
          );
          if (functionCallResponse === void 0) {
            hasFollowingResponse = false;
            break;
          }
          updateChatRequest(functionCallResponse);
        }
        if (experimental_onToolCall) {
          const toolCalls = message.tool_calls;
          if (!Array.isArray(toolCalls) || toolCalls.some((toolCall) => typeof toolCall !== "object")) {
            console.warn(
              "experimental_onToolCall should not be defined when using tools"
            );
            continue;
          }
          const toolCallResponse = await experimental_onToolCall(getCurrentMessages(), toolCalls);
          if (toolCallResponse === void 0) {
            hasFollowingResponse = false;
            break;
          }
          updateChatRequest(toolCallResponse);
        }
      }
      if (!hasFollowingResponse) {
        break;
      }
    } else {
      let fixFunctionCallArguments2 = function(response) {
        for (const message of response.messages) {
          if (message.tool_calls !== void 0) {
            for (const toolCall of message.tool_calls) {
              if (typeof toolCall === "object") {
                if (toolCall.function.arguments && typeof toolCall.function.arguments !== "string") {
                  toolCall.function.arguments = JSON.stringify(
                    toolCall.function.arguments
                  );
                }
              }
            }
          }
          if (message.function_call !== void 0) {
            if (typeof message.function_call === "object") {
              if (message.function_call.arguments && typeof message.function_call.arguments !== "string") {
                message.function_call.arguments = JSON.stringify(
                  message.function_call.arguments
                );
              }
            }
          }
        }
      };
      const streamedResponseMessage = messagesAndDataOrJustMessage;
      if ((streamedResponseMessage.function_call === void 0 || typeof streamedResponseMessage.function_call === "string") && (streamedResponseMessage.tool_calls === void 0 || typeof streamedResponseMessage.tool_calls === "string")) {
        break;
      }
      if (experimental_onFunctionCall) {
        const functionCall = streamedResponseMessage.function_call;
        if (!(typeof functionCall === "object")) {
          console.warn(
            "experimental_onFunctionCall should not be defined when using tools"
          );
          continue;
        }
        const functionCallResponse = await experimental_onFunctionCall(getCurrentMessages(), functionCall);
        if (functionCallResponse === void 0)
          break;
        fixFunctionCallArguments2(functionCallResponse);
        updateChatRequest(functionCallResponse);
      }
      if (experimental_onToolCall) {
        const toolCalls = streamedResponseMessage.tool_calls;
        if (!(typeof toolCalls === "object")) {
          console.warn(
            "experimental_onToolCall should not be defined when using functions"
          );
          continue;
        }
        const toolCallResponse = await experimental_onToolCall(getCurrentMessages(), toolCalls);
        if (toolCallResponse === void 0)
          break;
        fixFunctionCallArguments2(toolCallResponse);
        updateChatRequest(toolCallResponse);
      }
    }
  }
}
var getStreamedResponse = async (api, chatRequest, mutate, mutateStreamData, existingData, extraMetadata, previousMessages, abortControllerRef, generateId2, onFinish, onResponse, sendExtraMessageFields) => {
  var _a, _b;
  mutate(chatRequest.messages);
  const constructedMessagesPayload = sendExtraMessageFields ? chatRequest.messages : chatRequest.messages.map(
    ({ role, content, name: name2, function_call, tool_calls, tool_call_id }) => ({
      role,
      content,
      tool_call_id,
      ...name2 !== void 0 && { name: name2 },
      ...function_call !== void 0 && {
        function_call
      },
      ...tool_calls !== void 0 && {
        tool_calls
      }
    })
  );
  return await callChatApi({
    api,
    messages: constructedMessagesPayload,
    body: {
      ...extraMetadata.body,
      ...(_a = chatRequest.options) == null ? void 0 : _a.body,
      ...chatRequest.functions !== void 0 && {
        functions: chatRequest.functions
      },
      ...chatRequest.function_call !== void 0 && {
        function_call: chatRequest.function_call
      },
      ...chatRequest.tools !== void 0 && {
        tools: chatRequest.tools
      },
      ...chatRequest.tool_choice !== void 0 && {
        tool_choice: chatRequest.tool_choice
      }
    },
    credentials: extraMetadata.credentials,
    headers: {
      ...extraMetadata.headers,
      ...(_b = chatRequest.options) == null ? void 0 : _b.headers
    },
    abortController: () => abortControllerRef,
    appendMessage(message) {
      mutate([...chatRequest.messages, message]);
    },
    restoreMessagesOnFailure() {
      mutate(previousMessages);
    },
    onResponse,
    onUpdate(merged, data) {
      mutate([...chatRequest.messages, ...merged]);
      mutateStreamData([...existingData || [], ...data || []]);
    },
    onFinish,
    generateId: generateId2
  });
};
var uniqueId = 0;
var store = {};
function useChat({
  api = "/api/chat",
  id,
  initialMessages = [],
  initialInput = "",
  sendExtraMessageFields,
  experimental_onFunctionCall,
  experimental_onToolCall,
  onResponse,
  onFinish,
  onError,
  credentials,
  headers,
  body,
  generateId: generateId2 = generateId
} = {}) {
  const chatId = id || `chat-${uniqueId++}`;
  const key = `${api}|${chatId}`;
  const {
    data,
    mutate: originalMutate,
    isLoading: isSWRLoading
  } = F2(key, {
    fetcher: () => store[key] || initialMessages,
    fallbackData: initialMessages
  });
  const streamData = writable(void 0);
  const loading = writable(false);
  data.set(initialMessages);
  const mutate = (data2) => {
    store[key] = data2;
    return originalMutate(data2);
  };
  const messages = data;
  let abortController = null;
  const extraMetadata = {
    credentials,
    headers,
    body
  };
  const error = writable(void 0);
  async function triggerRequest(chatRequest) {
    try {
      error.set(void 0);
      loading.set(true);
      abortController = new AbortController();
      await processChatStream({
        getStreamedResponse: () => getStreamedResponse(
          api,
          chatRequest,
          mutate,
          (data2) => {
            streamData.set(data2);
          },
          get_store_value(streamData),
          extraMetadata,
          get_store_value(messages),
          abortController,
          generateId2,
          onFinish,
          onResponse,
          sendExtraMessageFields
        ),
        experimental_onFunctionCall,
        experimental_onToolCall,
        updateChatRequest: (chatRequestParam) => {
          chatRequest = chatRequestParam;
        },
        getCurrentMessages: () => get_store_value(messages)
      });
      abortController = null;
      return null;
    } catch (err) {
      if (err.name === "AbortError") {
        abortController = null;
        return null;
      }
      if (onError && err instanceof Error) {
        onError(err);
      }
      error.set(err);
    } finally {
      loading.set(false);
    }
  }
  const append = async (message, {
    options,
    functions,
    function_call,
    tools,
    tool_choice
  } = {}) => {
    if (!message.id) {
      message.id = generateId2();
    }
    const chatRequest = {
      messages: get_store_value(messages).concat(message),
      options,
      ...functions !== void 0 && { functions },
      ...function_call !== void 0 && { function_call },
      ...tools !== void 0 && { tools },
      ...tool_choice !== void 0 && { tool_choice }
    };
    return triggerRequest(chatRequest);
  };
  const reload = async ({
    options,
    functions,
    function_call,
    tools,
    tool_choice
  } = {}) => {
    const messagesSnapshot = get_store_value(messages);
    if (messagesSnapshot.length === 0)
      return null;
    const lastMessage = messagesSnapshot.at(-1);
    if ((lastMessage == null ? void 0 : lastMessage.role) === "assistant") {
      const chatRequest2 = {
        messages: messagesSnapshot.slice(0, -1),
        options,
        ...functions !== void 0 && { functions },
        ...function_call !== void 0 && { function_call },
        ...tools !== void 0 && { tools },
        ...tool_choice !== void 0 && { tool_choice }
      };
      return triggerRequest(chatRequest2);
    }
    const chatRequest = {
      messages: messagesSnapshot,
      options,
      ...functions !== void 0 && { functions },
      ...function_call !== void 0 && { function_call },
      ...tools !== void 0 && { tools },
      ...tool_choice !== void 0 && { tool_choice }
    };
    return triggerRequest(chatRequest);
  };
  const stop = () => {
    if (abortController) {
      abortController.abort();
      abortController = null;
    }
  };
  const setMessages = (messages2) => {
    mutate(messages2);
  };
  const input = writable(initialInput);
  const handleSubmit = (e, options = {}) => {
    e.preventDefault();
    const inputValue = get_store_value(input);
    if (!inputValue)
      return;
    append(
      {
        content: inputValue,
        role: "user",
        createdAt: /* @__PURE__ */ new Date()
      },
      options
    );
    input.set("");
  };
  const isLoading = derived(
    [isSWRLoading, loading],
    ([$isSWRLoading, $loading]) => {
      return $isSWRLoading || $loading;
    }
  );
  return {
    messages,
    error,
    append,
    reload,
    stop,
    setMessages,
    input,
    handleSubmit,
    isLoading,
    data: streamData
  };
}
function listen(node, event, handler, options) {
  node.addEventListener(event, handler, options);
  return () => node.removeEventListener(event, handler, options);
}
function clickOutsideAction(node, callback) {
  const handleClick = (event) => {
    if (event.target !== null && !node.contains(event.target)) {
      node.dispatchEvent(new CustomEvent("clickoutside"));
      callback?.();
    }
  };
  const stop = listen(document, "click", handleClick, true);
  return {
    destroy() {
      stop();
    }
  };
}
const Jarvis = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $input, $$unsubscribe_input;
  let $messages, $$unsubscribe_messages;
  const { input, handleSubmit, messages } = useChat();
  $$unsubscribe_input = subscribe(input, (value) => $input = value);
  $$unsubscribe_messages = subscribe(messages, (value) => $messages = value);
  if ($$props.clickOutsideAction === void 0 && $$bindings.clickOutsideAction && clickOutsideAction !== void 0)
    $$bindings.clickOutsideAction(clickOutsideAction);
  $messages && $messages.length > 0;
  {
    {
      if ($messages && $messages.length % 2 === 0)
        ;
    }
  }
  {
    {
      if ($messages && $messages.length > 0) {
        const chatContent = document.getElementById("chatContent");
        chatContent?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
  $input.length / 43 + 1;
  $$unsubscribe_input();
  $$unsubscribe_messages();
  return `<div class="absolute bottom-4 right-4 hidden lg:block">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "secondary",
      class: "p-2 focus:scale-90"
    },
    {},
    {
      default: () => {
        return `${validate_component(Bot$1, "Bot").$$render($$result, { size: "24" }, {}, {})}`;
      }
    }
  )}</div> ${``}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_openMobileMenu;
  $$unsubscribe_openMobileMenu = subscribe(openMobileMenu, (value) => value);
  $$unsubscribe_openMobileMenu();
  return `${validate_component(Mode_watcher, "ModeWatcher").$$render($$result, {}, {}, {})} ${validate_component(Metatags, "MetaTags").$$render($$result, {}, {}, {})} ${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="flex flex-col min-h-screen md:pt-10" data-vaul-drawer-wrapper><div class="flex-1 mb-20 md:mb-0">${slots.default ? slots.default({}) : ``}</div> <footer class="hidden border-t md:block">${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</footer> <div class="fixed bottom-0 right-0 h-full">${validate_component(Jarvis, "Jarvis").$$render($$result, {}, {}, {})}</div></div>  <div class="no-highlight"> ${validate_component(Mobile_nav, "MobileNav").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
