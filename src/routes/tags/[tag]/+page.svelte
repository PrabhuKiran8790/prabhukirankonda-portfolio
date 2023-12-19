<script lang="ts">
	import { Blogcard, ComboBox, Masonry } from '$lib/components/site';

	import type { PageData } from './$types';

	export let data: PageData | undefined;

	let data__: PageData;

	// only to get rid of ts error
	if (data) {
		data__ = data;
	}
</script>

<div class="p-1 md:p-4 mt-4 md:mt-8 md:container space-y-7">
	<div class="flex flex-col items-center justify-center gap-5">
		<div>
			<h1
				class="text-3xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-5xl"
			>
				{data__.currentTag}
			</h1>
		</div>
		<div
			class="h-[0.3px] -mt-3 md:hidden w-[50%] bg-gradient-to-r from-gray-400 via-primary to-gray-400"
		/>
		<div class="md:hidden no-highlight">
			<ComboBox tags={data__.tags} currentTag={data__.currentTag} postsByTag={data__.postsByTag} />
		</div>
	</div>
	<div class="flex justify-start gap-4">
		<div class="hidden md:block mt-3">
			<ComboBox tags={data__.tags} currentTag={data__.currentTag} postsByTag={data__.postsByTag} />
		</div>
		<div class="w-full">
			<Masonry
				gridGap={'0.75rem'}
				items={data__.postsByTag[data__.currentTag].posts}
				stretchFirst={false}
				reset
			>
				{#each data__.postsByTag[data__.currentTag].posts as post}
					<Blogcard
						{post}
						class="max-w-lg"
						keepImage={false}
						tagClass="dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
					/>
				{/each}
			</Masonry>
		</div>
	</div>
</div>
