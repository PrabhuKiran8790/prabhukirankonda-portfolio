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

it's important to add your `githubConfig` in `config.ts` so that it can convert your local images that are in `posts/[slug]` folder to github url.

![PDF Assistant](/posts/getting-started/PDF_Assistant.png)

![PDF Assistant](/PDF_Assistant.png)
