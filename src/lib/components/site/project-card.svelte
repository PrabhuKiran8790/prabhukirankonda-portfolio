<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { ProjectType } from '$lib/projects';
	import { ArrowRight, Github } from 'lucide-svelte';
	import { TechStackIcon } from '.';
	import { cn } from '$lib/utils';

	export let project: ProjectType;

	let hover: boolean = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class={cn('pb-0 border-2 rounded-xl hover:border-primary no-highlight max-w-md')}
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
>
	{#if project.image}
		<div class="p-2">
			<img src={project.image} alt={project.title} class="rounded-md w-fit" loading="lazy" />
		</div>
	{/if}
	<div class="flex flex-col justify-between h-full gap-4 p-2.5 pt-0">
		<div class="flex flex-col justify-between gap-2">
			<h1 class={`text-lg font-semibold ${hover ? 'underline underline-offset-4' : ''}`}>
				<a href={project.href}>{project.title}</a>
			</h1>
			<div class="flex gap-1 flex-wrap">
				{#each project.techstack as icon}
					<TechStackIcon {icon} />
				{/each}
			</div>
		</div>
		<div>
			<p class="text-muted-foreground">{project.description}</p>
		</div>

		<div>
			<div class="flex items-center justify-between">
				<div>
					<Button variant="ghost" size="sm" class="px-3 py-0" href={project.href} target="_blank"
						>Visit
						<ArrowRight class={`h-4 w-4 ml-2`} /></Button
					>
				</div>
				{#if project.source}
					<div>
						<Button
							variant="ghost"
							size="sm"
							class="px-3 py-0"
							href={project.source}
							target="_blank"
							>View Source
							<Github class={`h-4 w-4 ml-2`} /></Button
						>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
