<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Laptop, Sun } from 'lucide-svelte';

	import { theme } from '$lib/stores';
	import { resetMode, setMode } from 'mode-watcher';
	import { Moon } from './icons';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button
			builders={[builder]}
			size="icon"
			variant="ghost"
			class="md:w-9 md:h-9 p-0 hover:bg-transparent"
		>
			<Sun class="h-5 w-5 hidden dark:block" />
			<Moon class="h-5 w-5 dark:hidden block" />
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
