<script lang="ts">
	import { techStackData, type TechStack } from '$lib/icons';
	import { Badge } from '$lib/components/ui/badge';
	import { cn } from '$lib/utils';

	export let icon: TechStack;
</script>

<Badge variant="outline" class="py-1 border rounded-md border-primary gap-2">
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
