<script lang="ts">
	import { projects } from '$lib/projects';
	import { Masonry, ProjectCard } from '.';
	import { Button } from '$lib/components/ui/button';
	const featured = projects.filter((project) => {
		return project.featured;
	});
</script>

<div class="flex flex-col items-start py-10 md:items-center md:container space-y-5">
	<div class="items-start px-4 flex flex-col gap-3 md:items-center">
		<h1
			class="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-5xl"
		>
			Featured Projects
		</h1>
		<p class="text-muted-foreground">Here are some of my featured projects</p>
		<div><Button href="/projects" class="text-base">View all Projects</Button></div>
	</div>
</div>

<div class="max-w-7xl md:mx-auto gap-x-[5px]">
	<Masonry items={featured} reset gridGap={'0.9rem'}>
		{#each featured as project}
			<ProjectCard {project} />
		{/each}
	</Masonry>
</div>
