<script lang="ts">
	import type { Post } from '$lib/types';
	import { Badge } from '$lib/components/ui/badge';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Command from '$lib/components/ui/command';
	import { cn, formatDate } from '$lib/utils';
	import { Command as CommandIcon, Search } from 'lucide-svelte';
	import { searchOpen } from '$lib/stores';

	export let posts: Post[];
	let latestPost = posts[0];

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
		<Search class="h-4 w-4 mr-2" />
		Search blogs</span
	>
	<kbd
		class="pointer-events-none absolute right-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex"
	>
		<span class="text-xs">
			<div class="flex items-center">
				<CommandIcon class="h-3 w-3" />
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
	<Command.Input placeholder="Type to search" />
	<Command.List>
		<Command.Empty>No results found.</Command.Empty>
		<Command.Group heading="Latest Blog">
			<Command.Item
				onSelect={() => {
					runCommand(() => {
						latestPost.slug && goto(`/blog/${latestPost.slug}`);
					});
				}}
			>
				<div class="flex flex-col gap-1 w-full">
					<div class="flex items-center justify-between w-full">
						<div>
							<h1>{latestPost.title}</h1>
						</div>
						<div>
							<h1 class="text-xs text-muted-foreground">{formatDate(latestPost.date)}</h1>
						</div>
					</div>
					<div class="flex items-center gap-2">
						{#each latestPost.tags as tags}
							<Badge class="rounded-md bg-gray-300 dark:bg-zinc-600" variant="outline">{tags}</Badge
							>
						{/each}
					</div>
				</div>
			</Command.Item>
		</Command.Group>
		<Command.Group heading="All blogs">
			{#each posts as post}
				<Command.Item
					onSelect={() => {
						runCommand(() => {
							post.slug && goto(`/blog/${post.slug}`);
						});
					}}
				>
					<div class="flex flex-col gap-1 w-full">
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
								<Badge class="rounded-md bg-gray-300 dark:bg-zinc-600" variant="outline"
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
