<script context="module">
	import '../markdown/markdown.postcss';
	import {
		pre,
		a,
		h1,
		h2,
		h3,
		h4,
		h5,
		h6,
		hr,
		img,
		p,
		li,
		ol,
		ul,
		blockquote
	} from '$lib/components/markdown';

	export { pre, a, h1, h2, h3, h4, h5, h6, hr, img, p, li, ol, ul, blockquote };
</script>

<script>
	import ProfilePicture from '$lib/assets/profile_picture.jpg';
	import { Button } from '$lib/components/ui/button';
	import * as Tooltip from '$lib/components/ui/tooltip';
	import { getSocials } from '$lib/config';
</script>

<div class="p-4 mx-auto max-w-7xl">
	<div class="pb-8 space-y-2 md:pt-12 md:space-y-5">
		<div>
			<h1 class="text-4xl font-bold">About Me</h1>
		</div>
	</div>
	<div class="items-start space-y-14 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
		<div class="flex flex-col items-center space-x-2 xl:sticky xl:top-24">
			<img src={ProfilePicture} alt="Prabhu Kiran Konda" class="w-56 h-56 rounded-full" />
			<h3 class="pt-4 pb-2 text-2xl font-bold tracking-tight leading-8">Prabhu Kiran Konda</h3>
			<div class="flex space-x-3">
				{#each getSocials({ exclude: 'Resume' }) as { icon, display, href }}
					<Tooltip.Root openDelay={0}>
						<Tooltip.Trigger>
							<Button variant="ghost" class="p-2" {href} target="_blank">
								<svelte:component this={icon} />
							</Button>
						</Tooltip.Trigger>
						<Tooltip.Content class="border border-primary">
							<p>{display}</p>
						</Tooltip.Content>
					</Tooltip.Root>
				{/each}
			</div>
		</div>
		<div class="lg:col-span-2">
			<slot />
		</div>
	</div>
</div>
