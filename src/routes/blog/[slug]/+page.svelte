<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { BlogMetatags, SVGDoodle, Stickybar } from '$lib/components/site';
	import Bloghero from '$lib/components/site/bloghero.svelte';
	import Comments from '$lib/components/site/gicsus_/comments.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { githubConfig } from '$lib/config.js';
	import { localToGithubURL } from '$lib/utils';
	import { Github } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let { content, meta } = data;

	let isTocSticky = false;

	let theme_: string | undefined;
	let commentsSection: HTMLElement | null;
	let showScrollToTop = false;

	onMount(() => {
		theme_ = localStorage.getItem('mode')?.replace(/^"(.*)"$/, '$1');

		let lastScrollTop = 0;

		const scrollProgress = document.getElementById('scroll-progress') as HTMLDivElement;
		commentsSection = document.getElementById('comments') as HTMLDivElement;

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			isTocSticky = scrollPosition > 200;
			const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			const height =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight -
				(commentsSection?.offsetHeight || 0);
			const scrolled = (winScroll / height) * 100;
			scrollProgress.style.width = `${scrolled}%`;

			const scrollTop = window.scrollY || document.documentElement.scrollTop;

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
	<Bloghero {data} />
	<Separator />
	<div class="relative w-full max-w-4xl mx-auto text-primary">
		<div class="mb-20 px-4 mdsvex" id="mdsvex">
			<svelte:component this={content} />
		</div>
		{#if isTocSticky}
			<Stickybar element={commentsSection} {showScrollToTop} />
		{/if}
		<div class="px-2">
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
	</div>
	<div class="flex items-center justify-center">
		<SVGDoodle />
	</div>
	<div class="px-3 pb-24 md:container" id="comments">
		<Comments {theme_} />
	</div>
</div>
