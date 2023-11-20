<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { cn } from '$lib/utils';
	import { dev } from '$app/environment';
	import { githubConfig, localToGithubURL } from '$lib/config';

	let className: string | undefined | null = undefined;
	export { className as class };
	export let src: HTMLImgAttributes['src'] = undefined;
	export let alt: HTMLImgAttributes['alt'] = undefined;

	if (!dev && src?.startsWith('/')) {
		src = localToGithubURL({ src });
	}
</script>

<div>
	<img {src} {alt} class={cn('rounded-md mt-4', className)} {...$$restProps} />
	<p class="text-center text-muted-foreground text-sm">{alt ? alt : ''}</p>
</div>
