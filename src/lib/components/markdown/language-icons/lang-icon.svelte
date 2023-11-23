<script lang="ts">
	import { cn } from '$lib/utils';
	import { extensionMappings } from './getLangIcons';
	export let extension: string;

	let language = extensionMappings[extension].name;
	let filename = extensionMappings[extension].filename;
	let className = extensionMappings[extension].className;
</script>

{#if extensionMappings[extension].customIcon}
	<svelte:component
		this={extensionMappings[extension].customIcon}
		class={cn('h-4, w-4', className)}
	/>
{:else}
	<img
		src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${language}/${filename}.svg`}
		alt={language}
		class={cn('h-4, w-4', className)}
	/>
{/if}
