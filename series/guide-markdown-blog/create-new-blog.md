---
title: Creating a new Blog
description: Let's look at how to create a new Blog (Indivdual & Series)
date: '2023-12-20'
order: 2
image: https://res.cloudinary.com/practicaldev/image/fetch/s--YFzS8yLr--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w9o5387e8s37g7r4i6dy.png
draft: false
---

Welcome to the Part II of the series, Creating a new blog post (individual & series)

## Individual Blogs

to create a new blog, create a folder with the slug you want and create a `page.md` file. the slug will act as the blog url which will be `/blog/[slug]`

here's the tree view of the folder structure

```md /authjs-sveltekit-prisma/#rb /dimensionality-reduction-using-auto-encoders/#yb /getting-started/#rb {2-10} /page.md/#hi
├── about
├── posts
│   ├── authjs-sveltekit-prisma <!-- slug --->
│   │   └── page.md
│   ├── dimensionality-reduction-using-auto-encoders <!-- slug --->
│   │   ├── banner.png
│   │   └── page.md
│   └── getting-started <!-- slug --->
│       ├── PDF_Assistant.png
│       └── page.md
├── series
├── src
├── static 
├── svelte.config.js
├── tailwind.config.js
├── biome.json
├── components.json
├── mdsvex.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.cjs
├── tsconfig.json
├── README.md
└── vite.config.ts
```

> **Note**: Do not add any spaces, separate the name using `-`


## Frontmatter

Frontmatter allows you to specify metadata and options. Included in frontmatter are things like the document or project title, what thumbnail to use for site or content previews, authors that contributed to the work etc,

for this template the frontmatter is

```md
---
title:
description:
date: '2023-11-26'
tags:
  - SvelteKit
  - MDsveX
image: url or a pathname
draft: false
---
```

`tags` is an array so if you want to declare multiple tags just add a new tag below it.

## Writing Series Blogs

To understand Series Blogs, you need to understand the folder structure first.

```md /guide-markdown-blog/#hi {3-8} /config.md/#rb /setup.md/#rb /create-new-blog.md/#rb /page.md/#hi
├── about
├── posts
├── series
│   └── guide-markdown-blog <!-- cover folder (will be a part of the slug) --->
│       ├── config.md <!-- Blog post --->
│       ├── create-new-blog.md <!-- Blog post --->
│       ├── page.md <!-- not a part of the post but holds information about the series, cover image for the series, tags etc. --->
│       └── setup.md <!-- Blog post --->
├── src
├── static 
├── svelte.config.js
├── tailwind.config.js
├── biome.json
├── components.json
├── mdsvex.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.cjs
├── tsconfig.json
├── README.md
└── vite.config.ts
```

## Frontmatter (for series)

for `page.md`

```md
---
title: Guide on how to use this blog template
description: A guide on how to use this sveltekit + markdown blog.
date: '2023-12-20'
tags:
  - SvelteKit
  - MDsveX
image: https://res.cloudinary.com/practicaldev/image/fetch/s--YFzS8yLr--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w9o5387e8s37g7r4i6dy.png
draft: false
---
```
this is same as the one for individual blog posts and for actual posts in the series, the frontmatter is little different. 

```md
---
title: Creating a new Blog
description: Let's look at how to create a new Blog (Indivdual & Series)
date: '2023-12-20'
order: 2
image: https://res.cloudinary.com/practicaldev/image/fetch/s--YFzS8yLr--/c_imagga_scale,f_auto,fl_progressive,h_720,q_auto,w_1280/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w9o5387e8s37g7r4i6dy.png
draft: false
---
```

We have a new property called `order`, which indicates the order of the particular post in that series. Additionally, `image` and `tags` are completely optional. If you do not specify them, the values from the cover folder (`page.md`) are used. However, if you do specify them, the specified values are used instead. When it comes to tags, if you specify them, the tags from the specific post are combined with the tags declared in `page.md`. This is particularly useful when you're writing a long series and each post is on a different topic. For example, if you're writing a Machine Learning Series, at some point, you're writing a post on Clustering algorithms, so that specific post should have its own tag.

for series blogs, the slug will be `cover folder` + `a unique identifier` + `name of the .md file`

## Code Blocks

