<script lang="ts">
	import { cn } from '$lib/utils';
	import { Badge } from '../ui/badge';
	export let tag: string;
	export let count: number = 0;
	export let href: string = '';

	let hover = false;
	let className: string | undefined | null = undefined;
	export { className as class };
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
	<Badge class={cn('rounded', className)} {href}>{tag}</Badge>
{/if}
