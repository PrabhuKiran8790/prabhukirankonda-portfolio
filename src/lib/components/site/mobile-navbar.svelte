<script>
	import * as Sheet from '$lib/components/ui/sheet';
	import { MobileMenu } from '.';
	import { openMobileMenu } from '$lib/stores';
	import { Minus } from 'lucide-svelte';
	import { routes } from '$lib/config';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
</script>

<div class="fixed w-full md:hidden bottom-3 px-2 z-50 h-14">
	<MobileMenu />
</div>

<Sheet.Root open={$openMobileMenu} onOpenChange={() => ($openMobileMenu = !$openMobileMenu)}>
	<Sheet.Content
		side="bottom"
		class="bottom-5 right-2 left-2 rounded-lg bg-gray-50 dark:bg-zinc-900 p-0 h-1/2 border border-primary/40"
	>
		<Sheet.Header>
			<Sheet.Title>
				<div class="flex items-center justify-center p-0">
					<Minus class="w-48 h-9" />
				</div>
			</Sheet.Title>
			<Sheet.Description class="p-0 text-primary">
				<div class="flex flex-col space-y-9 pt-11">
					{#each routes as route}
						<div>
							<a
								href={route.link}
								class="group inline-block relative text-2xl tracking-wider hover:bg-accent hover:text-accent-foreground py-1 px-3 rounded-lg"
							>
								<span
									class={cn(
										'absolute rounded-full -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-[3px] bg-black dark:bg-white opacity-0 group-hover:opacity-100 transition-opacity',
										$page.url.pathname.startsWith(route.link) ? 'opacity-100' : ''
									)}
								/>
								{route.name}
							</a>
						</div>
					{/each}
				</div>
				<div class="absolute bottom-0 w-full">
					<MobileMenu />
				</div>
			</Sheet.Description>
		</Sheet.Header>
	</Sheet.Content>
</Sheet.Root>
