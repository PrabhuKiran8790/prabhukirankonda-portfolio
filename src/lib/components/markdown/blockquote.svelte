<script lang="ts">
	import { cn } from '$lib/utils';
	import { Info } from 'lucide-svelte';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<blockquote
	class={cn('mt-6 border-l-8 border-primary italic bg-muted rounded-lg', className)}
	{...$$restProps}
>
	<div class="p-4 pr-2">
		<Info class="-mb-3" />
		<slot />
	</div>
</blockquote>
