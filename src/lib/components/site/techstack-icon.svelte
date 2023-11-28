<script lang="ts">
	import { techStackData, type TechStack } from '$lib/icons';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';

	export let icon: TechStack;
</script>

<Badge variant="outline" class="rounded-md border-primary border gap-2 py-1">
	<p class="text-sm">{icon}</p>
	{#if techStackData[icon]?.customIcon}
		<svelte:component
			this={techStackData[icon]?.customIcon}
			class={cn('h-5 w-5', techStackData[icon]?.className)}
		/>
	{:else}
		<img
			src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${
				techStackData[icon]?.name ? `${techStackData[icon]?.name}` : `${icon.toLocaleLowerCase()}`
			}/${
				techStackData[icon]?.filename
					? techStackData[icon]?.filename
					: `${icon.toLocaleLowerCase()}-original`
			}.svg`}
			alt={icon}
			class={cn('h-5 w-5', techStackData[icon]?.className)}
		/>
	{/if}
</Badge>
