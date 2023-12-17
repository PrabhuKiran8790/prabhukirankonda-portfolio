<script lang="ts">
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { ChevronDown } from 'lucide-svelte';
	import { cn } from '$lib/utils';

	type $$Props = AccordionPrimitive.TriggerProps;
	type $$Events = AccordionPrimitive.TriggerEvents;

	let className: $$Props['class'] = undefined;
	export let level: AccordionPrimitive.HeaderProps['level'] = 3;
	export { className as class };
</script>

<AccordionPrimitive.Header {level} class="flex">
	<AccordionPrimitive.Trigger
		class={cn(
			'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>div>svg]:rotate-180',
			className
		)}
		{...$$restProps}
		on:click
	>
		<slot />
		<div
			class="inline-flex rounded-md w-8 h-8 items-center justify-center bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-700/70 dark:hover:bg-zinc-800"
		>
			<ChevronDown class="h-4 w-4 transition-transform duration-500" />
		</div>
	</AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
