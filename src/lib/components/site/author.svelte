<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import { buttonVariants } from '../ui/button';
	import * as Avatar from '$lib/components/ui/avatar';
	import { cn } from '$lib/utils';
	import { author, getSocials, socials } from '$lib/config';
	import { Planet } from './icons';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<HoverCard.Root openDelay={200} closeDelay={100}>
	<HoverCard.Trigger class="w-fit">
		<a class="flex items-center gap-2" href="/about">
			<Avatar.Root class={cn('h-7 w-7', className)}>
				<Avatar.Image src={author.avatar} alt={`@${author.twt}`} />
				<Avatar.Fallback>
					{`${author?.name.split(' ')[0].charAt(0)} ${author?.name.split(' ')[1].charAt(0)}`}
				</Avatar.Fallback>
			</Avatar.Root>
			<p>{author?.name}</p>
		</a>
	</HoverCard.Trigger>
	<HoverCard.Content class="flex w-96 flex-col gap-3">
		<div class="flex justify-between space-x-4">
			<Avatar.Root class="h-14 w-14">
				<Avatar.Image src={author.avatar} alt={`@${author.twt}`} />
				<Avatar.Fallback>
					{`${author.name.split(' ')[0].charAt(0)}${author.name.split(' ')[1].charAt(0)}`}
				</Avatar.Fallback>
			</Avatar.Root>
			<div class="flex-grow space-y-3">
				<div class="flex items-center justify-between">
					<div class="flex flex-col items-start">
						<h1>{author.name}</h1>
						<a href={`https://twitter.com/${author.twt}`} class="text-xs text-muted-foreground"
							>@{author.twt}</a
						>
					</div>
					<div>
						<a
							href="/"
							class={cn(
								buttonVariants({
									variant: 'outline'
								}),
								'flex h-8 w-8 items-center gap-1 p-0'
							)}
							target="_blank"
						>
							<Planet class="h-5 w-5" />
						</a>
					</div>
				</div>
				<p class="text-start">{author.tagline}</p>
				<div class="flex flex-wrap items-center gap-2">
					{#each getSocials({ exclude: 'Mail' }) as { href, icon }}
						<a
							{href}
							target="_blank"
							class={cn('justify-between gap-3', buttonVariants({ variant: 'outline' }))}
						>
							<svelte:component this={icon} />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
