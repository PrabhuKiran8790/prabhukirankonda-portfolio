<script lang="ts">
	import { Command as CommandPrimitive } from "cmdk-sv";
	import { Search } from "lucide-svelte";
	import { cn } from "$lib/utils";

	type $$Props = CommandPrimitive.InputProps;

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<div class="flex items-center px-2 border-b" data-cmdk-input-wrapper="">
	<Search class="w-4 h-4 mr-2 opacity-50 shrink-0" />
	<CommandPrimitive.Input
		class={cn(
			"flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
			className
		)}
		{...$$restProps}
	/>
</div>
