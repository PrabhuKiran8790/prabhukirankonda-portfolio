<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';
	import type { Post } from '$lib/types';
	import { formatDate } from '$lib/utils';
	import { ArrowRight, Calendar, Tag } from 'lucide-svelte';
	export let data: {
		posts: Post[];
	};

	let post = data.posts[0];
</script>

<div class="mt-12">
	<div class="md:container">
		<div class="flex flex-col md:flex-row items-start md:items-center justify-between space-y-7">
			<div class="space-y-3 md:w-[80%]">
				<div class="text-start">
					<h1
						class="bg-gradient-to-r font-bold from-primary to-gray-400 bg-clip-text text-transparent text-2xl md:text-5xl"
					>
						Latest Post
					</h1>
				</div>
				<p class="text-muted-foreground">Check out my newest blog post</p>
				<div><Button href="/blog" class="text-base">All blogs</Button></div>
			</div>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<a
				class="-mx-2 space-y-2 shadow-xl md:max-w-sm lg:max-w-lg rounded-2xl"
				href={`/blog/${post.slug}`}
			>
				<Card.Root class="rounded-xl hover:border-primary border-2">
					<div class="p-2">
						<img
							src={post.image}
							alt={post.title}
							loading="lazy"
							class="w-full h-full md:h-72 object-cover object-center rounded-lg"
						/>
					</div>
					<Card.Header class="p-2">
						<div class="flex gap-2 items-center">
							<Tag class="h-4 w-4" />
							{#each post.tags as tags}
								<Badge class="rounded-md" variant="secondary">{tags}</Badge>
							{/each}
						</div>
						<Card.Title class="leading-7">
							<a href={`/blog/${post.slug}`} class="hover:underline underline-offset-4">
								{post.title}
							</a>
						</Card.Title>
						<p class="text-sm text-muted-foreground">{post.description}</p>
					</Card.Header>
					<div class="mt-5">
						<Separator />
						<div class="flex items-center justify-between p-2">
							<div class="flex items-center gap-2 text-sm">
								<Calendar class="h-4 w-4" />
								<h1>{formatDate(post.date)}</h1>
							</div>
							<div>
								<Button variant="ghost" size="sm" class="py-0 px-3" href={`/blog/${post.slug}`}
									>read more
									<ArrowRight class="h-4 w-4 ml-2" /></Button
								>
							</div>
						</div>
					</div>
				</Card.Root>
			</a>
		</div>
	</div>
</div>
