<script lang="ts">
	import { page } from '$app/stores';
	import { siteName, siteOwner, siteTitle } from '$lib/config';
	import { MetaTags } from 'svelte-meta-tags';

	const og = {
		images: [
			{
				url: 'https://prabhukirankonda.vercel.app/og.png',
				width: 800,
				height: 600,
				alt: {siteName}
			}
		],
		siteName: {siteName},
		twitter: {
			handle: '@prabhukirantwt',
			cardType: 'summary_large_image',
			image: 'https://prabhukirankonda.vercel.app/og.png',
			imageAlt: {siteOwner}
		}
	};

	let pageMeta = {};

	type Meta = {
		title: string;
		description: string;
		ogTitle?: string;
		ogDescription?: string;
	};

	function setPageMeta(meta: Meta) {
		pageMeta = {
			title: `${siteTitle} | ${meta.title}`,
			description: meta.description,
			openGraph: {
				url: $page.url,
				title: `${siteTitle} | ${meta.ogTitle || meta.title}`,
				description: meta.ogDescription || meta.description,
				images: og.images,
				siteName: og.siteName
			},
			twitter: {
				handle: '@prabhukirantwt',
				cardType: 'summary_large_image',
				title: `${siteTitle} | ${meta.ogTitle || meta.title}`,
				description: meta.ogDescription || meta.description,
				image: 'https://prabhukirankonda.vercel.app/og.png',
				imageAlt: {siteOwner}
			}
		};
	}

	$: {
		if ($page.url.pathname == '/') {
			setPageMeta({
				title: 'Home',
				description: 'Personal website and blog'
			});
		} else if ($page.url.pathname == '/blog') {
			setPageMeta({
				title: 'Blog',
				description: 'Blog'
			});
		} else if ($page.url.pathname == '/projects') {
			setPageMeta({
				title: 'Projects',
				description: 'Projects'
			});
		} else if ($page.url.pathname == '/about') {
			setPageMeta({
				title: 'About',
				description: 'About Me'
			});
		}
	}
</script>

<MetaTags {...pageMeta} />
