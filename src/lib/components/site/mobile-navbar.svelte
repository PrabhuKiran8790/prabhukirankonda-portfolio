<script>
	import * as Sheet from '$lib/components/ui/sheet';
	import { MobileMenu } from '.';
	import { openMobileMenu } from '$lib/stores';
	import { Minus } from 'lucide-svelte';
	import { routes } from '$lib/config';
	import { page } from '$app/stores';
	import { cn } from '$lib/utils';
</script>

<div class="fixed z-50 w-full h-16 px-2 md:hidden bottom-3">
	<MobileMenu />
</div>

<Sheet.Root open={$openMobileMenu} onOpenChange={() => ($openMobileMenu = !$openMobileMenu)}>
	<Sheet.Content
		side="bottom"
		class="p-0 border rounded-lg bottom-3 right-2 left-2 bg-gray-50 dark:bg-zinc-900 h-1/2 border-primary/40"
	>
		<Sheet.Header>
			<Sheet.Title>
				<div class="flex items-center justify-center p-0">
					<Minus class="w-48 h-9" />
				</div>
			</Sheet.Title>
			<Sheet.Description class="py-6 text-primary">
				<div class="flex flex-col space-y-9">
					{#each routes as route}
						<div>
							<a
								href={route.link}
								class="relative inline-block px-3 py-1 text-2xl tracking-wider rounded-lg group hover:bg-accent font-semibold hover:text-accent-foreground no-highlight"
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
