<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<p
	class={cn('leading-7 [&:not(:first-child)]:mt-6 text-primary/90 md:text-lg', className)}
	{...$$restProps}
>
	<slot />
</p>
