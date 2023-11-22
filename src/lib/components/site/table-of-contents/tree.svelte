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

<ul class={cn('m-0 list-none', { 'pl-1': level !== 1 })}>
	{#if tree.items && tree.items.length}
		{#each tree.items as item, i (i)}
			<li class={cn('mt-0 pt-[2px]')}>
				<a
					href={item.url}
					class={cn(
						'inline-block no-underline transition-colors hover:text-foreground rounded w-full',
						item.url === $page.url.hash
							? 'font-medium text-foreground bg-primary/20 hover:bg-primary/20'
							: 'text-muted-foreground'
					)}
				>
					<DropdownMenu.Item class="px-2 cursor-pointer">{item.title}</DropdownMenu.Item>
				</a>
				{#if item.items && item.items.length}
					<div class="flex items-center">
						<CornerDownRight
							class={cn(
								'ml-1',
								item.url === $page.url.hash
									? 'font-medium text-foreground'
									: 'text-muted-foreground'
							)}
						/>
						<svelte:self tree={item} level={level + 1} />
					</div>
				{/if}
			</li>
		{/each}
	{/if}
</ul>
