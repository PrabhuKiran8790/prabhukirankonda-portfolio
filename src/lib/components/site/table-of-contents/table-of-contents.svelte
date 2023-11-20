<script lang="ts">
	import { onMount } from 'svelte';
	import { Tree, type TableOfContents, type TableOfContentsItem } from '.';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { BookOpen } from 'lucide-svelte';

	let filteredHeadingsList: TableOfContents;

	function getHeadingsWithHierarchy(divId: string) {
		const div = document.getElementById(divId);

		if (!div) {
			return { items: [] };
		}

		const headings: HTMLHeadingElement[] = Array.from(div.querySelectorAll('h2, h3'));
		const hierarchy: TableOfContents = { items: [] };
		let currentLevel: TableOfContentsItem | undefined = undefined;

		headings.forEach((heading: HTMLHeadingElement) => {
			const level = parseInt(heading.tagName.charAt(1));
			if (!heading.id) {
				let newId = heading.innerText
					.replaceAll(/[^a-zA-Z0-9 ]/g, '')
					.replaceAll(' ', '-')
					.toLowerCase();
				heading.id = `${newId}`;
			}

			const item: TableOfContentsItem = {
				title: heading.textContent || '',
				url: `#${heading.id}`,
				items: []
			};

			if (level === 2) {
				hierarchy.items.push(item);
				currentLevel = item;
			} else if (level === 3 && currentLevel?.items) {
				currentLevel.items.push(item);
			}
		});

		filteredHeadingsList = hierarchy;
	}

	// Lifecycle
	onMount(() => {
		getHeadingsWithHierarchy('mdsvex');
	});
</script>

<!-- <div class="space-y-2">
	<Tree tree={filteredHeadingsList} />
</div> -->

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class="hover:bg-gray-200 dark:hover:bg-zinc-900 p-1 rounded-full h-10 w-10 flex items-center justify-center"
	>
		<BookOpen class="h-5 w-5" />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="px-3 border border-primary">
		<DropdownMenu.Group>
			<DropdownMenu.Label>On this page</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<div class="space-y-2">
				<Tree tree={filteredHeadingsList} />
			</div>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
