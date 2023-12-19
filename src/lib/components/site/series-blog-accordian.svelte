<script lang="ts">
	import { page } from '$app/stores';
	import * as Accordion from '$lib/components/ui/accordion';
	import { cn } from '$lib/utils';
	import { Component } from 'lucide-svelte';
	import type { PageData } from '../../../routes/blog/[slug]/$types';
	import { Badge } from '../ui/badge';

	export let data: PageData;
	$: ({ meta } = data);
</script>

{#if data.seriesPost && data.coverFolder && data.fileName}
	<div class="w-full sm:max-w-[70%] px-2 relative">
		<Accordion.Root
			class="px-2 py-4 space-y-4 border-2 rounded-lg md:px-4 "
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
								<Badge
									class={cn(
										'font-[500] border-muted-foreground h-7 rounded-lg text-sm',
										$page.params.slug !== post.slug && 'border-none'
									)}
									variant="outline"
								>
									{post.order}. {post.title}
								</Badge>
							</a>
						</Accordion.Trigger>
						<Accordion.Content
							class={cn(
								'bg-zinc-200 dark:bg-zinc-800/30 -mx-2',
								data.seriesPost?.subPosts.length - 1 === index && 'rounded-b-lg'
							)}
						>
							<div class="px-2 mt-2 -mb-2 space-y-2">
								<div class="px-2">{post.description}</div>
							</div>
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</div>
		</Accordion.Root>
		<div class="absolute left-[5%] md:left-[3%] -top-2.5">
			<Badge class="border rounded-md border-muted-foreground/30" variant="secondary">
				<Component class="w-4 h-4 mr-2" />
				Series</Badge
			>
		</div>
	</div>
{/if}
