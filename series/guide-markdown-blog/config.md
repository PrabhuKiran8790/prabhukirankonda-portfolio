---
title: Other Configurations for this template
description: let's look at other configurations for this template like Giscus comments, Projects, About etc.
date: '2023-12-20'
order: 3
draft: false
---

In this part we'll see how to configure Giscus comments, About Page, Projects page etc.

## Giscus Comments

Each post has it's own dedicated comments section based on [Giscus](https://giscus.app/). you can start by changing some environment variables to setup Giscus. In you `.env` file change the following variables.

```js
PUBLIC_GITHUB_REPO = prabhukirankonda-portfolio
PUBLIC_GITHUB_USERNAME = PrabhuKiran8790
PUBLIC_GITHUB_REPO_ID =
PUBLIC_CATEGORY = General
PUBLIC_CATEGORY_ID =
```

to get Repo ID, Category ID goto [Giscus](https://giscus.app/) and follow the instructions.

## Projects

To add a new project, you can start by chaging the `src/lib/projects.ts` file.


```ts title="src/lib/projects.ts"
import type { TechStack } from './icons';

export type ProjectType = {
	title: string;
	featured?: boolean;
	href: string;
	source?: string;
	image: string;
	description: string;
	techstack: TechStack[];
};

export const projects: ProjectType[] = [
	{
		title: 'Personal Portfolio with Markdown Blog',
		description:
			'This website, prabhukirankonda.vercel.app is my personal website with a markdown blog written in SvelteKit and deployed using Vercel. Styled using Taiwind CSS and Shadcn-UI and completely written in TypeScript.',
		href: 'https://prabhukirankonda.vercel.app',
		source: 'https://github.com/PrabhuKiran8790/prabhukirankonda.vercel.app',
		image: '/sveltekit-portfolio-min.png',
		techstack: ['SvelteKit', 'Tailwind', 'TypeScript'],
		featured: true
	},
	{
		title: 'Corgi-AI: Create anything with AI',
		description:
			'Corgi AI is a collection of AI tools for different usecases. It includes a chatGPT clone with streaming responses, Image Generation, Audio Generation, Image Restoration and PDF Chat(beta). It is a full fledged SaaS application with stripe payments. It is Deployed using Docker with a VPS hosting on fly.io',
		href: 'https://corgi-ai.fly.dev',
		source: 'https://github.com/PrabhuKiran8790/corgi-docker',
		image: '/corgi-ai-dashboard.png',
		techstack: ['SvelteKit', 'TypeScript', 'PostgreSQL', 'Docker', 'Drizzle'],
		featured: true
	},
	{
		title: 'Dall-E Clone: AI Image Generation',
		description:
			'Created a Dall-E Clone using SvelteKit, OpenAI API, TailwindCSS, TypeScript, Dirzzle ORM and MySQL Database. Converted it into fully working SaaS which inludes Stripe Payment Integration, User Authentication (Github & Google), and User Friendly Interface. The app is deployed with Vercel for easy setup and scalability.',
		href: 'https://dall-e-sveltekit.vercel.app/',
		source: 'https://github.com/PrabhuKiran8790/dall-e-clone',
		image: '/dall-e-svelte-min.png',
		techstack: ['SvelteKit', 'TypeScript', 'MySQL', 'Drizzle'],
		featured: true
	},
];
```

projects that are featured will be shown in home page. make sure the techstack is of type `TechStack[]` so that it's possible to render the respective icons to showcase projects. see [/projects](/projects) to get an idea on how icons are rendered and see src/lib/types.ts for more information.

```ts
import type { ComponentType, SvelteComponent } from 'svelte';
import { Drizzle, Streamlit, Svelte, Tailwind } from './components/site/icons';

function tuple<T extends string[]>(...o: T) {
	return o;
}

export const techStackArray = tuple(
	'Python',
	'TypeScript',
	'JavaScript',
	'Java',
	'React',
	'NextJS',
	'SvelteKit',
	'TensorFlow',
	'PyTorch',
	'Streamlit',
	'PostgreSQL',
	'MySQL',
	'MongoDB',
	'Firebase',
	'FastAPI',
	'Docker',
	'Git',
	'Drizzle',
	'Tailwind'
);

export type TechStack = (typeof techStackArray)[number];

export type TechStackObject = {
	[key in TechStack]?: {
		name?: string;
		filename?: string;
		className?: string;
		customIcon?: ComponentType<SvelteComponent>;
	};
};

export type LangIconsType = {
	[key: string]: {
		name?: string;
		filename?: string;
		className?: string;
		customIcon?: ComponentType<SvelteComponent>;
	};
};

export const techStackData: TechStackObject = {
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
		className: 'bg-white rounded-full' // that's it.
	},
	Firebase: {
		filename: 'firebase-plain'
	},
	SvelteKit: {
		customIcon: Svelte
	},
	Streamlit: {
		customIcon: Streamlit
	},
	MySQL: {
		className: 'bg-white',
		filename: 'mysql-original-wordmark'
	},
	Tailwind: {
		customIcon: Tailwind
	},
	Drizzle: {
		customIcon: Drizzle
	}
};
```

you can add custom icons, give class names and more.

## About

About page is also rendered using markdown but it has its own layout. `src/lib/components/markdown/about-layout.svelte`. To change content in about, edit `about/about.md`. if you see the fronmatter for `about.md` there's a `layout: about` which tells the MDsveX preprocessor to use about layout.

fronmatter for about.md

```md
---
layout: about
---
```

```js showLineNumbers{157} {6} title="mdsvex.config.js"
/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
	extensions: ['.md', '.svx'],
	layout: {
		_: resolve('./src/lib/components/markdown/layout.svelte'), // default or fallback layout
		about: resolve('./src/lib/components/markdown/about-layout.svelte') // named layout
	},
	// comment if not working
	// highlight: {
	// 	highlighter: highlightCode
	// },
	remarkPlugins: [remarkUnwrapImages, math, katex_blocks, katex_inline, replaceQuotes, remarkGfm],
	rehypePlugins: [
		rehypeCustomComponents,
		rehypeComponentPreToPre,
		[rehypePrettyCode, prettyCodeOptions],
		rehypeHandleMetadata,
		rehypeRenderCode,
		rehypePreToComponentPre,
		rehypeSlug,
		correct_hast_tree,
		rehype_katex
	]
};
```

---