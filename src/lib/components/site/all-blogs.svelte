<script lang="ts">
	import type { Post } from '$lib/types';
	import { Masonry } from '.';
	import Blogcard from './blogcard.svelte';

	export let posts: Post[];
</script>

<div class="max-w-7xl md:mx-auto gap-x-[5px]">
	<Masonry gridGap={'0.75rem'} items={posts} stretchFirst={false} reset>
		{#each posts as post}
			<Blogcard {post} shallow={true} />
		{/each}
	</Masonry>
	<!-- <div class="flex flex-wrap gap-4 p-3">
		{#each posts as post}
			<div class="max-w-sm">
				<Blogcard {post} shallow={true} />
			</div>
		{/each}
	</div> -->
</div>
