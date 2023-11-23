<script lang="ts">
	import toast from 'svelte-french-toast';
	import { fly } from 'svelte/transition';
	import { extensionMappings } from './language-icons/getLangIcons';
	import { Copy, CopyCheck } from 'lucide-svelte';
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
	<div class="bg-gray-200 dark:bg-zinc-800 rounded-lg my-4 shadow-lg">
		<div class="flex md:grid md:grid-cols-3 items-center justify-between px-2 py-1">
			<div class="hidden md:block">
				<div class="flex items-center gap-2">
					<div class="rounded-full h-3 w-3 bg-red-500" />
					<div class="rounded-full h-3 w-3 bg-[#f5bf4f]" />
					<div class="rounded-full h-3 w-3 bg-emerald-400" />
				</div>
			</div>

			<div class="text-center flex items-center justify-center gap-2">
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
	<div class="relative mt-2">
		<pre
			bind:this={codeElement}
			tabindex="0"
			{...$$restProps}
			class="rounded-lg bg-zinc-900 max-h-[450px] mt-[2px] border-2">
        <slot />
    </pre>
		<div class="absolute right-2 top-2">
			<button on:click={handleCopy} class="p-0 z-50 no-highlight">
				{#if copyState}
					<span in:fly={{ y: -4, delay: 50 }}>
						<CopyCheck class="h-4 w-4 text-white" />
					</span>
				{:else}
					<span in:fly={{ y: 4, delay: 50 }}>
						<Copy class="h-4 w-4 text-white" />
					</span>
				{/if}</button
			>
		</div>
	</div>
{/if}
