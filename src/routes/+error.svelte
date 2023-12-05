<script lang="ts">
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';

	$: message = $page.status === 404 ? 'Page not found' : "The blog doesn't exist";
</script>

<main class="flex h-[90vh] w-full justify-center items-center px-6 py-24 sm:py-32 lg:px-8">
	<div class="text-center">
		<p class="font-semibold text-magnum-500">{$page.status}</p>
		<h1 class="mt-4 text-4xl font-bold tracking-tight">{message}</h1>
		<div class="mt-10 flex items-center justify-center gap-x-6">
			{#if $page.status !== 404}
				<Button href="/blog" class="mt-4">Go to Blogs</Button>
			{:else}
				<Button href="/" class="mt-4">Back to home</Button>
			{/if}
		</div>
	</div>
</main>
