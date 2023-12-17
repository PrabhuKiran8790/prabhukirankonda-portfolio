<script lang="ts">
	import { page } from '$app/stores';
	import * as Accordion from '$lib/components/ui/accordion';
	import { cn } from '$lib/utils';
	import { Badge } from '../ui/badge';
	import type { PageData } from '../../../routes/blog/[slug]/$types';

	export let data: PageData;
	$: ({ meta } = data);
</script>

{#if data.seriesPost && data.coverFolder && data.fileName}
	<div class="w-full sm:max-w-[70%] px-2 relative">
		<Accordion.Root
			class="px-2 py-4 border-2 rounded-lg md:px-4 space-y-4 "
			value={$page.params.slug}
		>
			<div class="flex items-center justify-between">
				<h1 class="font-semibold">{data.seriesPost?.title}</h1>
				<h1>
					{meta.order} / {data.seriesPost?.subPosts.length}
					<span class="hidden md:inline">Parts</span>
				</h1>
			</div>
			<div class="px-2 rounded-lg bg-zinc-100 dark:bg-zinc-900">
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
							<div class="flex flex-col px-2 mt-2 -mb-2 gap-2">
								{#each data.seriesPost?.tags as tags}
									<Badge class="rounded-md w-fit border-primary/40" variant="outline">{tags}</Badge>
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
