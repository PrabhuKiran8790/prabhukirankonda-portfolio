<script lang="ts">
	import Icons from './icons.svelte';
	// import { Badge } from '$lib/components/ui/badge';
	// import { cn } from '$lib/utils';
	import { TechStackIcon } from '.';
	import { techStackArray } from '$lib/types';
</script>

<!-- <div class="flex items-center gap-3 my-4 flex-wrap">
	{#each techStackIcons as { name, icon, className, type }}
		<Badge variant="outline" class="rounded-md border-primary border gap-2 py-1">
			<p class="text-sm">{name}</p>
			{#if type === 'external'}
				<svelte:component this={icon} class={cn(className)} />
			{:else if typeof icon === 'string'}
				<svelte:component this={Icons} {icon} class={cn('h-5 w-5', className)} />
			{/if}
		</Badge>
	{/each}
</div> -->

<div class="flex items-center gap-3 my-4 flex-wrap">
	{#each techStackArray as icon}
		<TechStackIcon {icon} />
	{/each}
</div>
