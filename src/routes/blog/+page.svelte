<script lang="ts">
	import type { PageData } from './$types';
	import { Search } from '$lib/components/site';
	import { AllBlogs } from '$lib/components/site';
	import SeriesBlogs from '$lib/components/site/series-blogs.svelte';

	export let data: PageData;
</script>

<div class="space-y-7 mb-16">
	<div class="flex flex-col p-2 mt-4 gap-9 md:mt-11">
		<div class="flex flex-col items-center px-2 gap-5">
			<div class="flex flex-col items-center gap-2">
				<h1
					class="text-5xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text"
				>
					Blogs
				</h1>
				<h1>Here are some of my writings</h1>
			</div>
			<Search {data} />
		</div>
	</div>

	<div>
		<AllBlogs posts={data.posts} />
	</div>

	<div>
		<div class="flex flex-col items-center justify-center gap-2">
			<h1
				class="text-5xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text"
			>
				Blog Series
			</h1>
			<h1>a series of blogs</h1>
		</div>
	</div>
	<SeriesBlogs seriesPosts={data.seriesPosts} />
</div>
