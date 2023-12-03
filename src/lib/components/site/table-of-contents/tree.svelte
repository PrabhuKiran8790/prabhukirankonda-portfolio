<script lang="ts">
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
	import { CornerDownRight } from 'lucide-svelte';
	import type { TableOfContents } from '.';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';

	export let tree: TableOfContents = {
		items: []
	};
	export let level = 1;
</script>

<ul class={cn('m-0 list-none', { 'pl-4 w-full': level !== 1 })}>
	{#if tree.items && tree.items.length}
		{#each tree.items as item, i (i)}
			<li class={cn('pt-[4px]')}>
				<DropdownMenu.Item
					class={cn(
						'px-2 cursor-pointer data-[highlighted]:bg-primary/10 py-1',
						item.url === $page.url.hash
							? 'bg-primary/10 text-primary border-l-[2.5px] border-primary'
							: 'text-muted-foreground'
					)}
					href={item.url}
				>
					{#if level > 1}
						<CornerDownRight class={cn('-ml-1', 'mr-2', 'h-4 w-4 hover:text-foreground')} />
					{/if}
					{item.title}
				</DropdownMenu.Item>
				{#if item.items && item.items.length}
					<div class="flex items-center">
						<svelte:self tree={item} level={level + 1} />
					</div>
				{/if}
			</li>
		{/each}
	{/if}
</ul>
