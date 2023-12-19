<script lang="ts">
	import { cn } from '$lib/utils';
	import { badgeVariants, type Variant } from '.';

	let className: string | undefined | null = undefined;
	export let href: string | undefined = undefined;
	export let variant: Variant = 'default';
	export { className as class };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={href ? 'a' : 'span'}
	{href}
	class={cn(badgeVariants({ variant, className }))}
	on:click
	{...$$restProps}
>
	<slot />
</svelte:element>
