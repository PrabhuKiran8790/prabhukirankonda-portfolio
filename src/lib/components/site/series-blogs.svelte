<script lang="ts">
	import type { SeriesPost } from '$lib/types';
	import { Masonry, Blogcard } from '.';

	export let seriesPosts: SeriesPost[];
</script>

<div class="flex flex-col items-start md:items-center md:container space-y-5">
	<div class="flex flex-col items-start space-y-1 md:items-center">
		<div>
			<h1
				class="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-3xl"
			>
				Blog Series
			</h1>
		</div>
		<p class="text-muted-foreground">A series of blogs</p>
	</div>

	<div class="space-y-3">
		<div class="max-w-7xl md:mx-auto gap-x-[5px] -mx-2">
			<Masonry gridGap={'0.75rem'} items={seriesPosts} stretchFirst={false} reset>
				{#each seriesPosts as post}
					<div class="p-1">
						<Blogcard {post} />
					</div>
				{/each}
			</Masonry>
		</div>
	</div>
</div>
