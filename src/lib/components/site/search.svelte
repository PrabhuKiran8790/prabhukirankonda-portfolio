<script lang="ts">
	import { CommandIcon, Search } from 'lucide-svelte';

	import * as Command from '$lib/components/ui/command';
	import { searchOpen } from '$lib/stores';

	import { goto } from '$app/navigation';
	import type { Post } from '$lib/types';
	import { cn, formatDate } from '$lib/utils';
	import { onMount } from 'svelte';
	import { Badge } from '../ui/badge';
	import { Button } from '../ui/button';

	export let posts: Post[];

	onMount(() => {
		function handleKeydown(e: KeyboardEvent) {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				$searchOpen = !$searchOpen;
			}
		}
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	function runCommand(cmd: () => void) {
		$searchOpen = false;
		cmd();
	}
</script>

<Button
	variant="outline"
	class={cn(
		'relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-96 cursor-text'
	)}
	on:click={() => ($searchOpen = true)}
	{...$$restProps}
>
	<span class="inline-flex items-center">
		<Search class="w-4 h-4 mr-2" />
		Search blogs</span
	>
	<kbd
		class="pointer-events-none absolute right-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
	>
		<span class="text-xs">
			<div class="flex items-center">
				<CommandIcon class="w-3 h-3" />
				<h1>/ctrl K</h1>
			</div>
		</span>
	</kbd>
</Button>

<Command.Dialog
	open={$searchOpen}
	onOpenChange={() => {
		$searchOpen = !$searchOpen;
	}}
>
	<Command.Input placeholder="Type a command or search..." />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="All blogs">
			{#each posts as post}
				<Command.Item
					onSelect={() => {
						runCommand(() => {
							post.slug && goto(`/blog/${post.slug}`);
						});
					}}
				>
					<div class="flex flex-col w-full gap-1">
						<div class="flex items-center justify-between w-full">
							<div>
								<h1>{post.title}</h1>
							</div>
							<div>
								<h1 class="text-xs text-muted-foreground">{formatDate(post.date)}</h1>
							</div>
						</div>
						<div class="flex items-center gap-2">
							{#each post.tags as tags}
								<Badge class="bg-gray-300 rounded-md dark:bg-zinc-600" variant="outline"
									>{tags}</Badge
								>
							{/each}
						</div>
					</div>
				</Command.Item>
			{/each}
		</Command.Group>
	</Command.List>
</Command.Dialog>
