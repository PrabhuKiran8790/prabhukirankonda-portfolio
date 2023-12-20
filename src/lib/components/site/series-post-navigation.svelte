<script lang="ts">
	import { page } from '$app/stores';
	import type { Series } from '$lib/types';
	import { cn } from '$lib/utils';
	import { buttonVariants } from '../ui/button';

	export let subPosts: Series[] | undefined;

	// find the index of current slug
	$: currentIndex = subPosts?.findIndex((post) => {
		if (post.slug === $page.params.slug) {
			return post.order;
		}
	});

	// check if there is a next post
	$: nextPost = subPosts![currentIndex! + 1];

	// check if there is a previous post
	$: previousPost = subPosts![currentIndex! - 1];
</script>

<div class="flex items-center justify-between">
	<div>
		{#if previousPost}
			<a href={`/blog/${previousPost.slug}`} class={cn(buttonVariants({ variant: 'secondary' }))}
				><span class="font-bold">Previous</span>: {previousPost.title}</a
			>
		{/if}
	</div>
	<div>
		{#if nextPost}
			<a href={`/blog/${nextPost.slug}`} class={cn(buttonVariants({ variant: 'secondary' }))}
				><span class="font-bold">Next</span>: {nextPost.title}</a
			>
		{/if}
	</div>
</div>
