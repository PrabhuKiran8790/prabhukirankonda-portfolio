<script lang="ts">
	import type { SeriesPost } from '$lib/types';
	import { Masonry, Blogcard } from '.';

	export let seriesPosts: SeriesPost[];
</script>

<div class="max-w-7xl md:mx-auto gap-x-[5px]">
	<Masonry gridGap={'0.75rem'} items={seriesPosts} stretchFirst={false} reset>
		{#each seriesPosts as post}
			<Blogcard {post} shallow={true} />
		{/each}
	</Masonry>
</div>
