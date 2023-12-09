<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { ProjectType } from '$lib/projects';
	import { ArrowRight, Github } from 'lucide-svelte';
	import { TechStackIcon } from '.';

	export let project: ProjectType;

	let hover: boolean = false;

	const getAssetUrl = (path: string) => {
		return new URL(path, import.meta.url).href;
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="block pb-0 border-2 rounded-lg hover:border-primary"
	on:mouseenter={() => (hover = true)}
	on:mouseleave={() => (hover = false)}
>
	{#if project.image}
		<img src={getAssetUrl(project.image)} alt={project.title} class="rounded-b-none rounded-md" />
	{/if}
	<div class="flex flex-col justify-between h-full p-4 gap-4">
		<div class="flex flex-col justify-between gap-2">
			<h1 class={`text-lg font-semibold ${hover ? 'underline underline-offset-4' : ''}`}>
				{project.title}
			</h1>
			<div class="flex flex-wrap gap-1">
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
