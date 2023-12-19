<script lang="ts">
	import { tagToSlug } from '$lib/posts';
	import type { Post, Series } from '$lib/types';
	import { cn, formatDate } from '$lib/utils';
	import { ArrowRight, Calendar } from 'lucide-svelte';
	import { Button } from '../ui/button';
	import { Tag } from '.';

	export let post: Post | Series;
	let className: string = 'md:max-w-md';
	export { className as class };
	export let keepImage: boolean = true;
	export let tagClass: string = '';
	export let shallow: boolean = false;
	let hover: boolean = false;

	function isSeries(post: Post | Series): post is Series {
		return (post as Series).order !== undefined;
	}
</script>

<a
	class={cn(
		'block pb-0 border-2 rounded-xl hover:border-primary no-highlight relative mb-2',
		className
	)}
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
	href={`/blog/${post.slug}`}
	data-sveltekit-preload-data
>
	{#if keepImage}
		{#if post.image}
			<div class="p-2">
				<img src={post.image} alt={post.title} class="rounded-md w-fit" loading="lazy" />
			</div>
		{/if}
	{/if}
	<div class="flex flex-col justify-between h-full gap-4 p-2.5 pt-0">
		<div class={cn('flex flex-col justify-between gap-2', keepImage ? '' : 'pt-2')}>
			<h1 class={`text-lg font-semibold ${hover ? 'underline underline-offset-4' : ''}`}>
				{post.title}
			</h1>
			<div class="flex gap-2 flex-wrap">
				{#each post.tags as tag}
					<Tag {tag} href={`/tags/${tagToSlug(tag)}`} class={tagClass} {shallow} />
				{/each}
			</div>
		</div>
		<div>
			<p class="text-muted-foreground">{post.description}</p>
		</div>

		<div>
			<div class="flex items-center justify-between">
				<div class="flex items-center text-sm gap-2">
					<Calendar class="w-4 h-4" />
					<h1>{formatDate(post.date)}</h1>
				</div>
				<div>
					<Button variant="ghost" size="sm" class="px-3 py-0" href={`/blog/${post.slug}`}
						>read more
						<ArrowRight class={`h-4 w-4 ml-2`} /></Button
					>
				</div>
			</div>
		</div>
	</div>
	{#if isSeries(post)}
		<div class="absolute -top-3 right-4 px-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg">
			<p class="text-black dark:text-white">Series</p>
		</div>
	{/if}
</a>
