<script lang="ts">
	import { page } from '$app/stores';
	import X from '$lib/components/site/icons/X.svelte';
	import Linkedin from '$lib/components/site/icons/linkedin.svelte';
	import { Toc } from '$lib/components/site/table-of-contents';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { ArrowUp, MessageSquare, Share2 } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';

	export let element: HTMLElement | null = null;
	export let showScrollToTop: boolean;
</script>

<div
	class="sticky z-20 hidden w-full md:block bottom-10 ml-5"
	in:fly={{ y: 1000 }}
	out:fly={{ y: 1000 }}
>
	<div class="flex items-center justify-center space-x-4">
		<div
			class="flex items-center py-1 border rounded-l-full rounded-r-full justify-evenly border-primary/50 bg-muted shadow-sm px-7 space-x-3"
		>
			<!-- Comments -->
			<Tooltip.Root openDelay={0}>
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
		<div class="flex items-center justify-center w-7 h-7">
			{#if showScrollToTop}
				<div transition:fly={{ x: -20, duration: 700 }}>
					<Tooltip.Root openDelay={0}>
						<Tooltip.Trigger>
							<button
								class="bg-muted rounded-full p-1 border border-muted-foreground"
								on:click={() => {
									window.scrollTo({
										top: 0,
										behavior: 'smooth'
									});
								}}
							>
								<ArrowUp class="w-5 h-5" />
							</button>
						</Tooltip.Trigger>
						<Tooltip.Content class="border border-primary">
							<p>Scroll to top</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</div>
			{/if}
		</div>
	</div>
</div>
