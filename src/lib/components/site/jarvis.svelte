<script lang="ts">
	import { Bot, UserCircle2 } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import { fly } from 'svelte/transition';
	import SvelteMarkdown from 'svelte-markdown';

	import type { ActionReturn } from 'svelte/action';

	interface Attributes {
		'on:clickoutside'?: (e: CustomEvent<void>) => void;
	}

	type Callback = () => unknown;

	function listen(
		node: Document,
		event: string,
		handler: (event: Event) => void,
		options: boolean
	) {
		node.addEventListener(event, handler, options);
		return () => node.removeEventListener(event, handler, options);
	}

	export function clickOutsideAction(
		node: HTMLElement,
		callback?: Callback
	): ActionReturn<{}, Attributes> {
		const handleClick = (event: Event) => {
			if (event.target !== null && !node.contains(event.target as Node)) {
				node.dispatchEvent(new CustomEvent('clickoutside'));
				callback?.();
			}
		};

		const stop = listen(document, 'click', handleClick, true);

		return {
			destroy() {
				stop();
			}
		};
	}
	let showModal = false;

	import { useChat } from 'ai/svelte';
	import { Textarea } from '../ui/textarea';
	import Math from '../markdown/math.svelte';
	const { input, handleSubmit, messages } = useChat();

	// set loading to true when change in messages is detected
	$: loading = $messages && $messages.length > 0;

	$: {
		// also set loading to false after changes in messages are detected and length is even (assistant has responded)
		if ($messages && $messages.length % 2 === 0) {
			loading = false;
		}
	}

	// when messages changes scroll into view to chatContent id
	$: {
		if ($messages && $messages.length > 0) {
			const chatContent = document.getElementById('chatContent');
			chatContent?.scrollIntoView({ behavior: 'smooth' });
		}
	}

	const dummy = [
		{
			role: 'user',
			content: 'Hello Jarvis'
		},
		{
			role: 'assistant',
			content: `
Sure, I'd be happy to provide information about Prabhu Kiran Konda's publications. Here they are:
Paper 1:
Title: A Platform Independent Web-Application for Short-Term Electric Power Load Forecasting on a 33/11 kV Substation Using Regression Model
Journal: Advances in Electrical & Electronics Engineering
Link: http://advances.utc.sk/index.php/AEEE/article/view/4561
Paper 2:
Title: Weather Forecasting Using Radial Basis Function Neural Network in Warangal, India.
Journal: MDPI Urban Science
Link: https://www.mdpi.com/2413-8851/7/3/68
Paper 3:
Title: Active Power Load Data Dimensionality Reduction Using Autoencoder
Journal: Springer
Link: https://link.springer.com/chapter/10.1007/978-981-99-2066-2_22
Please let me know if you need information on any other topic related to Prabhu Kiran Konda.
				`
		}
	];

	// let rows = 1;

	// $: {
	// 	rows = inputMessage.split('\n').length + 1;
	// }

	$: rows = $input.length / 43 + 1;
</script>

<div class="absolute bottom-4 right-4 hidden lg:block">
	<Button on:click={() => (showModal = true)} variant="secondary" class="p-2 focus:scale-90">
		<Bot size="24" />
	</Button>
</div>
{#if showModal}
	<div
		class="absolute hidden lg:block bottom-4 right-4 pt-2 w-[450px] h-[70%] bg-secondary dark:bg-zinc-800 shadow-3xl rounded-3xl backdrop-blur-3xl overflow-scroll"
		use:clickOutsideAction
		on:clickoutside={() => (showModal = false)}
		in:fly={{ duration: 300, y: 100, x: 100 }}
		out:fly={{ duration: 300, y: 100, x: 100 }}
	>
		<div class="h-full p-2">
			<div class="flex h-full flex-col">
				<div class="mb-6 flex flex-grow flex-col gap-3 overflow-y-scroll px-2 py-2">
					{#if $messages.length === 0}
						<div class="flex h-full items-center justify-center overflow-hidden">
							<h1 class="text-4xl font-bold text-muted-foreground">Chat with Jarvis</h1>
						</div>
					{/if}
					{#each $messages as message}
						<div class="flex w-full items-center gap-5">
							{#if message.role === 'user'}
								<div class="my-1 ml-auto flex items-start justify-end gap-3">
									<div class="rounded-lg bg-slate-300 dark:bg-zinc-900 p-3">
										{message.content}
									</div>
									<UserCircle2 class="h-6 w-6" />
								</div>
							{:else}
								<div
									class="my-1 mr-auto flex items-start justify-start gap-3 overflow-x-scroll pr-4 min-w-full"
								>
									<Bot class="h-6 w-6" />
									<div
										class="w-full rounded-lg bg-zinc-300 dark:bg-zinc-700 text-primary p-3 overflow-x-scroll"
									>
										{#key message.content}
											<SvelteMarkdown source={message.content} />
										{/key}
									</div>
								</div>
							{/if}
						</div>
					{/each}
					<div id="chatContent" class="mb-12" />
				</div>
				<form on:submit={handleSubmit}>
					<div class="flex w-full items-center">
						<div
							class="overflow-hidden flex flex-col w-full flex-grow relative border border-primary dark:text-white rounded-2xl"
						>
							<textarea
								id="prompt-textarea"
								tabindex="0"
								data-id="root"
								{rows}
								bind:value={$input}
								placeholder="Message ChatGPT…"
								class="m-0 w-full resize-none rounded-2xl bg-transparent focus:ring-0 focus-visible:ring-0 dark:bg-transparent py-[10px] pr-10 md:py-3.5 md:pr-12 max-h-[25dvh] placeholder-black/50 dark:placeholder-white/50 pl-3 md:pl-4"
								on:keypress={(e) => {
									if (e.key === 'Enter' && !e.shiftKey) {
										e.preventDefault();
										handleSubmit(e);
									}
								}}
							/><button
								class="absolute bottom-1.5 right-2 rounded-lg border border-black bg-black p-0.5 text-white transition-colors enabled:bg-black disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white dark:hover:bg-white md:bottom-3 md:right-3"
								data-testid="send-button"
								disabled={$input.length === 0}
								type="submit"
								on:click={handleSubmit}
								><span class="" data-state="closed"
									><svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										class="text-white dark:text-black"
										><path
											d="M7 11L12 6L17 11M12 18V7"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										/></svg
									></span
								></button
							>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}
