<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import {
		PUBLIC_CATEGORY,
		PUBLIC_CATEGORY_ID,
		PUBLIC_GITHUB_REPO,
		PUBLIC_GITHUB_REPO_ID,
		PUBLIC_GITHUB_USERNAME
	} from '$env/static/public';
	import { BlogMetatags } from '$lib/components/site';
	import { Giscus } from '$lib/components/site/gicsus_';
	import X from '$lib/components/site/icons/X.svelte';
	import Linkedin from '$lib/components/site/icons/linkedin.svelte';
	import { Toc } from '$lib/components/site/table-of-contents';
	import { Badge } from '$lib/components/ui/badge';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { localToGithubURL } from '$lib/utils';
	import { theme } from '$lib/stores.js';
	import { formatDate } from '$lib/utils';
	import { Calendar, Github, MessageSquare, Share2, Tag } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { Button } from '$lib/components/ui/button/index.js';
	import { githubConfig } from '$lib/config.js';
	export let data;

	let { content, meta } = data;

	let isTocSticky = false;

	function handleScroll() {
		const scrollPosition = window.scrollY;
		isTocSticky = scrollPosition > 200;
	}
	let theme_: string | undefined;
	let element: HTMLElement | null;

	onMount(() => {
		theme_ = localStorage.getItem('mode')?.replace(/^"(.*)"$/, '$1');
		element = document.getElementById('comments');

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	if (!dev && meta.image?.startsWith('/posts')) {
		meta.image = localToGithubURL({ src: meta.image });
	}
</script>

<BlogMetatags {meta} />

<div class="md:container pt-6 md:pt-14 space-y-8">
	<div class="flex flex-col items-center justify-center space-y-4">
		<div class="flex items-center space-x-2 text-muted-foreground">
			<Calendar class="h-4 w-4" />
			<p class="font-semibold text-sm">{formatDate(meta.date, 'long')}</p>
		</div>
		<div>
			<h1 class="text-2xl md:text-4xl font-bold px-4">
				{meta.title}
			</h1>
		</div>
		{#if meta.image}
			<img
				src={meta.image}
				alt={meta.title}
				loading="lazy"
				class="w-full md:w-[90%] h-auto md:rounded-lg max-h-[550px]"
			/>
		{/if}
		<div class="flex gap-2 items-center">
			<Tag class="h-4 w-4" />
			{#each meta.tags as tags}
				<Badge class="rounded-md">{tags}</Badge>
			{/each}
		</div>
	</div>
	<Separator />
	<div class="text-primary max-w-4xl w-full mx-auto p-4 relative">
		<div class="mdsvex mb-20" id="mdsvex">
			<svelte:component this={content} />
		</div>
		{#if isTocSticky}
			<div
				class="hidden md:block sticky bottom-10 w-full z-50"
				in:fly={{ y: 1000 }}
				out:fly={{ y: 1000 }}
			>
				<div class=" flex items-center justify-center">
					<div
						class="flex items-center justify-evenly rounded-l-full rounded-r-full border border-primary/50 bg-muted shadow-sm px-7 py-1 space-x-3"
					>
						<button
							on:click={() => {
								element?.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
							}}
							class="hover:bg-gray-200 dark:hover:bg-zinc-900 p-1 rounded-full h-10 w-10 flex items-center justify-center"
						>
							<MessageSquare class="h-5 w-5" />
						</button>
						<Toc />
						<button
							class="hover:bg-gray-200 dark:hover:bg-zinc-900 p-1 rounded-full h-10 w-10 flex items-center justify-center"
						>
							<DropdownMenu.Root>
								<DropdownMenu.Trigger>
									<Share2 class="h-5 w-5" />
								</DropdownMenu.Trigger>
								<DropdownMenu.Content>
									<DropdownMenu.Group>
										<DropdownMenu.Label>Share</DropdownMenu.Label>
										<DropdownMenu.Separator />
										<DropdownMenu.Item
											class="space-x-3"
											href={`http://www.twitter.com/share?url=${$page.url}`}
										>
											<X />
											<p>Twitter</p>
										</DropdownMenu.Item>
										<DropdownMenu.Item
											class="space-x-2"
											href={`https://www.linkedin.com/sharing/share-offsite/?url=${$page.url}`}
										>
											<Linkedin />
											<p>LinkedIn</p>
										</DropdownMenu.Item>
									</DropdownMenu.Group>
								</DropdownMenu.Content>
							</DropdownMenu.Root>
						</button>
					</div>
				</div>
			</div>
		{/if}
		<Button
			variant="outline"
			target="_blank"
			class="px-2 h-8"
			href={`https://github.com/${githubConfig.username}/${githubConfig.repo}/blob/${githubConfig.branch}/posts/${$page.params.slug}/page.md`}
		>
			<Github class="h-4 w-4 mr-3" />
			<h1>View on GitHub</h1>
		</Button>
	</div>
	<div class="px-3 md:container pb-24" id="comments">
		<Giscus
			repo={`${PUBLIC_GITHUB_USERNAME}/${PUBLIC_GITHUB_REPO}`}
			repoId={PUBLIC_GITHUB_REPO_ID}
			category={PUBLIC_CATEGORY}
			categoryId={PUBLIC_CATEGORY_ID}
			mapping="pathname"
			strict="0"
			reactionsEnabled="1"
			emitMetadata="0"
			inputPosition="top"
			theme={$theme ? $theme : theme_}
			lang="en"
		/>
	</div>
</div>
