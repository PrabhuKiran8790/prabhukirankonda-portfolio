import { c as create_ssr_component, v as validate_component, g as add_attribute, l as compute_rest_props, b as spread, p as escape_attribute_value, d as escape_object } from "./ssr.js";
import { I as Icon, c as cn } from "./index2.js";
const External_link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      }
    ],
    ["polyline", { "points": "15 3 21 3 21 9" }],
    [
      "line",
      {
        "x1": "10",
        "x2": "21",
        "y1": "14",
        "y2": "3"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "external-link" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ExternalLink = External_link;
const A = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let internal;
  let target;
  let { href } = $$props;
  let { rel = void 0 } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.rel === void 0 && $$bindings.rel && rel !== void 0)
    $$bindings.rel(rel);
  internal = href.startsWith("/") || href.startsWith("#");
  rel = !internal ? "noopener noreferrer" : void 0;
  target = !internal ? "_blank" : void 0;
  return `<a class="inline-flex items-center underline gap-1 underline-offset-4 transition-colors"${add_attribute("href", href, 0)}${add_attribute("target", target, 0)}>${slots.default ? slots.default({}) : ``} ${!internal ? `${validate_component(ExternalLink, "ExternalLink").$$render($$result, { class: "w-3 h-3" }, {}, {})}` : ``}</a>`;
});
const H2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<h2${spread(
    [
      {
        class: escape_attribute_value(cn("mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</h2>`;
});
const Hr = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<hr${spread(
    [
      {
        class: escape_attribute_value(cn("my-4 md:my-8", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>`;
});
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<p${spread(
    [
      {
        class: escape_attribute_value(cn("leading-7 [&:not(:first-child)]:mt-6 text-primary/90 md:text-lg", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</p>`;
});
const Li = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(cn("mt-2 leading-7 md:text-lg text-primary/90", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const Ul = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<ul${spread(
    [
      {
        class: escape_attribute_value(cn("ml-6 list-disc", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</ul>`;
});
export {
  A,
  H2 as H,
  Li as L,
  P,
  Ul as U,
  Hr as a
};
