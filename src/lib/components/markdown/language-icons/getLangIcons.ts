import { Svelte } from '$lib/components/site/icons';
import type { LangIconsType } from '$lib/icons';

export const extensionMappings: LangIconsType = {
    // <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" />
    
    /*
    these icons are from devicon.dev.
    everything before the extension is filename and before that is name

    example: name becomes "rust", filename becomes "rust-original"
    */

	py: {
		name: 'python',
		filename: 'python-original'
	},
	js: {
		name: 'javascript',
		filename: 'javascript-original'
	},
	ts: {
		name: 'typescript',
		filename: 'typescript-original'
	},
	svelte: {
		// name: 'svelte',
		// filename: 'svelte-original',
		customIcon: Svelte // we can also use svg icons like this.
	}
};
