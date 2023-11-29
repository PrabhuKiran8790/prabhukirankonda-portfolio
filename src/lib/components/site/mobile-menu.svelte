<script lang="ts">
	import { Menu, Search, X } from 'lucide-svelte';
	import { ThemeToggle } from '.';
	import { Button } from '../ui/button';
	import { openMobileMenu, searchOpen } from '$lib/stores';
	import { Toc } from './table-of-contents';
	import { page } from '$app/stores';
</script>

<div
	class="flex items-center justify-between px-2 bg-gray-200 border rounded-lg dark:bg-zinc-700 h-16"
>
	<div>
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
	</div>

	{#if !$openMobileMenu && $page.url.pathname === `/blog/${$page.params.slug}`}
		<div>
			<Toc />
		</div>
	{/if}

	{#if $page.url.pathname === '/blog'}
		<div>
			<Button
				variant="ghost"
				size="icon"
				on:click={() => {
					$searchOpen = true;
				}}
			>
				<Search />
			</Button>
		</div>
	{/if}

	<div class="flex items-center">
		<ThemeToggle />
		<Button
			variant="ghost"
			size="sm"
			on:click={() => ($openMobileMenu = !$openMobileMenu)}
			class="p-1"
		>
			{#if !$openMobileMenu}
				<Menu />
			{:else}
				<X />
			{/if}
		</Button>
	</div>
</div>
