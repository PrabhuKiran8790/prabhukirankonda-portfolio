import { c as create_ssr_component, v as validate_component, g as add_attribute, e as escape, i as each } from "./ssr.js";
import { I as Icon, c as cn, B as Button, G as Github } from "./index2.js";
import "./marked.esm.js";
import { T as Techstack_icon } from "./techstack-icon.js";
const Arrow_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "m12 5 7 7-7 7" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ArrowRight = Arrow_right;
const Project_card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { project } = $$props;
  if ($$props.project === void 0 && $$bindings.project && project !== void 0)
    $$bindings.project(project);
  return ` <div${add_attribute("class", cn("pb-0 border-2 rounded-xl hover:border-primary no-highlight max-w-md"), 0)}>${project.image ? `<div class="p-2"><img${add_attribute("src", project.image, 0)}${add_attribute("alt", project.title, 0)} class="rounded-md w-fit" loading="lazy"></div>` : ``} <div class="flex flex-col justify-between h-full gap-4 p-2.5 pt-0"><div class="flex flex-col justify-between gap-2"><h1${add_attribute("class", `text-lg font-semibold ${""}`, 0)}><a${add_attribute("href", project.href, 0)}>${escape(project.title)}</a></h1> <div class="flex gap-1 flex-wrap">${each(project.techstack, (icon) => {
    return `${validate_component(Techstack_icon, "TechStackIcon").$$render($$result, { icon }, {}, {})}`;
  })}</div></div> <div><p class="text-muted-foreground">${escape(project.description)}</p></div> <div><div class="flex items-center justify-between"><div>${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "ghost",
      size: "sm",
      class: "px-3 py-0",
      href: project.href,
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `Visit
						${validate_component(ArrowRight, "ArrowRight").$$render($$result, { class: `h-4 w-4 ml-2` }, {}, {})}`;
      }
    }
  )}</div> ${project.source ? `<div>${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: "ghost",
      size: "sm",
      class: "px-3 py-0",
      href: project.source,
      target: "_blank"
    },
    {},
    {
      default: () => {
        return `View Source
							${validate_component(Github, "Github").$$render($$result, { class: `h-4 w-4 ml-2` }, {}, {})}`;
      }
    }
  )}</div>` : ``}</div></div></div></div>`;
});
const projects = [
  {
    title: "Personal Portfolio with Markdown Blog",
    description: "This website, prabhukirankonda.vercel.app is my personal website with a markdown blog written in SvelteKit and deployed using Vercel. Styled using Taiwind CSS and Shadcn-UI and completely written in TypeScript.",
    href: "https://prabhukirankonda.vercel.app",
    source: "https://github.com/PrabhuKiran8790/prabhukirankonda.vercel.app",
    image: "/sveltekit-portfolio-min.png",
    techstack: ["SvelteKit", "Tailwind", "TypeScript"],
    featured: true
  },
  {
    title: "Corgi-AI: Create anything with AI",
    description: "Corgi AI is a collection of AI tools for different usecases. It includes a chatGPT clone with streaming responses, Image Generation, Audio Generation, Image Restoration and PDF Chat(beta). It is a full fledged SaaS application with stripe payments. It is Deployed using Docker with a VPS hosting on fly.io",
    href: "https://corgi-ai.fly.dev",
    source: "https://github.com/PrabhuKiran8790/corgi-docker",
    image: "/corgi-ai-dashboard.png",
    techstack: ["SvelteKit", "TypeScript", "PostgreSQL", "Docker", "Drizzle"],
    featured: true
  },
  {
    title: "Dall-E Clone: AI Image Generation",
    description: "Created a Dall-E Clone using SvelteKit, OpenAI API, TailwindCSS, TypeScript, Dirzzle ORM and MySQL Database. Converted it into fully working SaaS which inludes Stripe Payment Integration, User Authentication (Github & Google), and User Friendly Interface. The app is deployed with Vercel for easy setup and scalability.",
    href: "https://dall-e-sveltekit.vercel.app/",
    source: "https://github.com/PrabhuKiran8790/dall-e-clone",
    image: "/dall-e-svelte-min.png",
    techstack: ["SvelteKit", "TypeScript", "MySQL", "Drizzle"],
    featured: true
  },
  {
    title: "GFPGAN Streamlit App: Face Restoration",
    description: `Created a Streamlit app for the GFPGAN model to restore faces in images. It has a user-friendly interface, and easy Docker deployment.`,
    image: "/GFPGAN-min.png",
    source: "https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-GFPGAN/tree/main",
    href: "https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-GFPGAN",
    techstack: ["Python", "Streamlit", "Docker"]
  },
  {
    title: "AI-SaaS App: MultiGPT",
    description: "Created an AI-SaaS app using NextJS, React. It features a subscription based payment system using Stripe, user authentication, and a user-friendly interface. The app is deployed with Vercel for easy setup and scalability. It has several features like Chatbot, Code Generation, Image Generation, Audio Generation and Video Generation.",
    image: "/multigpt.png",
    href: "https://multigpt-pk.vercel.app/",
    source: "https://github.com/PrabhuKiran8790/ai-saas",
    techstack: ["NextJS", "React", "JavaScript"]
  },
  {
    title: "Full Stack Todo App",
    description: `Created a Todo application using SvelteKit, FastAPI, and PostgreSQL. It features JWT-based authentication for security and includes task categorization into sections like current todos, upcoming, overdue, and completed. Users can easily update, delete, and mark tasks as complete.`,
    image: "/svelte-todo.png",
    href: "https://sveltekit-todo-prabhu.vercel.app/",
    techstack: ["SvelteKit", "JavaScript", "Python", "FastAPI", "PostgreSQL"]
  },
  {
    title: "PDF Assistant: AI Powered Q&A for PDFs",
    description: `Built a PDF Assistant tool using OpenAI's LLM to answer questions from uploaded PDF files. It has a user-friendly web interface with StreamLit, Firebase authentication for security, real-time updates via Firebase, a guest mode for no authentication, and easy Docker deployment.`,
    image: "/PDF_Assistant.png",
    href: "https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-PDF-Assistant-Docker",
    source: "https://huggingface.co/spaces/PrabhuKiranKonda/Streamlit-PDF-Assistant-Docker/tree/main",
    techstack: ["Python", "Streamlit", "Docker"]
  },
  {
    title: "REST API: FastAPI with MongoDB",
    description: `Developed a high-performance API using FastAPI and MongoDB Cloud Database for CRUD Operation. The API is deployed with Docker for easy setup and scalability.`,
    image: "/FastAPI_MongDB.png",
    href: "https://huggingface.co/spaces/PrabhuKiranKonda/fastapi_mongoDB",
    source: "https://huggingface.co/spaces/PrabhuKiranKonda/fastapi_mongoDB/tree/main",
    techstack: ["Python", "FastAPI", "MongoDB", "Docker"]
  }
];
export {
  Project_card as P,
  projects as p
};
