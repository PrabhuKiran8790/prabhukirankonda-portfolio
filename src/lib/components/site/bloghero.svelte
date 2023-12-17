<script lang="ts">
	import { cn, formatDate } from '$lib/utils';
	import { Calendar, Tag } from 'lucide-svelte';
	import { Badge } from '../ui/badge';
	import * as Accordion from '$lib/components/ui/accordion';
	import type { PageData } from '../../../routes/blog/[slug]/$types';
	import { page } from '$app/stores';
	import Separator from '../ui/separator/separator.svelte';
	import { goto } from '$app/navigation';

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
		<Tag class="w-4 h-4" />
		{#if data.seriesPost}
			{#each data.seriesPost?.tags as tags}
				<Badge class="rounded-md">{tags}</Badge>
			{/each}
		{:else}
			{#each meta.tags as tags}
				<Badge class="rounded-md">{tags}</Badge>
			{/each}
		{/if}
	</div>
	<div>
		<h1 class="px-4 text-2xl font-bold md:text-4xl">
			{meta.title}
		</h1>
	</div>
	<!-- <pre class="container">{JSON.stringify(data.seriesPost?.subPosts, null, 4)}</pre> -->
	{#if data.seriesPost}
		<Accordion.Root
			class="w-full sm:max-w-[70%] px-10 py-4 border-2 rounded-lg space-y-4"
			value={$page.params.slug}
		>
			<div class="flex items-center justify-between">
				<h1>{data.seriesPost?.title}</h1>
				<h1>{meta.order} / {data.seriesPost?.subPosts.length} Parts</h1>
			</div>

			<div class="px-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
				{#each data.seriesPost?.subPosts as post (post.slug)}
					<Accordion.Item value={post.slug} class="border-none no-highlight">
						<Accordion.Trigger
							class={cn(
								'text-base font-normal no-underline',
								$page.params.slug !== post.slug ? 'hover:underline' : 'hover:no-underline'
							)}
						>
							<a href={`/blog/${post.slug}`}>
								<p
									class={cn(
										'font-semibold',
										post.slug === $page.params.slug &&
											'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 via-orange-600'
									)}
								>
									{post.title}
								</p>
							</a>
						</Accordion.Trigger>
						<Accordion.Content>
							<div class="flex flex-col gap-2">
								{#each data.seriesPost?.tags as tags}
									<Badge class="rounded-md w-fit">{tags}</Badge>
								{/each}
								<div>{post.description}</div>
							</div>
						</Accordion.Content>
					</Accordion.Item>
					<Separator />
				{/each}
			</div>
		</Accordion.Root>
	{/if}
</div>
