---
title: Getting Started
description: A guide on how to use this sveltekit + markdown blog.
date: '2023-11-20'
tags:
    - SvelteKit
image: https://res.cloudinary.com/practicaldev/image/fetch/s--YFzS8yLr--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w9o5387e8s37g7r4i6dy.png
draft: false
---

<script>
    import { ThemeToggle } from '$lib/components/site';
    import Katex from 'svelte-katex'
</script>


## Introduction
Welcome, this will guide you through this template and how to use it. This is a SvelteKit + MDsveX Personal website and a blog completely designed with [Shadcn-Svelte](https://shadcn-svelte.com/), it has everything you need get started and you can fully customise it.

## Features
it's got ton of features that you don't wanna miss out.

- Tailwind CSS for styling
- [Shadcn-Svelte](https://shadcn-svelte.com/) for UI Components
- Light and Dark mode
- Syntax Highlighting
    - with toast notifications for copy feedback
    - individual words highlighting
        ```py {2} showLineNumbers title="fib.py"  /fibonacci/#yb /return/#hi
        def fibonacci(n):
            if n <= 1: # base case
                return n 
            else:
        return fibonacci(n - 1) + fibonacci(n - 2)
        ```
    - inline syntax highlighting example: `console.log("Hey there"){:js}`
    - ability to inlcude an icon if title with an extension is provided.
    
    ````md
    ```js title="example.js"
    console.log("Hello from JS")
    ```
    ````

    will render into
    ```js title="example.js"
    console.log("Hello from JS")
    ```

    you can add icons for other languages as well

- [MDsveX](https://mdsvex.pngwn.io/) to support markdown files so that you can write your blogs in markdown.
- Custom Components
- use svelte components inside markdown
    - example
    <div class="flex items-center gap-4">
        try changing the theme 👉
        <ThemeToggle />
    </div>
- Table of Contents
- Giscus Comments (based on Github Discussions)
- Image Optimization
- Support for Nested routing of blogs
- Projects Page
- Support for math
    ```math
    \nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}
    ```
    ```math
    \nabla \cdot \mathbf{B} = 0  
    ```
    ```math
    \nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}  
    ```
    ```math
    \nabla \times \mathbf{B} = \mu_0 \left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)
    ```
    - wondering what those equations are? Maxwells Equations 🙃
- Mobile friendly interface

## How to use?

### Starting from home page

in home page at `src/routes/+page.svelte` we have two components, `Hero` and `LatestPost`

```svelte title="+page.svelte" showLineNumbers {8, 9}
<script lang="ts">
	import { Hero, LatestPost } from '$lib/components/site';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="p-4">
	<Hero />
	<LatestPost {data} />
</div>
```

here i'm not going with the sveltekit internals, i assume you know the basics.

the `Hero` component render the profile picture, Intro and social icons. to chage the social icons, change `config.ts` file.

```ts title="config.ts"
import { LinkedIn, X } from '$lib/components/site/icons';
import { FileText, Github, Mail } from 'lucide-svelte';

type routesType = {
	name: string;
	link: string;
};

type socialsType = {
	href: string;
	icon: typeof Github;
	display: string;
	class?: string;
};

// nav routes
export const routes: routesType[] = [
	{
		name: 'Blog',
		link: '/blog'
	},
	{
		name: 'Projects',
		link: '/projects'
	},
	{
		name: 'About',
		link: '/about'
	}
];

// social icons with links
const socials: socialsType[] = [
	{
		href: 'https://github.com/prabhukiran8790',
		icon: Github,
		display: 'GitHub'
	},
	{
		href: 'https://linkedin.com/in/PrabhuKiranKonda',
		icon: LinkedIn,
		display: 'LinkedIn'
	},
	{
		href: 'https://x.com/prabhukirantwt',
		icon: X,
		display: 'Twitter',
		class: 'h-4 w-4'
	},
	{
		href: 'mailto:prabhukiran426@gmail.com',
		icon: Mail,
		display: 'Mail',
		class: 'h-4 w-4'
	},
	{
		href: '/Prabhu Kiran Konda Resume.pdf',
		icon: FileText,
		display: 'Resume'
	}
];

export const getSocials = ({ exclude }: { exclude?: string } = {}): socialsType[] => {
	if (exclude) {
		return socials.filter((social) => social.display !== exclude);
	}
	return socials;
};

export const githubConfig = {
	username: 'PrabhuKiran8790',
	repo: 'sveltekit-portfolio',
	branch: 'main'
};
```

To ensure that your local images, located in the `posts/[slug]` folder, can be converted to GitHub URLs, it's essential to include your `githubConfig` in the `config.ts` file. This is particularly useful when you want to include images in your blog posts and prefer to store them in the same folder as your post for better organization.

However, there's a caveat – assets in other than public folder (static), won't be processed by Vite. As a result, these images won't have a definite URL. To obtain the URL, you'll need to incorporate your `githubConfig`, which transforms your local images into GitHub raw URL format. This ensures that when you deploy your application, the images will correctly point to your GitHub repository.

Alternatively, you can place your images directly in the static folder and access them using `/` which points to static folder. example: `/image.png`


### Creating a new blog

to create a new blog, create a folder with the slug you want and create a `page.md` file. the slug will acts as the blog url which will be `/blog/[slug]`

```md {4-12} /page.md/#yb /authjs-sveltekit-prisma/#rb /dimensionality-reduction-using-auto-encoders/#rb /getting-started/#rb
├── README.md
├── about
├── node_modules
├── posts
│   ├── authjs-sveltekit-prisma <!-- slug -->
│   │   └── page.md
│   ├── dimensionality-reduction-using-auto-encoders <!-- slug -->
│   │   └── page.md
│   └── getting-started <!-- slug -->
│       └── page.md
├── src
├── static
├── package.json
├── components.json
├── pnpm-lock.yaml
├── postcss.config.cjs
├── svelte.config.js
├── mdsvex.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

### Adding frontmatter

Frontmatter allows you to specify metadata and options. Included in frontmatter are things like the document or project title, what thumbnail to use for site or content previews, authors that contributed to the work etc,

for this template the frontmatter is

```md
---
title:
description:
date: '2023-11-26'
tags:
    - SvelteKit
image: url or a pathname
draft: false
---
```

`tags` is an array so if you want to declare multiple tags just add a new tag below it and of course you can change these but you need to change the Post type as well accordingly.

you can find the `Post` type in `src/lib/types.ts`

```ts title="src/lib/types.ts"
export type Post = {
	title: string;
	// slug is not related to the frontmatter but is included to get the slug via an api
	slug: string;
	description: string;
	date: string;
	tags: string[];
	image: string;
	draft: boolean;
};
```

### Code Blocks

Syntax highlighting is made possible using shiki and [rehype-pretty-code](https://rehype-pretty-code.netlify.app/) plugin.

a small example:

````md
```ts title="hello.ts" showLineNumbers {1} /Hello/#yb
console.log("Hello")
```
````
will render into

```ts title="hello.ts" showLineNumbers {1} /Hello/#yb
console.log("Hello")
```

you can change these styles in `markdown.postcss` file and `pre.svelte` file and for more information visit [rehype-pretty-code](https://rehype-pretty-code.netlify.app/)


## Blog Comments

Comments are made possible using [Giscus](https://giscus.app/), a GitHub discussion based commenting system. Start by changing some environment variables to setup Giscus. In you `.env` file change the following variables. These environment variables are imported in `routes/blog/[slug]/+page.svelte`

```js
PUBLIC_GITHUB_REPO = prabhukirankonda.vercel.app
PUBLIC_GITHUB_USERNAME = PrabhuKiran8790
PUBLIC_GITHUB_REPO_ID = 
PUBLIC_CATEGORY = General
PUBLIC_CATEGORY_ID = 
```
to get Repo ID, Category ID goto [Giscus](https://giscus.app/) and follow the instructions.

## Projects

To add a new project, you can start by chaging the `src/lib/projects.ts` file.

```ts title="src/lib/projects.ts"
import type { TechStack } from "./types";

export type ProjectType = {
	title: string;
	href: string;
	image: string;
	description: string;
	techstack: TechStack[];
};

export const projects: ProjectType[] = [
	{
		title: 'Personal Portfolio with Markdown Blog',
		description: 'This website, prabhukirankonda.vercel.app is my personal website with a markdown blog written in SvelteKit and deployed using Vercel. Styled using Taiwind CSS and Shadcn-UI and completely written in TypeScript.',
		href: 'https://prabhukirankonda.vercel.app',
		image: '/sveltekit-portfolio.png',
		techstack: ['SvelteKit', 'Tailwind', 'TypeScript']
	},
];
```

make sure the techstack is of type `TechStack[]` so that it's possible to render the respective icons to showcase projects. see [`/projects`](/projects) to get an idea on how icons are rendered and see `src/lib/types.ts` for more information.


## About

About page is also rendered using markdown but it has its own layout. `src/lib/components/markdown/about-layout.svelte`. To change about edit `about/about.md`. if you see the fronmatter for `about.md` there's a `layout: about` which tells the MDsveX preprocessor to use about layout.

about layout is defined in `mdsvex.config.js`

```js title="mdsvex.config.js" showLineNumbers{87} {5-6}
/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
	extensions: ['.md', '.svx'],
	layout: {
		_: resolve('./src/lib/components/markdown/layout.svelte'), //default or fallback layout
		about: resolve('./src/lib/components/markdown/about-layout.svelte') // named layout
	},
	remarkPlugins: [],
	rehypePlugins: [],
};
```
---

These are the some of the important changes to be made to get started. If you have any issues, feel free to open an issue. In the next update, I'll include related posts based on tags.