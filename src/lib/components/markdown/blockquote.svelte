<script lang="ts">
	import { cn } from '$lib/utils';
	import { Info } from 'lucide-svelte';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<blockquote
	class={cn(
		'mt-6 border-l-8 border-primary pl-3 italic bg-muted rounded-lg font-medium',
		className
	)}
	{...$$restProps}
>
	<div class="flex items-center p-1 gap-3">
		<Info class="w-10 h-10 md:h-5 md:w-5" />
		<div>
			<slot />
		</div>
	</div>
</blockquote>
