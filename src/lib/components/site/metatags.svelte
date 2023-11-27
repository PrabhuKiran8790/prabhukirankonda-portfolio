<script lang="ts">
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';

	const og = {
		url: $page.url.href,
		images: [
			{
				url: 'https://prabhukirankonda.vercel.app/og.png',
				width: 800,
				height: 600,
				alt: 'Prabhu Kiran Konda'
			}
		],
		siteName: 'Prabhu Kiran Konda',
		twitter: {
			handle: '@prabhukirantwt',
			cardType: 'summary_large_image',
			image: 'https://prabhukirankonda.vercel.app/og.png',
			imageAlt: 'Prabhu Kiran Konda'
		}
	};

	let pageMeta = {};

	type Meta = {
		title: string;
		description: string;
		ogTitle?: string;
		ogDescription?: string;
	};

	// Function to set page-specific meta tags
	function setPageMeta(meta: Meta) {
		pageMeta = {
			title: `${meta.title} | Prabhu Kiran Konda`,
			description: meta.description,
			openGraph: {
				url: og.url,
				title: `Prabhu Kiran Konda | ${meta.ogTitle || meta.title}`,
				description: meta.ogDescription || meta.description,
				images: og.images,
				siteName: og.siteName
			},
			twitter: {
				handle: '@prabhukirantwt',
				cardType: 'summary_large_image',
				title: `Prabhu Kiran Konda | ${meta.ogTitle || meta.title}`,
				description: meta.ogDescription || meta.description,
				image: 'https://prabhukirankonda.vercel.app/og.png',
				imageAlt: 'Prabhu Kiran Konda'
			}
		};
	}
</script>

<!-- Set meta tags based on current page -->
{#if $page.url.pathname == '/'}
	{setPageMeta({
		title: 'Home',
		description: 'Personal website and blog'
	})}
{/if}

{#if $page.url.pathname == '/blog'}
	{setPageMeta({
		title: 'Blog',
		description: 'Blog'
	})}
{/if}

{#if $page.url.pathname == '/projects'}
	{setPageMeta({
		title: 'Projects',
		description: 'Projects'
	})}
{/if}

{#if $page.url.pathname == '/about'}
	{setPageMeta({
		title: 'About',
		description: 'About Me'
	})}
{/if}

<MetaTags {...pageMeta} />
