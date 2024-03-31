import { c as create_ssr_component, g as add_attribute, v as validate_component, e as escape, m as missing_component } from "./ssr.js";
import { S as Svelte } from "./svelte.js";
import "clsx";
import "./marked.esm.js";
import { c as cn } from "./index2.js";
import { B as Badge } from "./badge.js";
const Streamlit = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg height="22" width="22" viewBox="0 0 256 140" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"${add_attribute("class", className, 0)}><title>Streamlit</title><g><path d="M123.888449,2.18175866 C125.808448,-0.727252886 130.145938,-0.727252886 132.137617,2.18175866 L132.137617,2.18175866 L172.891085,62.932228 L216.212232,127.451015 C215.700685,128.361248 215.110488,129.224984 214.448393,130.032347 C213.996127,130.5708 213.567754,131.080239 213.033567,131.603332 L213.033567,131.603332 L213.023,131.598 L213.032714,131.603332 C212.915594,131.715332 212.803274,131.802852 212.663354,131.909452 L212.513034,132.024025 C212.022644,132.390202 211.517626,132.73637 210.999222,133.061678 C210.579382,133.324505 210.232076,133.556611 209.730316,133.798104 C209.22941,134.039598 208.42813,134.329731 207.945997,134.495277 C207.463011,134.661677 207.301731,134.717997 206.945891,134.796504 C206.768398,134.832344 206.590051,134.86733 206.412558,134.888664 C206.291385,134.909997 206.171065,134.93133 206.049892,134.945837 C206.028558,134.952664 206.000398,134.952664 205.979065,134.960344 L205.979065,134.960344 L205.438052,135.024344 C204.869732,135.080664 204.279226,135.109677 203.675067,135.109677 C153.403712,140.590629 102.685501,140.590629 52.4141462,135.109677 C52.3569729,135.109677 52.3006529,135.109677 52.2434796,135.101997 L52.2434796,135.101997 L52.0728131,135.101144 L52.0728131,135.101144 L51.9943065,135.09517 L51.9166532,135.09517 C51.8594799,135.088344 51.8023066,135.088344 51.7459866,135.080664 L51.7459866,135.080664 L51.6888133,135.080664 C51.6103067,135.073837 51.5386267,135.073837 51.4618268,135.06701 C50.9924937,135.03117 50.4455074,134.912557 50.0538277,134.825517 C49.6612946,134.74701 49.4274814,134.683011 49.1006549,134.611331 C45.231644,133.693998 41.6766595,131.361839 40.0476471,127.585842 C40.0049805,127.486002 39.9691405,127.387015 39.9264739,127.287175 L39.9264739,127.287175 L39.9196472,127.265842 L0.225164964,26.0247307 C-0.841501046,23.1805724 2.07433716,20.3355608 4.91849541,21.68724 C4.99017537,21.68724 5.13182861,21.68724 5.20350857,21.7580666 L5.20350857,21.7580666 L83.1059673,62.9313746 Z M250.894237,21.75892 C253.746076,20.1947609 256.803567,22.8964126 255.807728,25.8830774 L255.807728,25.8830774 L255.807728,26.025584 L216.213085,127.451868 L172.891939,62.932228 L250.823411,21.75892 Z" fill="#FF4B4B"></path><path d="M250.894237,21.75892 L250.823411,21.75892 L172.891939,62.932228 L216.213085,127.451868 L255.807728,26.025584 L255.807728,25.8830774 C256.803567,22.8964126 253.746076,20.1947609 250.894237,21.75892" fill="#7D353B"></path><path d="M132.137617,2.18175866 C130.145938,-0.727252886 125.808448,-0.727252886 123.888449,2.18175866 L83.1059673,62.932228 L127.984446,86.65488 L213.033567,131.603332 C213.567754,131.080239 213.996127,130.5708 214.448393,130.032347 C215.110488,129.224984 215.700685,128.361248 216.212232,127.451015 L172.891085,62.932228 L132.137617,2.18175866 Z" fill="#BD4043"></path></g></svg>`;
});
const Tailwind = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg viewBox="0 0 128 128"${add_attribute("class", className, 0)} height="22" width="22"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38b2ac"></path></svg>`;
});
const Drizzle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg height="22" width="22" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg"${add_attribute("class", className, 0)}><rect width="9.63139" height="40.8516" rx="4.8157" transform="matrix(0.873028 0.48767 -0.497212 0.867629 43.4805 67.3037)" fill="currentColor"></rect><rect width="9.63139" height="40.8516" rx="4.8157" transform="matrix(0.873028 0.48767 -0.497212 0.867629 76.9395 46.5342)" fill="currentColor"></rect><rect width="9.63139" height="40.8516" rx="4.8157" transform="matrix(0.873028 0.48767 -0.497212 0.867629 128.424 46.5352)" fill="currentColor"></rect><rect width="9.63139" height="40.8516" rx="4.8157" transform="matrix(0.873028 0.48767 -0.497212 0.867629 94.957 67.3037)" fill="currentColor"></rect></svg>`;
});
function tuple(...o) {
  return o;
}
const techStackArray = tuple(
  "Python",
  "TypeScript",
  "JavaScript",
  "Java",
  "React",
  "NextJS",
  "SvelteKit",
  "TensorFlow",
  "PyTorch",
  "Streamlit",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Firebase",
  "FastAPI",
  "Docker",
  "Git",
  "Drizzle",
  "Tailwind"
);
const techStackData = {
  // inlcude if you want any custom type icon
  // by default it's gonna stick with default values
  /*
     why i'm only icluding the one that i want to be a custom type is that, if you see the URL structure of devicon.dev (that's where we get those icons), it has following structure
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" />
     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{name}/{filename}.svg" />
     so we can you default ones if not included here. 
     */
  // for nextjs, i want the background to be white so i inlcude nextjs in this
  NextJS: {
    className: "bg-white rounded-full"
    // that's it.
  },
  Firebase: {
    filename: "firebase-plain"
  },
  SvelteKit: {
    customIcon: Svelte
  },
  Streamlit: {
    customIcon: Streamlit
  },
  MySQL: {
    className: "bg-white",
    filename: "mysql-original-wordmark"
  },
  Tailwind: {
    customIcon: Tailwind
  },
  Drizzle: {
    customIcon: Drizzle
  }
};
const Techstack_icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  return `${validate_component(Badge, "Badge").$$render(
    $$result,
    {
      variant: "outline",
      class: "py-1 border rounded-md border-primary gap-2"
    },
    {},
    {
      default: () => {
        return `<p class="text-sm">${escape(icon)}</p> ${techStackData[icon]?.customIcon ? `${validate_component(techStackData[icon]?.customIcon || missing_component, "svelte:component").$$render(
          $$result,
          {
            class: cn("h-5 w-5", techStackData[icon]?.className)
          },
          {},
          {}
        )}` : `<img${add_attribute(
          "src",
          `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${techStackData[icon]?.name ? `${techStackData[icon]?.name}` : `${icon.toLocaleLowerCase()}`}/${techStackData[icon]?.filename ? techStackData[icon]?.filename : `${icon.toLocaleLowerCase()}-original`}.svg`,
          0
        )}${add_attribute("alt", icon, 0)}${add_attribute("class", cn("h-5 w-5", techStackData[icon]?.className), 0)}>`}`;
      }
    }
  )}`;
});
export {
  Techstack_icon as T,
  techStackArray as t
};
