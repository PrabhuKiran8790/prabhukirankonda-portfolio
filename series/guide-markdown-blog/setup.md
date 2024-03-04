---
title: Getting Started
description: Setting up the Portfolio + Blog.
date: '2023-12-20'
order: 1
draft: false
---

<script>
    import { ThemeToggle, Tag } from '$lib/components/site';
</script>

## Introduction

Welcome, this will guide you through this template and how to use it. This is a SvelteKit + MDsveX Personal website and a blog completely designed with [Shadcn-Svelte](https://shadcn-svelte.com/), it has everything you need get started and you can fully customise it.
[repo link](https://github.com/PrabhuKiran8790/prabhukirankonda-portfolio.git)

## Features

it's got ton of features that you don't wanna miss out.

- Tailwind CSS for styling
- SvelteKit as meta framework
  - with shallow routing when clicking on tags to instantly see the posts based on tags. Click on the tag to see.  
    <Tag
    tag="SvelteKit"
    href={`/tags/sveltekit`}
    shallow={true}
    />
- [Shadcn-Svelte](https://shadcn-svelte.com/) for UI Components ([@huntabyte](https://x.com/huntabyte))
- Light and Dark mode
- different themes for code blocks based on color scheme.
- Individual blog posts and series blog posts (you're reading a series)
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
  - render language icon if title with an extension is provided.
    ````md /title/#rb /example.js/#ul /.js/#yb
    ```js title="example.js"
    console.log('Hello from JS');
    ```
    ````
    this will become
    ```js title="example.js"
    console.log('Hello from JS');
    ```
    - while icons are available for few languages like JS/TS, Py, Svelte, you can add for more languages if you want.
  - [MDsveX](https://mdsvex.pngwn.io/) preprocessor to support markdown files
  - Custom Components
  - use svelte components inside markdown
    - example
    <div class="flex items-center gap-4">
        try changing the theme <span class="ml-3">👉</span>
        <ThemeToggle />
    </div>
  - Table of Contents
  - Giscus Comments (based on Github Discussions)
  - Projects Page
  - Math support using KaTeX
    - examples: `Inline`: $$\nabla \times \mathbf{B} = \mu_0 \left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)$$
    - Block equations (here are my favourite [Maxwells's Equations](https://en.wikipedia.org/wiki/Maxwell%27s_equations#:~:text=Maxwell's%20equations%2C%20or%20Maxwell%E2%80%93Heaviside,classical%20optics%2C%20and%20electric%20circuits.))
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
  - Mobile friendly interface

## How to Use?

In this section we'll dicsuss about how to setup quicky and get started.

### Installation

To install, clone the repo using

```shell
git clone https://github.com/PrabhuKiran8790/prabhukirankonda-portfolio.git
```

install the node modules

```shell
cd prabhukirankonda-portfolio && pnpm i
```

and start editing the following files

- `$lib/config.ts` which has all the links
- `about/about.md` to change the about page
- `$lib/assets` for favicon and image
- `$lib/components/site/hero.svelte` to change the home page
- `$lib/projects.ts` to change your projects.

let's have a look at `$lib/config.ts`

```ts title="lib/config.ts"
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
		name: 'Tags',
		link: '/tags'
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
	repo: 'prabhukirankonda-portfolio',
	branch: 'main'
};
```

To ensure that your local images, located in the `posts/[slug]` folder, can be converted to GitHub URLs, it's essential to include your `githubConfig` in the `config.ts` file. This is particularly useful when you want to include images in your blog posts and prefer to store them in the same folder as your post for better organization.

However, there's a caveat – assets in other than public folder (static), won't be processed by Vite. As a result, these images won't have a definite URL. To obtain the URL, you'll need to incorporate your `githubConfig`, which transforms your local images into GitHub raw URL format. This ensures that when you deploy your application, the images will correctly point to your GitHub repository.

Alternatively, you can place your images directly in the static folder and access them using `/` which points to static folder. example: `/image.png` and you also get Vite Image Optimisation.

> Always use a CDN for better performance.

see the next part on How to write blogs

---
