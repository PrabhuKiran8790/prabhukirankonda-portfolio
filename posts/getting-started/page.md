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
        try changing the theme  👉
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