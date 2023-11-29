<script lang="ts">
	import type { Post } from '$lib/types';
	import { Masonry } from '.';
	import Blogcard from './blogcard.svelte';

	export let posts: Post[];
</script>

<div class="max-w-7xl md:mx-auto gap-x-[5px] -mx-2">
	<Masonry gridGap={'0.75rem'} items={posts} stretchFirst={false} reset>
		{#each posts as post}
			<div class="p-1">
				<Blogcard {post} />
			</div>
		{/each}
	</Masonry>
</div>
