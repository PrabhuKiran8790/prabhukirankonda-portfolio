<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';

	export let href: string;
	export let rel: string | undefined = undefined;

	$: internal = href.startsWith('/') || href.startsWith('#');

	$: rel = !internal ? 'noopener noreferrer' : undefined;
	$: target = !internal ? '_blank' : undefined;
</script>

<a
	class="inline-flex items-center underline gap-1 underline-offset-4 transition-colors"
	{href}
	{target}
>
	<slot />
	{#if !internal}
		<ExternalLink class="w-3 h-3" />
	{/if}
</a>
