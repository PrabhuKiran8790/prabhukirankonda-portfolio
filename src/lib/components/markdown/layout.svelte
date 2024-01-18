<script context="module">
	import '../markdown/markdown.postcss';
	import {
		pre,
		a,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		hr,
		img,
		p,
		li,
		ol,
		ul,
		blockquote,
		table,
		th,
		tr,
		td,
		thead,
		tfoot,
		tbody
	} from '$lib/components/markdown';

	export {
		pre,
		a,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		hr,
		img,
		p,
		li,
		ol,
		ul,
		blockquote,
		table,
		th,
		tr,
		td,
		thead,
		tfoot,
		tbody
	};
</script>

<script>
	// these props are what we expect in frontmatter
	// typescript cannot be used in this file.
	export let title;
	export let date;
	export let description;
	export let tags;
	export let image;
	export let draft;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css"
		integrity="sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV"
		crossorigin="anonymous"
	/>
</svelte:head>

<slot {title} {date} {description} {tags} {image} {draft} />
