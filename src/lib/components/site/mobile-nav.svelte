<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cn } from '$lib/utils';
	import { ThemeToggle } from '.';
	import { navigating, page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte';
	import { routes } from '$lib/config';
	import * as Drawer from '$lib/components/ui/drawer';

	let showScrollToTop = true;
	let prevScrollY = 0;
	let showDrawer = false;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleScroll() {
		const scrollY = window.scrollY;
		showScrollToTop = scrollY < prevScrollY;
		prevScrollY = scrollY;
	}

	$: {
		if ($navigating) {
			showDrawer = false;
		}
	}
</script>

{#if showScrollToTop}
	<div
		class={cn(
			'fixed bottom-0 z-[100] h-[4rem] w-full bg-gray-50 shadow-xl md:hidden dark:bg-zinc-900',
			!showDrawer && 'border-t'
		)}
		transition:fly={{ y: 200, duration: 500 }}
	>
		<div class="flex h-full items-center justify-between px-6">
			<div>
				<div class="flex items-center justify-center gap-2">
					<a
						href="/"
						class="text-3xl font-semibold tracking-wider md:text-4xl"
						style="font-family: 'Fuggles', cursive;"
					>
						<span
							class="text-5xl text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-6xl"
							>P</span
						>rabhu
					</a>
					{#if $page.url.pathname === routes.find((route) => route.link === $page.url.pathname)?.link}
						{@const name = routes.find((route) => route.link === $page.url.pathname)?.name}
						<div class="flex items-center justify-center gap-2 mt-3">
							<div class="h-5 w-[1px] bg-primary" />
							<p class="text-xs tracking-wider">
								{name}
							</p>
						</div>
					{/if}
				</div>
			</div>
			<div class="flex items-center justify-between gap-2">
				<ThemeToggle />
				<button
					on:click={() => {
						showDrawer = !showDrawer;
					}}
					class="flex items-center justify-center"
				>
					{#if !showDrawer}
						<Menu class="h-6 w-6" />
					{:else}
						<X class="h-6 w-6" />
					{/if}
				</button>
			</div>
		</div>
	</div>
{/if}

<Drawer.Root bind:open={showDrawer} shouldScaleBackground backgroundColor="">
	<Drawer.Content class="mb-16 dark:bg-zinc-900">
		<div class="w-full gap-4 flex flex-col p-6">
			<div>
				<div class="flex flex-col items-center gap-5">
					{#each routes as route}
						<a
							href={route.link}
							class={cn(
								'group relative inline-block w-full rounded-lg px-3 py-1 text-lg tracking-wider hover:bg-accent hover:text-accent-foreground',
								$page.url.pathname.startsWith(route.link) && 'bg-accent text-accent-foreground'
							)}
						>
							{route.name}
						</a>
					{/each}
				</div>
			</div>
		</div></Drawer.Content
	>
</Drawer.Root>

<!-- {#if showDrawer}
	<div
		class="fixed inset-0 z-[70] bg-background/50 backdrop-blur-sm md:hidden"
		on:click={toggleDrawer}
		transition:fade={{ duration: 150 }}
	/>
	<div
		class="fixed inset-x-0 bottom-14 z-[80] w-full gap-4 rounded-t-xl border-t bg-background p-6 shadow-2xl md:hidden dark:bg-zinc-900"
		in:fly={{ y: '100%', duration: 500, opacity: 1 }}
		out:fly={{ y: '100%', duration: 300, opacity: 1 }}
	>
		<div>
			<div class="flex flex-col items-center gap-5">
				{#each routes as route}
					<a
						href={route.link}
						class={cn(
							'group relative inline-block w-full rounded-lg px-3 py-1 text-lg tracking-wider hover:bg-accent hover:text-accent-foreground',
							$page.url.pathname.startsWith(route.link) && 'bg-accent text-accent-foreground'
						)}
					>
						{route.name}
					</a>
				{/each}
			</div>
		</div>
	</div>
{/if} -->
