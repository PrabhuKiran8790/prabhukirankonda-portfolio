<script lang="ts">
	import toast from 'svelte-french-toast';
	import { fly } from 'svelte/transition';
	import { extensionMappings } from './language-icons/getLangIcons';
	import { Check, Copy } from 'lucide-svelte';
	import LangIcon from './language-icons/lang-icon.svelte';

	let className: string | undefined | null = undefined;
	// export { className as class };

	export let title = '';

	let codeElement: HTMLElement;
	let copyState = false;

	const handleCopy = () => {
		if (codeElement) {
			navigator.clipboard.writeText(codeElement.innerText ?? '');
			toast.success('Copied', {
				style: 'background: #333; color: #fff;'
			});
		}

		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 2000);
	};
</script>

{#if title}
	<div class="my-4 bg-gray-200 rounded-lg shadow-lg dark:bg-zinc-800">
		<div class="flex items-center justify-between px-2 py-1 md:grid md:grid-cols-3">
			<div class="hidden md:block">
				<div class="flex items-center gap-2">
					<div class="w-3 h-3 bg-red-500 rounded-full" />
					<div class="rounded-full h-3 w-3 bg-[#f5bf4f]" />
					<div class="w-3 h-3 rounded-full bg-emerald-400" />
				</div>
			</div>

			<div class="flex items-center justify-center text-center gap-2">
				<!-- if language in extension mappings -->
				{#if extensionMappings[title.split('.').pop() || '']}
					<LangIcon extension={title.split('.').pop() || ''} />
				{/if}
				{title || ''}
			</div>

			<div class="text-end">
				<button
					class="px-2 rounded-lg hover:bg-slate-300 hover:dark:bg-zinc-700 no-highlight"
					on:click={handleCopy}
				>
					{#if copyState}
						<p in:fly={{ y: -4, delay: 50 }}>Copied</p>
					{:else}
						<p in:fly={{ y: 4, delay: 50 }}>Copy</p>
					{/if}
				</button>
			</div>
		</div>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<pre
			bind:this={codeElement}
			tabindex="0"
			{...$$restProps}
			class="rounded-t-none rounded-lg bg-zinc-900 max-h-[450px] mt-[2px] border-2"><slot /></pre>
	</div>
{:else}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<div class="relative my-5">
		<pre
			bind:this={codeElement}
			tabindex="0"
			{...$$restProps}
			class="rounded-lg bg-zinc-900 max-h-[450px] mt-[2px] border-2">
        <slot />
    </pre>
		<button
			on:click={handleCopy}
			class="absolute z-10 inline-flex items-center justify-center w-6 h-6 p-0 text-sm font-medium no-highlight rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 right-2 top-2"
		>
			{#if copyState}
				<span in:fly={{ y: -4, delay: 50 }}>
					<Check class="w-4 h-4 text-white" />
				</span>
			{:else}
				<span in:fly={{ y: 4, delay: 50 }}>
					<Copy class="w-4 h-4 text-white" />
				</span>
			{/if}</button
		>
	</div>
{/if}
