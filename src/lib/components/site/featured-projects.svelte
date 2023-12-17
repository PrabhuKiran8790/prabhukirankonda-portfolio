<script lang="ts">
	import { projects } from '$lib/projects';
	import { onMount } from 'svelte';
	import { Masonry, ProjectCard } from '.';
	import { Button } from '$lib/components/ui/button';
	const featured = projects.filter((project) => {
		return project.featured;
	});
</script>

<div class="flex flex-col items-start py-14 md:items-center md:container space-y-5">
	<div class="flex flex-col items-start space-y-3 md:items-center">
		<div>
			<h1
				class="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-5xl"
			>
				Featured Projects
			</h1>
		</div>
		<p class="text-muted-foreground">Here are some of my featured projects</p>
		<div>
			<Button href="/projects" class="text-base" variant="secondary">See all Projects</Button>
		</div>
	</div>

	<div class="space-y-3">
		<div class="max-w-7xl md:mx-auto gap-x-[5px] -mx-3">
			<Masonry items={featured} reset>
				{#each featured as project}
					<div class="p-1">
						<ProjectCard {project} />
					</div>
				{/each}
			</Masonry>
		</div>
	</div>
</div>
