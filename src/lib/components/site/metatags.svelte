<script>
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';
</script>

{#if $page.url.pathname == '/'}
	<MetaTags
		title="Home | Prabhu Kiran Konda"
		openGraph={{
			url: $page.url.href,
			title: 'Prabhu Kiran Konda | Home',
			description: 'Personal website and blog',
			images: [
				{
					url: '/og.png',
					width: 800,
					height: 600,
					alt: 'Prabhu Kiran Konda'
				}
			],
			siteName: 'Prabhu Kiran Konda'
		}}
		twitter={{
			handle: '@prabhukirantwt',
			cardType: 'summary_large_image',
			title: 'Prabhu Kiran Konda | Home',
			description: 'Personal website and Blog',
			image: '/og.png',
			imageAlt: 'Prabhu Kiran Konda'
		}}
	/>
{/if}

{#if $page.url.pathname == '/blog'}
	<MetaTags title="Blog | Prabhu Kiran Konda" />
{/if}

{#if $page.url.pathname == '/projects'}
	<MetaTags title="Projects | Prabhu Kiran Konda" />
{/if}

{#if $page.url.pathname == '/about'}
	<MetaTags title="About | Prabhu Kiran Konda" />
{/if}
