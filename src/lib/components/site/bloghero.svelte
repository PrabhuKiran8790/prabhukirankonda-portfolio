<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Calendar, Tag as TagIcon } from 'lucide-svelte';
	import type { PageData } from '../../../routes/blog/[slug]/$types';
	import { SeriesBlogAccordian, Tag } from '.';
	import { tagToSlug } from '$lib/posts';

	export let data: PageData;
	$: ({ meta } = data);
</script>

<div class="flex flex-col items-center justify-center space-y-4">
	<div class="flex items-center space-x-2 text-muted-foreground">
		<Calendar class="w-3 h-3 md:h-4 md:w-4" />
		<p class="text-xs font-semibold md:text-sm">{formatDate(meta.date, 'long')}</p>
	</div>
	{#if meta.image}
		<img
			src={meta.image}
			alt={meta.title}
			loading="lazy"
			class="w-full md:w-[80%] h-auto md:rounded-lg max-h-[550px]"
		/>
	{/if}
	<div class="flex items-center gap-2">
		<TagIcon class="w-4 h-4" />
		{#if data.seriesPost}
			{#each data.seriesPost?.tags as tag}
				<Tag
					class="dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
					{tag}
					href={`/tags/${tagToSlug(tag)}`}
				/>
			{/each}
		{:else}
			{#each meta.tags as tag}
				<Tag
					class="dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600"
					{tag}
					href={`/tags/${tag.replace(/ /g, '-').toLowerCase()}`}
				/>
			{/each}
		{/if}
	</div>
	<div>
		<h1 class="px-4 text-2xl font-bold md:text-4xl">
			{meta.title}
		</h1>
	</div>
	<SeriesBlogAccordian {data} />
</div>
