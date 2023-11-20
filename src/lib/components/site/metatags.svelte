<script>
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';
</script>

{#if $page.url.pathname == '/'}
	<MetaTags title="Home | Prabhu Kiran Konda" />
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
