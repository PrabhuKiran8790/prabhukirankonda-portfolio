<script lang="ts">
	import { goto, preloadData, pushState } from '$app/navigation';
	import { cn } from '$lib/utils';
	import { Badge } from '../ui/badge';
	import * as Dialog from '$lib/components/ui/dialog';
	import TagsPage from '../../../routes/tags/[tag]/+page.svelte';
	import { page } from '$app/stores';

	export let tag: string;
	export let count: number = 0;
	export let href: string = '';

	let hover = false;
	let className: string | undefined | null = undefined;
	export { className as class };
	export let shallow: boolean = false;

	let showModal__: boolean = false;

	async function showModal(e: MouseEvent) {
		e.preventDefault();
		const { href } = e.currentTarget as HTMLAnchorElement;

		if (!shallow) {
			goto(href);
			return;
		}
		const result = await preloadData(href);
		if (result.type === 'loaded' && result.status === 200) {
			pushState(href, {
				tagsData: result.data
			});
			showModal__ = true;
		} else {
			goto(href);
		}
	}
</script>

{#if count > 0}
	<a
		{href}
		class="border border-muted-foreground/50 hover:border-primary rounded-md flex"
		on:mouseenter={() => (hover = true)}
		on:mouseleave={() => (hover = false)}
	>
		<h1 class="px-2 text-base font-medium text-primary">
			{tag}
		</h1>
		<p
			class={cn(
				'bg-zinc-200 dark:bg-zinc-700/80 rounded-r-[5px] px-2 border-l border-muted-foreground/50',
				hover && 'border-primary'
			)}
		>
			{count}
		</p>
	</a>
{:else}
	<Badge class={cn('rounded', className)} {href} on:click={showModal}>{tag}</Badge>
{/if}

<Dialog.Root
	open={showModal__}
	onOpenChange={() => {
		history.back();
		showModal__ = false;
	}}
>
	<Dialog.Content class="max-w-7xl h-[80vh]">
		<div class="w-full">
			{#if $page.state.tagsData}
				<TagsPage data={$page.state.tagsData} />
			{/if}
		</div>
	</Dialog.Content>
</Dialog.Root>
