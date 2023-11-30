export type TableOfContentsItem = {
	title: string;
	url: string;
	items?: TableOfContentsItem[];
};

export type TableOfContents = {
	items: TableOfContentsItem[];
};

export { default as Tree } from './tree.svelte';
export { default as Toc } from './table-of-contents.svelte';
