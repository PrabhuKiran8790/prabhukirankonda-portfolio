<script lang="ts">
	import { projects } from '$lib/projects';
	import { Masonry, ProjectCard } from '.';
</script>

<!-- 
<div class="columns-1 md:columns-3 max-w-7xl mx-auto gap-x-[5px]">
	{#each projects as project}
		<div class="inline-block w-full mb-0.5">
			<div class="p-1">
				<ProjectCard {project} />
			</div>
		</div>
	{/each}
</div> -->

<div class="max-w-7xl md:mx-auto gap-x-[5px] -mx-3">
	<Masonry items={projects} gridGap={'0.75rem'} stretchFirst={false} reset>
		{#each projects as project}
			<div class="p-1">
				<ProjectCard {project} />
			</div>
		{/each}
	</Masonry>
</div>
