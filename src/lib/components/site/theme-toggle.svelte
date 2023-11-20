<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Laptop, Sun } from 'lucide-svelte';

	import { setMode, resetMode } from 'mode-watcher';
	import { Moon } from './icons';
	import { theme } from '$lib/stores';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="ghost" size="icon" class="md:w-9 md:h-9">
			<Sun
				class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
			/>
			<Moon
				class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
			/>
			<span class="sr-only">Toggle theme</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Item
			on:click={() => {
				$theme = 'light';
				setMode('light');
			}}
			class="flex items-center space-x-2"
		>
			<Sun class="h-[1.2rem] w-[1.2rem]" />
			<span>Light</span>
		</DropdownMenu.Item>
		<DropdownMenu.Item
			on:click={() => {
				$theme = 'dark';
				setMode('dark');
			}}
			class="flex items-center space-x-2"
		>
			<Moon class="h-[1.2rem] w-[1.2rem]" />
			<span>Dark</span>
		</DropdownMenu.Item>
		<DropdownMenu.Item
			on:click={() => {
				$theme = 'dark';
				resetMode();
			}}
			class="flex items-center space-x-2"
		>
			<Laptop class="h-[1.2rem] w-[1.2rem]" />
			<span>System</span>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
