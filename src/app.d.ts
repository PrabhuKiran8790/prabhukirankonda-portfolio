// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

import type { Post } from '$lib/types';
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
		interface PageState {
			tagsData: {
				currentTag: string;
				tags: string[];
				postsByTag: Record<
					string,
					{
						posts: Post[];
						count: number;
						slug: string;
					}
				>;
			};
		}
	}
}

export {};
