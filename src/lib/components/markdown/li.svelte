<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<li class={cn('mt-2 leading-7 md:text-lg text-primary/90', className)} {...$$restProps}>
	<slot />
</li>
