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
	import { BlogMetatags, SVGDoodle, Stickybar } from '$lib/components/site';
	import { Giscus } from '$lib/components/site/gicsus_';
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { githubConfig } from '$lib/config.js';
	import { theme } from '$lib/stores.js';
	import { formatDate, localToGithubURL } from '$lib/utils';
	import { Calendar, Github, Tag } from 'lucide-svelte';
	import { onMount } from 'svelte';
	export let data;

	let { content, meta } = data;

	let isTocSticky = false;

	let theme_: string | undefined;
	let element: HTMLElement | null;
	let showScrollToTop = false;

	onMount(() => {
		theme_ = localStorage.getItem('mode')?.replace(/^"(.*)"$/, '$1');
		element = document.getElementById('comments');

		let lastScrollTop = 0;

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

			const scrollTop = window.scrollY || document.documentElement.scrollTop;

			// showScrollToTop = scrollTop < lastScrollTop;
			showScrollToTop = scrollTop < lastScrollTop;

			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
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
				class="w-full md:w-[80%] h-auto md:rounded-lg max-h-[550px]"
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
			<Stickybar {element} {showScrollToTop} />
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
