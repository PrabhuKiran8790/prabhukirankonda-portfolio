<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { Calendar, Tag as TagIcon } from 'lucide-svelte';
	import type { PageData } from '../../../routes/blog/[slug]/$types';
	import { SeriesBlogAccordian, Tag, Author } from '.';
	import { tagToSlug } from '$lib/posts';

	export let data: PageData;
	$: ({ meta } = data);
</script>

<div class="flex flex-col items-center justify-center space-y-4">
	{#if meta.image}
		{#if typeof meta.image === 'string'}
			<img
				src={meta.image}
				alt={meta.title}
				loading="lazy"
				class="w-full md:w-[80%] h-auto md:rounded-lg max-h-[550px]"
			/>
		{:else if Array.isArray(meta.image)}
			<img
				src={meta.image[0]}
				alt={meta.title}
				loading="lazy"
				class="w-full md:w-[80%] h-auto md:rounded-lg max-h-[550px] dark:hidden"
			/>
			<img
				src={meta.image[1]}
				alt={meta.title}
				loading="lazy"
				class="w-full md:w-[80%] h-auto md:rounded-lg max-h-[550px] hidden dark:block"
			/>
		{/if}
	{/if}

	<div>
		<h1 class="px-4 text-center text-2xl font-bold md:text-4xl">
			{meta.title}
		</h1>
	</div>
	<div class="flex items-center gap-2">
		<TagIcon class="w-4 h-4" />
		{#if data.seriesPost}
			{#each data.seriesPost?.tags as tag}
				<Tag
					class="dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
					{tag}
					href={`/tags/${tagToSlug(tag)}`}
					shallow={true}
				/>
			{/each}
		{:else}
			{#each meta.tags as tag}
				<Tag
					class="dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600"
					{tag}
					href={`/tags/${tagToSlug(tag)}`}
					shallow={true}
				/>
			{/each}
		{/if}
	</div>

	<div class="flex items-center space-x-2 text-muted-foreground">
		<Calendar class="w-3 h-3 md:h-4 md:w-4" />
		<p class="text-xs font-semibold md:text-sm">{formatDate(meta.date, 'long')}</p>
	</div>

	<Author />
	<SeriesBlogAccordian {data} />
</div>
