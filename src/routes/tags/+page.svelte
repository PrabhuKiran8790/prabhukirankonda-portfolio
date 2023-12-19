<script lang="ts">
	import { Tag } from '$lib/components/site';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { tags, postsByTag } = data;
</script>

<div class="p-4 mt-4 md:mt-8 flex flex-col gap-10">
	<div class="flex flex-col items-start md:items-center justify-center gap-8">
		<h1
			class="text-5xl  font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text"
		>
			Tags
		</h1>
		<div />
	</div>

	<div class="max-w-7xl md:mx-auto md:px-20">
		<div class="flex gap-5 flex-wrap">
			{#each tags as tag}
				<Tag {tag} count={postsByTag[tag].count} href={`/tags/${postsByTag[tag].slug}`} />
			{/each}
		</div>
	</div>
</div>
