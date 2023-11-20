<script lang="ts">
	import type { Post } from '$lib/types';
	import { Masonry } from '.';
	import Blogcard from './blogcard.svelte';

	export let posts: Post[];
</script>

<!-- <div class="columns-1 md:columns-3 max-w-7xl mx-auto gap-x-[5px]">
	{#each posts as post}
		<div class="inline-block w-full mb-0.5">
			<div class="p-1">
				<Blogcard {post} />
			</div>
		</div>
	{/each}
</div> -->
<div class="max-w-7xl md:mx-auto gap-x-[5px] -mx-2">
	<Masonry gridGap={'0.75rem'} items={posts} stretchFirst={false} reset>
		{#each posts as post}
			<div class="p-1">
				<Blogcard {post} />
			</div>
		{/each}
	</Masonry>
</div>
