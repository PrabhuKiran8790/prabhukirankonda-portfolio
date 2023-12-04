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
	import { BlogMetatags, SVGDoodle } from '$lib/components/site';
	import { Giscus } from '$lib/components/site/gicsus_';
	import X from '$lib/components/site/icons/X.svelte';
	import Linkedin from '$lib/components/site/icons/linkedin.svelte';
	import { Toc } from '$lib/components/site/table-of-contents';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { githubConfig } from '$lib/config.js';
	import { theme } from '$lib/stores.js';
	import { formatDate, localToGithubURL } from '$lib/utils';
	import { Calendar, Github, MessageSquare, Share2, Tag } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	export let data;

	let { content, meta } = data;

	let isTocSticky = false;

	let theme_: string | undefined;
	let element: HTMLElement | null;

	onMount(() => {
		theme_ = localStorage.getItem('mode')?.replace(/^"(.*)"$/, '$1');
		element = document.getElementById('comments');

		const scrollProgress = document.getElementById('scroll-progress') as HTMLDivElement;
		const commentsSection = document.getElementById('comments') as HTMLDivElement;

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			isTocSticky = scrollPosition > 200;
			const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			const height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight -
				(commentsSection.offsetHeight || 0);
			const scrolled = (winScroll / height) * 100;
			scrollProgress.style.width = `${scrolled}%`;
		};

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

<div
	class="fixed top-0 md:top-[64px] z-[50] w-[0%] h-0.5 bg-muted-foreground"
	id="scroll-progress"
/>

<div class="pt-6 md:container md:pt-14 space-y-8">
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
				class="w-full md:w-[90%] h-auto md:rounded-lg max-h-[550px]"
			/>
		{/if}
		<div class="flex items-center gap-2">
			<Tag class="w-4 h-4" />
			{#each meta.tags as tags}
				<Badge class="rounded-md">{tags}</Badge>
			{/each}
		</div>
		<div>
			<h1 class="px-4 text-2xl font-bold md:text-4xl">
				{meta.title}
			</h1>
		</div>
	</div>
	<Separator />
	<div class="relative w-full max-w-4xl p-4 mx-auto text-primary">
		<div class="mb-20 mdsvex" id="mdsvex">
			<svelte:component this={content} />
		</div>
		{#if isTocSticky}
			<div
				class="sticky z-50 hidden w-full md:block bottom-10"
				in:fly={{ y: 1000 }}
				out:fly={{ y: 1000 }}
			>
				<div class="flex items-center justify-center">
					<div
						class="flex items-center py-1 border rounded-l-full rounded-r-full justify-evenly border-primary/50 bg-muted shadow-sm px-7 space-x-3"
					>
						<!-- Comments -->
						<Tooltip.Root openDelay={100}>
							<Tooltip.Trigger>
								<button
									on:click={() => {
										element?.scrollIntoView({
											behavior: 'smooth',
											block: 'end',
											inline: 'nearest'
										});
									}}
									class="flex items-center justify-center w-10 h-10 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-900"
								>
									<MessageSquare class="w-5 h-5" />
								</button>
							</Tooltip.Trigger>
							<Tooltip.Content class="border border-primary">
								<p>Comments</p>
							</Tooltip.Content>
						</Tooltip.Root>
						<!-- Table of Contents -->
						<Tooltip.Root openDelay={0}>
							<Tooltip.Trigger>
								<Toc />
							</Tooltip.Trigger>
							<Tooltip.Content class="border border-primary">
								<p>Table of Contents</p>
							</Tooltip.Content>
						</Tooltip.Root>
						<!-- Share -->
						<Tooltip.Root openDelay={0}>
							<Tooltip.Trigger>
								<button
									class="flex items-center justify-center w-10 h-10 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-zinc-900"
								>
									<DropdownMenu.Root>
										<DropdownMenu.Trigger>
											<Share2 class="w-5 h-5" />
										</DropdownMenu.Trigger>
										<DropdownMenu.Content>
											<DropdownMenu.Group>
												<DropdownMenu.Label>Share</DropdownMenu.Label>
												<DropdownMenu.Separator />
												<DropdownMenu.Item
													class="space-x-2"
													href={`http://www.twitter.com/share?url=${$page.url}`}
												>
													<X />
													<p>Twitter</p>
												</DropdownMenu.Item>
												<DropdownMenu.Item
													class="space-x-2"
													href={`https://www.linkedin.com/sharing/share-offsite/?url=${$page.url}`}
												>
													<Linkedin class="-ml-1" />
													<p>LinkedIn</p>
												</DropdownMenu.Item>
											</DropdownMenu.Group>
										</DropdownMenu.Content>
									</DropdownMenu.Root>
								</button>
							</Tooltip.Trigger>
							<Tooltip.Content class="border border-primary">
								<p>Share</p>
							</Tooltip.Content>
						</Tooltip.Root>
					</div>
				</div>
			</div>
		{/if}
		<Button
			variant="outline"
			target="_blank"
			class="h-8 px-2"
			href={`https://github.com/${githubConfig.username}/${githubConfig.repo}/blob/${githubConfig.branch}/posts/${$page.params.slug}/page.md`}
		>
			<Github class="w-4 h-4 mr-3" />
			<h1>View on GitHub</h1>
		</Button>
	</div>
	<div class="flex items-center justify-center">
		<SVGDoodle />
	</div>
	<div class="px-3 pb-24 md:container" id="comments">
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
			theme={$theme ? ($theme === 'light' ? 'light' : 'dark_tritanopia') : theme_}
			lang="en"
		/>
	</div>
</div>
