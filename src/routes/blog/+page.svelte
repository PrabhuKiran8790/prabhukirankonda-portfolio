<script lang="ts">
	import type { PageData } from './$types';
	import { Search } from '$lib/components/site';
	import { AllBlogs } from '$lib/components/site';

	export let data: PageData;
</script>

<div class="flex flex-col p-2 mt-4 gap-9 md:mt-8">
	<div class="flex flex-col items-center gap-5">
		<h1 class="text-4xl font-bold text-center">Blogs</h1>
        <h1>Here are some of my writings</h1>
		<Search posts={data.posts} />
	</div>
	<div>
		<AllBlogs posts={data.posts} />
	</div>
</div>
