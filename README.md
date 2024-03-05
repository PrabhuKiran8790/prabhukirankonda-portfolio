# SvelteKit Personal Wesbite + Blog

Welcome to my personal website built with SvelteKit, Tailwind CSS, Shadcn-Svelte for UI components, and MDsveX for rendering Markdown files.

## Features

- [SvelteKit](https://kit.svelte.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Shadcn-Svelte](https://www.shadcn-svelte.com/) for UI components
- [MDsveX](https://mdsvex.pngwn.io) preprocessor
- Light and Dark mode
  - also for code block with two different themes for light and dark mode
- Mobile friendly interface
- build time syntax highlighting using [shiki](https://shiki.matsu.io/) and [rehype pretty code](https://rehype-pretty-code.netlify.app/)
  - code blocks has several features like:
    - inline syntax highlighting
    - line numbers
    - line highlight
    - code diff
    - icons based on the code language shown in title bar of the code block
    - individual word highlighting
    - toast notifications for copy feedback
- support for math using KaTeX.

  - inline math using `$$<matheq>$$`
  - block math equations
    ````
    ```math
    \nabla \times \mathbf{B} = \mu_0 \left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)
    ```
    ````
    $$\nabla \times \mathbf{B} = \mu_0 \left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)$$

- Custom components
- Table of contents
- Dedicated blogs page with masonry layout
- Projects page to showcase your projects
- About page
- Giscus comments (based on GitHub discussions)
- SEO, OG and other metatags for different pages, blogs.

## Built using

- **SvelteKit**: framework for building apps with Svelte.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Shadcn-Svelte**: Accessible and customizable components that you can copy and paste into your apps.
- **MDsveX**: A Markdown preprocessor for Svelte.

## Getting Started

**Clone the repository:**

```bash
git clone https://github.com/your-username/your-personal-website.git
cd your-personal-website
```

see the blog to get started quickly. [Blog Link](https://prabhukirankonda.vercel.app/blog/getting-started)