This blog uses [rehype-pretty-code](https://rehype-pretty-code.netlify.app/) and [shiki](https://shiki.matsu.io/) for syntax highlighting with two different themes for light and dark mode. To configure code blocks to your style, take a look at `mdsvex.config.js`, `pre.svelte` and `markdown.postcss` files.

You can create fenced code blocks by placing triple backticks <code>```</code> before and after the code block. Place a blank line before and after code blocks to make the raw formatting easier to read.

```js
console.log("Hello")
```

To display triple backticks in a fenced code block, wrap them inside quadruple backticks.
````py
```py
print("Hello from Python 🐍")
```
````

### Adding Title

if you provide a title with an extension, the code block will look like

```ts title="hello.ts"
console.log("Hello from TS")
```
for rendering icons, it grabs the extension and maps it to the icon for that language. Again, you can totally change this behaviour in `pre.svelte` which is a custom component.

### Inline Syntax Highlighting

you can also do inline syntax highlighting. To use that

```
`System.out.println("This is a example of Inline Syntax Highlighting"){:java}`
```

this will become

`System.out.println("This is a example of Inline Syntax Highlighting"){:java}`

### Word Highlighting

you can highlight individual words in your code with different colors.

````md
```py /fibonacci/1-2#rb {2-3}
def fibonacci(n):
    if n <= 1: # base case
        return n
    else:
return fibonacci(n - 2) + fibonacci(n - 3) # [!code --]
return fibonacci(n - 1) + fibonacci(n - 2) # [!code ++]
```
````

this will become 

```py /fibonacci/1-2#rb {2-3}
def fibonacci(n):
    if n <= 1: # base case
        return n
    else:
return fibonacci(n - 2) + fibonacci(n - 3) # [!code --]
return fibonacci(n - 1) + fibonacci(n - 2) # [!code ++]
```

for other languages, like js or ts

````md
```js title="code-diff.js"
export function foo() {
  console.log('hewwo') // [!code --] // this should be hello
  console.log('hello') // [!code ++]
}
```
````

this will become

```js title="code-diff.js"
export function foo() {
  console.log('hewwo') // [!code --] // this should be hello
  console.log('hello') // [!code ++]
}
```

## Math Blocks

for rendering math equations, i gave a detailed explanation [here](/blog/getting-started#math-blocks). Earlier it wasn't possible to add inline equations without using an external component but I created a plugin that allows you to insert inline math equations.

here's the plugin
```js showLineNumbers {3}
const katex_inline = () => (tree) => {
	visit(tree, 'text', (node, index, parent) => {
		const regex = /\$\$(.*?)\$\$/g;
		let match;

		while ((match = regex.exec(node.value)) !== null) {
			const equation = match[1].trim();

			// Replace double backslashes with single backslashes
			const cleanedEquation = equation.replace(/\\\\/g, '\\');

			const str = katex.renderToString(cleanedEquation, {
				throwOnError: true,
				errorColor: '#cc0000',
				strict: 'warn',
				output: 'htmlAndMathml',
				trust: false,
				macros: { '\\f': '#1f(#2)' }
			});

			// Escape the HTML for Svelte
			const escapedHTML = escapeSvelte(str);

			// Replace the matched portion with the escaped HTML
			const before = node.value.slice(0, match.index);
			const after = node.value.slice(match.index + match[0].length);
			const renderedEquation = '<span class="text-base">{@html `' + escapedHTML + '`}</span>';

			// Create a new 'raw' node with the rendered equation
			const rawNode = {
				type: 'raw',
				value: renderedEquation
			};

			// Insert the 'raw' node into the parent's children array
			parent.children.splice(
				index,
				1,
				...[{ type: 'text', value: before }, rawNode, { type: 'text', value: after }]
			);
		}
	});
};
```

to write inline equations use `$$ $$` and wrap your KaTeX inside.

```md
$$(a+b)^2 = a^2 + b^2 + 2ab$$
```
this becomes $$(a+b)^2 = a^2 + b^2 + 2ab$$

for block equations
 ````md /math/1#rb title="math.md"
```math
\\nabla \\times \\mathbf{B} = \\mu_0 \\left(\\mathbf{J} + \\varepsilon_0 \\frac{\\partial \\mathbf{E}}{\\partial t}\\right)
```
````

this becomes

```math
\nabla \times \mathbf{B} = \mu_0 \left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)
```

in the next part, we'll look at other configurations.

---
 
