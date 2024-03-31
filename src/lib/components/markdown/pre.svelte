<script lang="ts">
	import toast from 'svelte-french-toast';
	import { fly } from 'svelte/transition';
	import { extensionMappings } from './language-icons/getLangIcons';
	import { Check, Copy } from 'lucide-svelte';
	import LangIcon from './language-icons/lang-icon.svelte';
	import { onMount } from 'svelte';
	import { cn } from '$lib/utils';

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

	let title__: string;

	let lang: string;

	onMount(() => {
		const divsWithAttribute = document.querySelectorAll('[data-rehype-pretty-code-fragment]');

		divsWithAttribute.forEach((div) => {
			const preTags = div.querySelectorAll('pre');

			if (preTags.length === 2) {
				const titleAttribute = preTags[1].getAttribute('__title__');

				if (titleAttribute) {
					preTags[0].setAttribute('__title__', titleAttribute);
				}
			}
		});

		if (codeElement) {
			// Check if data-language attribute is not equal to "md"
			const languageAttribute = codeElement.getAttribute('data-language');
			lang = languageAttribute as string;
			const title_ = codeElement.getAttribute('__title__') as string;
			title__ = title_;
			title = title_;

			if (languageAttribute && languageAttribute.toLowerCase() !== 'md') {
				const lines = codeElement.querySelectorAll('span[data-line]');
				lines.forEach((line) => {
					const lineText = line.textContent || '';

					if (lineText.includes('// [!code ++]') || lineText.includes('# [!code ++]')) {
						line.classList.add('code-add');
						line.innerHTML = line.innerHTML
							.replace(/\/\/ \[!code \+\+\]/g, '')
							.replace(/# \[!code \+\+\]/g, '');
					} else if (lineText.includes('// [!code --]') || lineText.includes('# [!code --]')) {
						line.classList.add('code-delete');
						line.innerHTML = line.innerHTML
							.replace(/\/\/ \[!code --\]/g, '')
							.replace(/# \[!code --\]/g, '');
					}
				});
			}
		}
	});
</script>

<div class={cn($$restProps.class, title__ ? 'mt-[14px]' : 'mb-2')}>
	{#if title__}
		<div
			class="flex items-center justify-between px-2 py-1 bg-gray-200 rounded-t-lg md:grid md:grid-cols-3 dark:bg-zinc-800"
		>
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
				{title__ || ''}
			</div>
			<div class="text-end">
				<button
					class="px-2 rounded-lg hover:bg-gray-300 hover:dark:bg-zinc-700 no-highlight"
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
	{/if}
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<pre
		bind:this={codeElement}
		tabindex="0"
		{...$$restProps}
		class={cn(
			'rounded-lg bg-slate-50 dark:bg-zinc-900 max-h-[450px] border-2',
			title__ ? 'rounded-t-none' : 'mt-[14px]'
		)}>
			<slot />
	</pre>
	{#if !title__}
		<button
			on:click={handleCopy}
			class="absolute inline-flex items-center justify-center w-6 h-6 p-0 text-sm font-medium no-highlight rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-200 dark:hover:bg-zinc-700 right-2 top-2"
		>
			{#if copyState}
				<span in:fly={{ y: -4, delay: 50 }}>
					<Check class="w-4 h-4" />
				</span>
			{:else}
				<span in:fly={{ y: 4, delay: 50 }}>
					<Copy class="w-4 h-4" />
				</span>
			{/if}</button
		>
	{/if}
</div>

<style lang="postcss">
	[data-theme='light'] {
		@apply dark:hidden !important;
	}

	[data-theme='dark'] {
		@apply hidden dark:flex !important;
	}

	.min-light {
		@apply block dark:hidden !important;
	}

	.Moonlight {
		@apply hidden dark:block !important;
	}
</style>
