<script lang="ts">
	import { buttonVariants } from '$lib/components/ui/button';
	import { getSocials } from '$lib/config';
	import { cn } from '$lib/utils';
</script>

<div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-4 py-4 sm:grid-cols-4">
	{#each getSocials({ exclude: 'Mail' }) as { display, href, icon }}
		<a
			{href}
			target="_blank"
			class={cn('justify-between gap-3', buttonVariants({ variant: 'outline' }))}
		>
			<svelte:component this={icon} />
			<p>{display}</p>
		</a>
	{/each}
</div>
