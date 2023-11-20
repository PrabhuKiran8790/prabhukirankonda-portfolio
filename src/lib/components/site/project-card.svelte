<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { ProjectType } from '$lib/projects';
	import { cn } from '$lib/utils';
	import { ArrowRight } from 'lucide-svelte';
	import { getTechStack } from '.';
	import { Badge } from '../ui/badge';
	import Icons from './icons.svelte';

	export let project: ProjectType;

	let hover: boolean = false;
</script>

<a
	class="border-2 rounded-lg hover:border-primary block pb-0"
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
	href={project.href}
	target="_blank"
	data-sveltekit-preload-data
>
	{#if project.image}
		<img src={project.image} alt={project.title} class="rounded-md rounded-b-none" />
	{/if}
	<div class="flex flex-col justify-between h-full gap-4 p-4">
		<div class="flex flex-col justify-between gap-2">
			<h1 class={`text-lg font-semibold ${hover ? 'underline underline-offset-4' : ''}`}>
				{project.title}
			</h1>
			<div class="flex gap-1 flex-wrap">
				<!-- {#each project.techstack as tech}
					<Badge class="rounded">{tech}</Badge>
				{/each} -->
				{#each getTechStack({ techstack: project.techstack }) as { name, icon, className, type }}
					<Badge variant="outline" class="rounded-md border-primary/30 gap-2 py-1">
						<p class="text-sm">{name}</p>
						{#if type === 'external'}
							<svelte:component this={icon} class={cn(className)} />
						{:else if typeof icon === 'string'}
							<svelte:component this={Icons} {icon} class={cn('h-5 w-5', className)} />
						{/if}
					</Badge>
				{/each}
			</div>
		</div>
		<div>
			<p class="text-muted-foreground">{project.description}</p>
		</div>

		<div>
			<div class="flex items-center justify-between">
				<div>
					<Button variant="ghost" size="sm" class="py-0 px-3" href={project.href}
						>Visit
						<ArrowRight class={`h-4 w-4 ml-2`} /></Button
					>
				</div>
			</div>
		</div>
	</div>
</a>
