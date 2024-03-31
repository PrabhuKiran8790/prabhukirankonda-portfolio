import { c as create_ssr_component, v as validate_component, g as add_attribute, h as subscribe, l as compute_rest_props, b as spread, d as escape_object, p as escape_attribute_value, q as noop, e as escape, i as each, m as missing_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
import "../../../../chunks/marked.esm.js";
import { I as Icon, c as cn, s as setCtx, e as getAttrs, h as setItem, i as getCtx, j as getTrigger, k as getContent, l as setCtx$1, m as getAttrs$1, n as getImage, o as getCtx$1, p as setCtx$2, q as getCtx$2, u as getAttrs$2, v as is_void, x as setCtx$3, y as getAttrs$3, f as formatDate, b as buttonVariants, z as flyAndScale, A as author, g as getSocials, C as localToGithubURL, D as githubConfig, B as Button, G as Github } from "../../../../chunks/index2.js";
import { M as MetaTags } from "../../../../chunks/MetaTags.js";
import { T as Tag, h as Tag$1, t as tagToSlug, i as Calendar, s as slide } from "../../../../chunks/posts.js";
import "clsx";
import { c as createDispatcher } from "../../../../chunks/events.js";
import { B as Badge } from "../../../../chunks/badge.js";
import { k as derived } from "../../../../chunks/exports.js";
import { t as theme } from "../../../../chunks/theme-toggle.js";
const Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ChevronDown = Chevron_down;
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"
      }
    ],
    ["path", { "d": "m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" }],
    [
      "path",
      {
        "d": "M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"
      }
    ],
    [
      "path",
      {
        "d": "m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "component" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Component$1 = Component;
const Planet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="#f90606" viewBox="0 0 256 256"${add_attribute("class", cn("h-7 w-7", className), 0)}><path d="M245.11,60.68c-7.65-13.19-27.84-16.16-58.5-8.66A95.93,95.93,0,0,0,32,128a98,98,0,0,0,.78,12.31C5.09,169,5.49,186,10.9,195.32,16,204.16,26.64,208,40.64,208a124.11,124.11,0,0,0,28.79-4A95.93,95.93,0,0,0,224,128a97.08,97.08,0,0,0-.77-12.25c12.5-13,20.82-25.35,23.65-35.92C248.83,72.51,248.24,66.07,245.11,60.68ZM128,48a80.11,80.11,0,0,1,78,62.2c-17.06,16.06-40.15,32.53-62.07,45.13C116.38,171.14,92.48,181,73.42,186.4A79.94,79.94,0,0,1,128,48ZM24.74,187.29c-1.46-2.51-.65-7.24,2.22-13a79.05,79.05,0,0,1,10.29-15.05,96,96,0,0,0,18,31.32C38,193.46,27.24,191.61,24.74,187.29ZM128,208a79.45,79.45,0,0,1-38.56-9.94,370,370,0,0,0,62.43-28.86c21.58-12.39,40.68-25.82,56.07-39.08A80.07,80.07,0,0,1,128,208ZM231.42,75.69c-1.7,6.31-6.19,13.53-12.63,21.13a95.69,95.69,0,0,0-18-31.35c14.21-2.35,27.37-2.17,30.5,3.24C232.19,70.28,232.24,72.63,231.42,75.69Z"></path></svg>`;
});
const Blog_metatags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { meta } = $$props;
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  $$unsubscribe_page();
  return `${validate_component(MetaTags, "MetaTags").$$render(
    $$result,
    {
      title: meta.title,
      description: meta.description,
      openGraph: {
        url: $page.url.href,
        title: meta.title,
        description: meta.description,
        images: [
          {
            url: typeof meta.image === "string" ? meta.image : meta.image[0],
            width: 800,
            height: 600,
            alt: meta.title
          }
        ],
        siteName: "Prabhu Kiran Konda"
      },
      twitter: {
        handle: "@prabhukirantwt",
        cardType: "summary_large_image",
        title: meta.title,
        description: meta.description,
        image: typeof meta.image === "string" ? meta.image : meta.image[0],
        imageAlt: meta.title
      }
    },
    {},
    {}
  )}`;
});
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["multiple", "value", "onValueChange", "disabled", "asChild"]);
  let $root, $$unsubscribe_root;
  let { multiple = false } = $$props;
  let { value = void 0 } = $$props;
  let { onValueChange = void 0 } = $$props;
  let { disabled = false } = $$props;
  let { asChild = false } = $$props;
  const { elements: { root }, states: { value: localValue }, updateOption } = setCtx({
    multiple,
    disabled,
    defaultValue: value,
    onValueChange: ({ next }) => {
      if (value !== next) {
        onValueChange?.(next);
        value = next;
      }
      return next;
    }
  });
  $$unsubscribe_root = subscribe(root, (value2) => $root = value2);
  const attrs = getAttrs("root");
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.onValueChange === void 0 && $$bindings.onValueChange && onValueChange !== void 0)
    $$bindings.onValueChange(onValueChange);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  {
    localValue.set(value);
  }
  {
    updateOption("multiple", multiple);
  }
  {
    updateOption("disabled", disabled);
  }
  builder = $root;
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>`}`;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["value", "disabled", "asChild"]);
  let $item, $$unsubscribe_item;
  let { value } = $$props;
  let { disabled = void 0 } = $$props;
  let { asChild = false } = $$props;
  const { item, props } = setItem({ value, disabled });
  $$unsubscribe_item = subscribe(item, (value2) => $item = value2);
  const attrs = getAttrs("item");
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder = $item(props);
  $$unsubscribe_item();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>`}`;
});
const AccordionHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["level", "asChild"]);
  let $header, $$unsubscribe_header;
  let { level = 3 } = $$props;
  let { asChild = false } = $$props;
  const { elements: { heading: header } } = getCtx();
  $$unsubscribe_header = subscribe(header, (value) => $header = value);
  const attrs = getAttrs("header");
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder = $header(level);
  $$unsubscribe_header();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>`}`;
});
const AccordionTrigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  const { trigger, props } = getTrigger();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder = $trigger(props);
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
const AccordionContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild"
  ]);
  let $content, $$unsubscribe_content;
  let $isSelected, $$unsubscribe_isSelected;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  const { content, isSelected, props } = getContent();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_isSelected = subscribe(isSelected, (value) => $isSelected = value);
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
  builder = $content(props);
  $$unsubscribe_content();
  $$unsubscribe_isSelected();
  return `${asChild && $isSelected(props) ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `${transition && $isSelected(props) ? `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${inTransition && outTransition && $isSelected(props) ? `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${inTransition && $isSelected(props) ? `<div${spread(
    [
      escape_object(builder),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${outTransition && $isSelected(props) ? `<div${spread(
    [
      escape_object(builder),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${$isSelected(props) ? `<div${spread(
    [
      escape_object(builder),
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Avatar$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["delayMs", "loadingStatus", "onLoadingStatusChange", "asChild"]);
  let { delayMs = void 0 } = $$props;
  let { loadingStatus = void 0 } = $$props;
  let { onLoadingStatusChange = void 0 } = $$props;
  let { asChild = false } = $$props;
  const { states: { loadingStatus: localLoadingStatus }, updateOption } = setCtx$1({
    src: "",
    delayMs,
    onLoadingStatusChange: ({ next }) => {
      loadingStatus = next;
      onLoadingStatusChange?.(next);
      return next;
    }
  });
  const attrs = getAttrs$1("root");
  if ($$props.delayMs === void 0 && $$bindings.delayMs && delayMs !== void 0)
    $$bindings.delayMs(delayMs);
  if ($$props.loadingStatus === void 0 && $$bindings.loadingStatus && loadingStatus !== void 0)
    $$bindings.loadingStatus(loadingStatus);
  if ($$props.onLoadingStatusChange === void 0 && $$bindings.onLoadingStatusChange && onLoadingStatusChange !== void 0)
    $$bindings.onLoadingStatusChange(onLoadingStatusChange);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  loadingStatus !== void 0 && localLoadingStatus.set(loadingStatus);
  {
    updateOption("delayMs", delayMs);
  }
  return `${asChild ? `${slots.default ? slots.default({ attrs }) : ``}` : `<div${spread([escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ attrs }) : ``}</div>`}`;
});
const AvatarImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let image;
  let builder;
  let $$restProps = compute_rest_props($$props, ["src", "alt", "asChild"]);
  let $image, $$unsubscribe_image = noop, $$subscribe_image = () => ($$unsubscribe_image(), $$unsubscribe_image = subscribe(image, ($$value) => $image = $$value), image);
  let { src = void 0 } = $$props;
  let { alt = void 0 } = $$props;
  let { asChild = false } = $$props;
  const attrs = getAttrs$1("image");
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  $$subscribe_image(image = getImage(src).elements.image);
  builder = $image;
  $$unsubscribe_image();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<img${spread(
    [
      escape_object(builder),
      { alt: escape_attribute_value(alt) },
      escape_object($$restProps),
      escape_object(attrs)
    ],
    {}
  )}>`}`;
});
const AvatarFallback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild"]);
  let $fallback, $$unsubscribe_fallback;
  let { asChild = false } = $$props;
  const { elements: { fallback } } = getCtx$1();
  $$unsubscribe_fallback = subscribe(fallback, (value) => $fallback = value);
  const attrs = getAttrs$1("fallback");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  builder = $fallback;
  $$unsubscribe_fallback();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<span${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</span>`}`;
});
const LinkPreview = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { positioning = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { openDelay = 700 } = $$props;
  let { closeDelay = 300 } = $$props;
  let { closeOnOutsideClick = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { arrowSize = void 0 } = $$props;
  let { portal = void 0 } = $$props;
  const { states: { open: localOpen }, updateOption, ids } = setCtx$2({
    defaultOpen: open,
    positioning,
    openDelay,
    closeDelay,
    closeOnOutsideClick,
    closeOnEscape,
    arrowSize,
    portal,
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
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0)
    $$bindings.onOpenChange(onOpenChange);
  if ($$props.openDelay === void 0 && $$bindings.openDelay && openDelay !== void 0)
    $$bindings.openDelay(openDelay);
  if ($$props.closeDelay === void 0 && $$bindings.closeDelay && closeDelay !== void 0)
    $$bindings.closeDelay(closeDelay);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0)
    $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0)
    $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.arrowSize === void 0 && $$bindings.arrowSize && arrowSize !== void 0)
    $$bindings.arrowSize(arrowSize);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0)
    $$bindings.portal(portal);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("positioning", positioning);
  }
  {
    updateOption("openDelay", openDelay);
  }
  {
    updateOption("closeDelay", closeDelay);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("arrowSize", arrowSize);
  }
  {
    updateOption("portal", portal);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const LinkPreviewContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
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
  let { id = void 0 } = $$props;
  const { elements: { content }, states: { open }, ids } = getCtx$2();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs$2("content");
  createDispatcher();
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
  {
    if (id) {
      ids.content.set(id);
    }
  }
  builder = $content;
  $$unsubscribe_content();
  $$unsubscribe_open();
  return ` ${asChild && $open ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}>${slots.default ? slots.default({ builder, attrs }) : ``}</div>` : `${inTransition && $open ? `<div${spread(
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
const LinkPreviewTrigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "id"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  const { elements: { trigger }, ids } = getCtx$2();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs$2("trigger");
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
  return `${asChild ? `${slots.default ? slots.default({ attrs, builder }) : ``}` : (() => {
    let builder2 = $trigger;
    return ` ${((tag) => {
      return tag ? `<a${spread(
        [
          escape_object(builder2),
          escape_object($$restProps),
          escape_object(attrs)
        ],
        {}
      )}>${is_void(tag) ? "" : `${slots.default ? slots.default({ builder: builder2, attrs }) : ``}`}</a>` : "";
    })("a")}`;
  })()}`;
});
const Separator$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["orientation", "decorative", "asChild"]);
  let $root, $$unsubscribe_root;
  let { orientation = "horizontal" } = $$props;
  let { decorative = true } = $$props;
  let { asChild = false } = $$props;
  const { elements: { root }, updateOption } = setCtx$3({ orientation, decorative });
  $$unsubscribe_root = subscribe(root, (value) => $root = value);
  const attrs = getAttrs$3("root");
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0)
    $$bindings.decorative(decorative);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0)
    $$bindings.asChild(asChild);
  {
    updateOption("orientation", orientation);
  }
  {
    updateOption("decorative", decorative);
  }
  builder = $root;
  $$unsubscribe_root();
  return `${asChild ? `${slots.default ? slots.default({ builder, attrs }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps), escape_object(attrs)], {})}></div>`}`;
});
const Svg_doodle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg class="w-72 h-14" viewBox="0 0 149 107" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 69.5281C9.17842 63.9174 10.4523 61.145 12.5026 52.2602C13.3019 48.7967 13.7253 54.029 13.8891 54.9676C14.7401 59.8421 15.6217 64.6964 16.3824 69.5876C16.5112 70.4159 18.1325 79.0197 18.849 74.6722C20.4673 64.8528 20.8544 51.5036 18.846 41.6924C16.5128 30.2944 20.5165 64.9105 21.9165 76.4603C22.169 78.5428 23.1113 82.8817 23.6422 78.2216C24.5983 69.8295 24.1855 61.1952 24.2432 52.769C24.2739 48.3004 23.2532 41.2306 25.4066 37.069C26.2402 35.458 29.681 47.48 29.8845 48.2794C32.3006 57.7721 34.0067 68.2119 37.9595 77.216C38.1404 77.628 39.3822 80.2092 39.9113 78.406C41.9746 71.3741 41.0202 62.5767 41.1372 55.3425C41.3522 42.0473 40.7602 28.8093 40.3635 15.5258C40.2629 12.1561 38.8877 -7.68741 42.1131 5.43695C45.7238 20.1293 48.1491 35.2742 51.0688 50.1181C52.9623 59.7446 54.6809 69.4045 56.5732 79.0309C57.0436 81.424 57.2518 85.5004 58.7808 87.5874C60.005 89.2585 60.3064 83.6633 60.4291 81.5954C60.7341 76.4567 60.5025 71.2777 60.2506 66.1424C59.6194 53.2749 58.2096 40.4436 57.3289 27.5901C56.0301 8.6347 60.8025 65.67 66.1418 83.9042C67.0108 86.8718 68.7307 94.8139 70.3429 92.1752C74.4303 85.4857 71.2043 76.5105 71.1582 68.6713C71.1221 62.5267 70.737 56.3705 71.1106 50.2371C71.2829 47.4078 69.9627 41.68 72.7886 41.9007C75.9947 42.151 75.7911 47.6228 76.7875 50.6804C78.7382 56.6667 80.106 62.8291 81.6015 68.945C84.2775 79.8881 85.3066 93.3281 89.8968 103.897C91.8362 108.363 92.6349 100.648 92.6489 99.7083C92.9189 81.6228 83.1075 27.992 85.7164 45.8904C86.8598 53.7343 89.3137 61.4315 91.0125 69.1652C91.3783 70.8304 94.9798 88.2449 97.0138 78.9297C99.0652 69.5344 98.7394 59.2985 98.7394 49.7135C98.7394 42.7606 99.5752 43.895 102.277 49.8979C104.661 55.194 107.865 62.546 115.014 61.9444C120.691 61.4668 126.114 54.8002 129.802 51.2725C135.697 45.6333 141.449 39.8512 147.368 34.2366" stroke="currentColor" stroke-width="4" stroke-linecap="round"></path></svg>`;
});
const Bloghero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let meta;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ meta } = data);
  return `<div class="flex flex-col items-center justify-center space-y-4">${meta.image ? `${typeof meta.image === "string" ? `<img${add_attribute("src", meta.image, 0)}${add_attribute("alt", meta.title, 0)} loading="lazy" class="w-full md:w-[80%] h-auto md:rounded-lg max-h-[550px]">` : `${Array.isArray(meta.image) ? `<img${add_attribute("src", meta.image[0], 0)}${add_attribute("alt", meta.title, 0)} loading="lazy" class="w-full md:w-[80%] h-auto md:rounded-lg max-h-[550px] dark:hidden"> <img${add_attribute("src", meta.image[1], 0)}${add_attribute("alt", meta.title, 0)} loading="lazy" class="w-full md:w-[80%] h-auto md:rounded-lg max-h-[550px] hidden dark:block">` : ``}`}` : ``} <div><h1 class="px-4 text-center text-2xl font-bold md:text-4xl">${escape(meta.title)}</h1></div> <div class="flex items-center gap-2">${validate_component(Tag, "TagIcon").$$render($$result, { class: "w-4 h-4" }, {}, {})} ${data.seriesPost ? `${each(data.seriesPost?.tags, (tag) => {
    return `${validate_component(Tag$1, "Tag").$$render(
      $$result,
      {
        class: "dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700",
        tag,
        href: `/tags/${tagToSlug(tag)}`,
        shallow: true
      },
      {},
      {}
    )}`;
  })}` : `${each(meta.tags, (tag) => {
    return `${validate_component(Tag$1, "Tag").$$render(
      $$result,
      {
        class: "dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600",
        tag,
        href: `/tags/${tagToSlug(tag)}`,
        shallow: true
      },
      {},
      {}
    )}`;
  })}`}</div> <div class="flex items-center space-x-2 text-muted-foreground">${validate_component(Calendar, "Calendar").$$render($$result, { class: "w-3 h-3 md:h-4 md:w-4" }, {}, {})} <p class="text-xs font-semibold md:text-sm">${escape(formatDate(meta.date, "long"))}</p></div> ${validate_component(Author, "Author").$$render($$result, {}, {}, {})} ${validate_component(Series_blog_accordian, "SeriesBlogAccordian").$$render($$result, { data }, {}, {})}</div>`;
});
const Accordion_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = slide } = $$props;
  let { transitionConfig = { duration: 500 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(AccordionContent, "AccordionPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("overflow-hidden text-sm transition-all", className)
      },
      { transition },
      { transitionConfig },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `<div class="pb-4 pt-0">${slots.default ? slots.default({}) : ``}</div>`;
      }
    }
  )}`;
});
const Accordion_item = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "value"]);
  let { class: className = void 0 } = $$props;
  let { value } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `${validate_component(AccordionItem, "AccordionPrimitive.Item").$$render($$result, Object.assign({}, { value }, { class: cn("border-b", className) }, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Accordion_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "level"]);
  let { class: className = void 0 } = $$props;
  let { level = 3 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0)
    $$bindings.level(level);
  return `${validate_component(AccordionHeader, "AccordionPrimitive.Header").$$render($$result, { level, class: "flex" }, {}, {
    default: () => {
      return `${validate_component(AccordionTrigger, "AccordionPrimitive.Trigger").$$render(
        $$result,
        Object.assign(
          {},
          {
            class: cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>div>svg]:rotate-180", className)
          },
          $$restProps
        ),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``} <div class="inline-flex rounded-md w-8 h-8 items-center justify-center bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700/70 dark:hover:bg-zinc-800">${validate_component(ChevronDown, "ChevronDown").$$render(
              $$result,
              {
                class: "h-4 w-4 transition-transform duration-500"
              },
              {},
              {}
            )}</div>`;
          }
        }
      )}`;
    }
  })}`;
});
const Root$1 = Accordion;
const Series_blog_accordian = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let meta;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  ({ meta } = data);
  $$unsubscribe_page();
  return `${data.seriesPost && data.coverFolder && data.fileName ? `<div class="w-full sm:max-w-[70%] px-2 relative">${validate_component(Root$1, "Accordion.Root").$$render(
    $$result,
    {
      class: "px-2 py-4 space-y-4 border-2 rounded-lg md:px-4 ",
      value: $page.params.slug
    },
    {},
    {
      default: () => {
        return `<div class="flex items-center justify-between"><h1 class="font-semibold">${escape(data.seriesPost?.title)}</h1> <h1>${escape(meta.order)} / ${escape(data.seriesPost?.subPosts.length)} <span class="hidden md:inline" data-svelte-h="svelte-1qk9awb">Parts</span></h1></div> <div class="px-2 rounded-lg bg-zinc-100 dark:bg-zinc-900">${each(data.seriesPost?.subPosts, (post, index) => {
          return `${validate_component(Accordion_item, "Accordion.Item").$$render(
            $$result,
            {
              value: post.slug,
              class: "border-none no-highlight"
            },
            {},
            {
              default: () => {
                return `${validate_component(Accordion_trigger, "Accordion.Trigger").$$render(
                  $$result,
                  {
                    class: cn(
                      "text-base font-normal no-underline border-b border-muted-foreground/50 [&[data-state=open]]:border-none",
                      $page.params.slug !== post.slug ? "hover:underline underline-offset-4 decoration-primary/50" : "hover:no-underline",
                      data.seriesPost?.subPosts.length - 1 === index && "border-none"
                    )
                  },
                  {},
                  {
                    default: () => {
                      return `<a${add_attribute("href", `/blog/${post.slug}`, 0)}>${validate_component(Badge, "Badge").$$render(
                        $$result,
                        {
                          class: cn("font-[500] border-muted-foreground h-7 rounded-lg text-sm", $page.params.slug !== post.slug && "border-none"),
                          variant: "outline"
                        },
                        {},
                        {
                          default: () => {
                            return `${escape(post.order)}. ${escape(post.title)} `;
                          }
                        }
                      )}</a> `;
                    }
                  }
                )} ${validate_component(Accordion_content, "Accordion.Content").$$render(
                  $$result,
                  {
                    class: cn("bg-zinc-200 dark:bg-zinc-800/30 -mx-2", data.seriesPost?.subPosts.length - 1 === index && "rounded-b-lg")
                  },
                  {},
                  {
                    default: () => {
                      return `<div class="px-2 mt-2 -mb-2 space-y-2"><div class="px-2">${escape(post.description)}</div></div> `;
                    }
                  }
                )} `;
              }
            }
          )}`;
        })}</div>`;
      }
    }
  )} <div class="absolute left-[5%] md:left-[3%] -top-2.5">${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      class: "border rounded-md border-muted-foreground/30",
      variant: "secondary"
    },
    {},
    {
      default: () => {
        return `${validate_component(Component$1, "Component").$$render($$result, { class: "w-4 h-4 mr-2" }, {}, {})}
				Series`;
      }
    }
  )}</div></div>` : ``}`;
});
const Series_post_navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentIndex;
  let nextPost;
  let previousPost;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { subPosts } = $$props;
  if ($$props.subPosts === void 0 && $$bindings.subPosts && subPosts !== void 0)
    $$bindings.subPosts(subPosts);
  currentIndex = subPosts?.findIndex((post) => {
    if (post.slug === $page.params.slug) {
      return post.order;
    }
  });
  nextPost = subPosts[currentIndex + 1];
  previousPost = subPosts[currentIndex - 1];
  $$unsubscribe_page();
  return `<div class="flex items-center justify-between px-3 flex-wrap gap-4"><div>${previousPost ? `<a${add_attribute("href", `/blog/${previousPost.slug}`, 0)}${add_attribute("class", cn(buttonVariants({ variant: "secondary" })), 0)}><span class="font-bold" data-svelte-h="svelte-eirwhb">Previous</span>: ${escape(previousPost.title)}</a>` : ``}</div> <div>${nextPost ? `<a${add_attribute("href", `/blog/${nextPost.slug}`, 0)}${add_attribute("class", cn(buttonVariants({ variant: "secondary" })), 0)}><span class="font-bold" data-svelte-h="svelte-1ws8eaj">Next</span>: ${escape(nextPost.title)}</a>` : ``}</div></div>`;
});
const Hover_card_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig", "align", "sideOffset"]);
  let { class: className = void 0 } = $$props;
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { align = "center" } = $$props;
  let { sideOffset = 4 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0)
    $$bindings.transitionConfig(transitionConfig);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.sideOffset === void 0 && $$bindings.sideOffset && sideOffset !== void 0)
    $$bindings.sideOffset(sideOffset);
  return `${validate_component(LinkPreviewContent, "HoverCardPrimitive.Content").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      { align },
      { sideOffset },
      {
        class: cn("z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none mt-3", className)
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
const Root = LinkPreview;
const Trigger = LinkPreviewTrigger;
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "delayMs"]);
  let { class: className = void 0 } = $$props;
  let { delayMs = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.delayMs === void 0 && $$bindings.delayMs && delayMs !== void 0)
    $$bindings.delayMs(delayMs);
  return `${validate_component(Avatar$1, "AvatarPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      { delayMs },
      {
        class: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)
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
const Avatar_image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "src", "alt"]);
  let { class: className = void 0 } = $$props;
  let { src = void 0 } = $$props;
  let { alt = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `${validate_component(AvatarImage, "AvatarPrimitive.Image").$$render(
    $$result,
    Object.assign(
      {},
      { src },
      { alt },
      {
        class: cn("aspect-square h-full w-full", className)
      },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Avatar_fallback = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(AvatarFallback, "AvatarPrimitive.Fallback").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)
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
const Author = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `${validate_component(Root, "HoverCard.Root").$$render($$result, { openDelay: 200, closeDelay: 100 }, {}, {
    default: () => {
      return `${validate_component(Trigger, "HoverCard.Trigger").$$render($$result, { class: "w-fit" }, {}, {
        default: () => {
          return `<a class="flex items-center gap-2" href="/about">${validate_component(Avatar, "Avatar.Root").$$render($$result, { class: cn("h-7 w-7", className) }, {}, {
            default: () => {
              return `${validate_component(Avatar_image, "Avatar.Image").$$render(
                $$result,
                {
                  src: author.avatar,
                  alt: `@${author.twt}`
                },
                {},
                {}
              )} ${validate_component(Avatar_fallback, "Avatar.Fallback").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(`${author?.name.split(" ")[0].charAt(0)} ${author?.name.split(" ")[1].charAt(0)}`)}`;
                }
              })}`;
            }
          })} <p>${escape(author?.name)}</p></a>`;
        }
      })} ${validate_component(Hover_card_content, "HoverCard.Content").$$render($$result, { class: "flex w-96 flex-col gap-3" }, {}, {
        default: () => {
          return `<div class="flex justify-between space-x-4">${validate_component(Avatar, "Avatar.Root").$$render($$result, { class: "h-14 w-14" }, {}, {
            default: () => {
              return `${validate_component(Avatar_image, "Avatar.Image").$$render(
                $$result,
                {
                  src: author.avatar,
                  alt: `@${author.twt}`
                },
                {},
                {}
              )} ${validate_component(Avatar_fallback, "Avatar.Fallback").$$render($$result, {}, {}, {
                default: () => {
                  return `${escape(`${author.name.split(" ")[0].charAt(0)}${author.name.split(" ")[1].charAt(0)}`)}`;
                }
              })}`;
            }
          })} <div class="flex-grow space-y-3"><div class="flex items-center justify-between"><div class="flex flex-col items-start"><h1>${escape(author.name)}</h1> <a${add_attribute("href", `https://twitter.com/${author.twt}`, 0)} class="text-xs text-muted-foreground">@${escape(author.twt)}</a></div> <div><a href="/"${add_attribute("class", cn(buttonVariants({ variant: "outline" }), "flex h-8 w-8 items-center gap-1 p-0"), 0)} target="_blank">${validate_component(Planet, "Planet").$$render($$result, { class: "h-5 w-5" }, {}, {})}</a></div></div> <p class="text-start">${escape(author.tagline)}</p> <div class="flex flex-wrap items-center gap-2">${each(getSocials({ exclude: "Mail" }), ({ href, icon }) => {
            return `<a${add_attribute("href", href, 0)} target="_blank"${add_attribute("class", cn("justify-between gap-3", buttonVariants({ variant: "outline" })), 0)}>${validate_component(icon || missing_component, "svelte:component").$$render($$result, {}, {}, {})} </a>`;
          })}</div></div></div>`;
        }
      })}`;
    }
  })}`;
});
const PUBLIC_GITHUB_REPO = "prabhukirankonda-portfolio";
const PUBLIC_GITHUB_USERNAME = "PrabhuKiran8790";
const PUBLIC_GITHUB_REPO_ID = "R_kgDOKvsVjg";
const PUBLIC_CATEGORY = "General";
const PUBLIC_CATEGORY_ID = "DIC_kwDOKvsVjs4CbGAk";
const Giscus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = void 0 } = $$props;
  let { host = "https://giscus.app" } = $$props;
  let { repo } = $$props;
  let { repoId } = $$props;
  let { category = void 0 } = $$props;
  let { categoryId = void 0 } = $$props;
  let { mapping = "pathname" } = $$props;
  let { term = void 0 } = $$props;
  let { strict = "0" } = $$props;
  let { reactionsEnabled = "1" } = $$props;
  let { emitMetadata = "0" } = $$props;
  let { inputPosition = "bottom" } = $$props;
  let { theme: theme2 = "light" } = $$props;
  let { lang = "en" } = $$props;
  let { loading = "eager" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.host === void 0 && $$bindings.host && host !== void 0)
    $$bindings.host(host);
  if ($$props.repo === void 0 && $$bindings.repo && repo !== void 0)
    $$bindings.repo(repo);
  if ($$props.repoId === void 0 && $$bindings.repoId && repoId !== void 0)
    $$bindings.repoId(repoId);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.categoryId === void 0 && $$bindings.categoryId && categoryId !== void 0)
    $$bindings.categoryId(categoryId);
  if ($$props.mapping === void 0 && $$bindings.mapping && mapping !== void 0)
    $$bindings.mapping(mapping);
  if ($$props.term === void 0 && $$bindings.term && term !== void 0)
    $$bindings.term(term);
  if ($$props.strict === void 0 && $$bindings.strict && strict !== void 0)
    $$bindings.strict(strict);
  if ($$props.reactionsEnabled === void 0 && $$bindings.reactionsEnabled && reactionsEnabled !== void 0)
    $$bindings.reactionsEnabled(reactionsEnabled);
  if ($$props.emitMetadata === void 0 && $$bindings.emitMetadata && emitMetadata !== void 0)
    $$bindings.emitMetadata(emitMetadata);
  if ($$props.inputPosition === void 0 && $$bindings.inputPosition && inputPosition !== void 0)
    $$bindings.inputPosition(inputPosition);
  if ($$props.theme === void 0 && $$bindings.theme && theme2 !== void 0)
    $$bindings.theme(theme2);
  if ($$props.lang === void 0 && $$bindings.lang && lang !== void 0)
    $$bindings.lang(lang);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  return `${``}`;
});
const Comments = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $theme, $$unsubscribe_theme;
  $$unsubscribe_theme = subscribe(theme, (value) => $theme = value);
  let { theme_ } = $$props;
  if ($$props.theme_ === void 0 && $$bindings.theme_ && theme_ !== void 0)
    $$bindings.theme_(theme_);
  $$unsubscribe_theme();
  return `${validate_component(Giscus, "Giscus").$$render(
    $$result,
    {
      repo: `${PUBLIC_GITHUB_USERNAME}/${PUBLIC_GITHUB_REPO}`,
      repoId: PUBLIC_GITHUB_REPO_ID,
      category: PUBLIC_CATEGORY,
      categoryId: PUBLIC_CATEGORY_ID,
      mapping: "pathname",
      strict: "0",
      reactionsEnabled: "1",
      emitMetadata: "0",
      inputPosition: "top",
      theme: $theme ? $theme === "light" ? "light" : "dark_tritanopia" : theme_,
      lang: "en"
    },
    {},
    {}
  )}`;
});
const Separator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "orientation", "decorative"]);
  let { class: className = void 0 } = $$props;
  let { orientation = "horizontal" } = $$props;
  let { decorative = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.orientation === void 0 && $$bindings.orientation && orientation !== void 0)
    $$bindings.orientation(orientation);
  if ($$props.decorative === void 0 && $$bindings.decorative && decorative !== void 0)
    $$bindings.decorative(decorative);
  return `${validate_component(Separator$1, "SeparatorPrimitive.Root").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn(
          "shrink-0 bg-border",
          orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
          className
        )
      },
      { orientation },
      { decorative },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let { content, meta } = data;
  let theme_;
  {
    if (typeof meta.image === "string" && meta.image?.startsWith("/posts")) {
      meta.image = localToGithubURL({ src: meta.image });
    } else if (Array.isArray(meta.image)) {
      meta.image = meta.image.map((image) => {
        if (image.startsWith("/posts")) {
          return localToGithubURL({ src: image });
        }
        return image;
      });
    }
  }
  let githubUrl = `https://github.com/${githubConfig.username}/${githubConfig.repo}/blob/${githubConfig.branch}/posts/${$page.params.slug}/page.md`;
  let seriesGithubUrl = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    {
      content = data.content;
      meta = data.meta;
    }
  }
  {
    {
      if (data?.seriesPost?.subPosts) {
        let currentSlug = $page.params.slug;
        let splits = currentSlug.split(/-spn\d+-/);
        seriesGithubUrl = `https://github.com/${githubConfig.username}/${githubConfig.repo}/blob/${githubConfig.branch}/series/${splits[0]}/${splits[1]}.md`;
      }
    }
  }
  $$unsubscribe_page();
  return `${validate_component(Blog_metatags, "BlogMetatags").$$render($$result, { meta }, {}, {})} <div class="fixed top-0 md:top-[64px] z-[50] w-[0%] h-0.5 bg-muted-foreground" id="scroll-progress"></div> <div class="pt-6 md:container md:pt-14 space-y-8">${validate_component(Bloghero, "Bloghero").$$render($$result, { data }, {}, {})} ${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})} <div class="relative w-full max-w-4xl mx-auto text-primary"><div class="mb-20 px-4 mdsvex" id="mdsvex">${validate_component(content || missing_component, "svelte:component").$$render($$result, {}, {}, {})}</div> ${data?.seriesPost?.subPosts ? `<div class="mb-20">${validate_component(Series_post_navigation, "SeriesPostNavigation").$$render($$result, { subPosts: data?.seriesPost?.subPosts }, {}, {})}</div>` : ``} ${``} <div class="px-2">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "outline",
      target: "_blank",
      class: "h-8 px-2",
      href: data?.seriesPost?.subPosts ? seriesGithubUrl : githubUrl
    },
    {},
    {
      default: () => {
        return `${validate_component(Github, "Github").$$render($$result, { class: "w-4 h-4 mr-3" }, {}, {})} <h1 data-svelte-h="svelte-1rdox29">View on GitHub</h1>`;
      }
    }
  )}</div></div> <div class="flex items-center justify-center">${validate_component(Svg_doodle, "SVGDoodle").$$render($$result, {}, {}, {})}</div> <div class="px-3 pb-24 md:container" id="comments">${validate_component(Comments, "Comments").$$render($$result, { theme_ }, {}, {})}</div></div>`;
});
export {
  Page as default
};
