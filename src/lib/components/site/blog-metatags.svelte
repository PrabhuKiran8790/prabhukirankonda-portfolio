<script lang="ts">
	import { page } from '$app/stores';
	import type { Post } from '$lib/types';
	import { MetaTags } from 'svelte-meta-tags';
	import { siteName } from '$lib/config';

	export let meta: Post;
</script>

<MetaTags
	title={meta.title}
	description={meta.description}
	openGraph={{
		url: $page.url.href,
		title: meta.title,
		description: meta.description,
		images: [
			{
				url: typeof meta.image === 'string' ? meta.image : meta.image[0],
				width: 800,
				height: 600,
				alt: meta.title
			}
		],
		siteName: siteName
	}}
/>
