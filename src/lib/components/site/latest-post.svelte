<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import type { Post } from '$lib/types';
	import Blogcard from './blogcard.svelte';
	export let data: {
		posts: Post[];
	};

	let post = data.posts[0];
</script>

<div class="mt-12">
	<div class="md:container">
		<div class="flex flex-col items-start justify-between md:flex-row md:items-center space-y-7">
			<div class="space-y-3 md:w-[80%]">
				<div class="text-start">
					<h1
						class="text-2xl font-bold text-transparent bg-gradient-to-r from-primary to-gray-400 bg-clip-text md:text-5xl"
					>
						Latest Post
					</h1>
				</div>
				<p class="text-muted-foreground">Check out my newest blog post</p>
				<div><Button href="/blog" class="text-base">All blogs</Button></div>
			</div>
			<div
				class="-mx-2 shadow-xl space-y-2 md:max-w-sm lg:max-w-xl rounded-2xl no-highlight"
			>
				<Blogcard {post} shallow={true} />
			</div>
		</div>
	</div>
</div>
