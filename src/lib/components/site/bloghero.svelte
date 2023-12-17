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
		<div class="w-full sm:max-w-[70%] px-2 relative">
			<Accordion.Root
				class="px-2 md:px-4 py-4 border-2 rounded-lg space-y-4 "
				value={$page.params.slug}
			>
				<div class="flex items-center justify-between">
					<h1 class="font-semibold">{data.seriesPost?.title}</h1>
					<h1>
						{meta.order} / {data.seriesPost?.subPosts.length}
						<span class="hidden md:inline">Parts</span>
					</h1>
				</div>
				<div class="px-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg">
					{#each data.seriesPost?.subPosts as post, index (post.slug)}
						<Accordion.Item value={post.slug} class="border-none no-highlight">
							<Accordion.Trigger
								class={cn(
									'text-base font-normal no-underline border-b border-muted-foreground/50 [&[data-state=open]]:border-none',
									$page.params.slug !== post.slug
										? 'hover:underline underline-offset-4 decoration-primary/50'
										: 'hover:no-underline',
									data.seriesPost?.subPosts.length - 1 === index && 'border-none'
								)}
							>
								<a href={`/blog/${post.slug}`}>
									<p
										class={cn(
											'font-[500]',
											post.slug === $page.params.slug
												? 'text-blue-500 dark:text-green-500'
												: 'text-primary/90'
										)}
									>
										{post.order}. {post.title}
									</p>
								</a>
							</Accordion.Trigger>
							<Accordion.Content
								class={cn(
									'bg-zinc-200 dark:bg-zinc-800/30 -mx-2',
									data.seriesPost?.subPosts.length - 1 === index && 'rounded-b-lg'
								)}
							>
								<div class="flex flex-col gap-2 px-2 mt-2 -mb-2">
									{#each data.seriesPost?.tags as tags}
										<Badge class="rounded-md w-fit border-primary/40" variant="outline"
											>{tags}</Badge
										>
									{/each}
									<div>{post.description}</div>
								</div>
							</Accordion.Content>
						</Accordion.Item>
					{/each}
				</div>
			</Accordion.Root>
			<div class="absolute left-[5%] md:left-[3%] -top-3">
				<Badge class="rounded-md" variant="secondary">Series</Badge>
			</div>
		</div>
	{/if}
</div>
