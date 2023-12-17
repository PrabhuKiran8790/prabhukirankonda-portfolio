<script lang="ts">
	import {
		PUBLIC_GITHUB_USERNAME,
		PUBLIC_GITHUB_REPO,
		PUBLIC_GITHUB_REPO_ID,
		PUBLIC_CATEGORY,
		PUBLIC_CATEGORY_ID
	} from '$env/static/public';

	import { theme } from '$lib/stores';

	import { Giscus } from '.';

	export let theme_: string | undefined;
</script>

<Giscus
	repo={`${PUBLIC_GITHUB_USERNAME}/${PUBLIC_GITHUB_REPO}`}
	repoId={PUBLIC_GITHUB_REPO_ID}
	category={PUBLIC_CATEGORY}
	categoryId={PUBLIC_CATEGORY_ID}
	mapping="pathname"
	strict="0"
	reactionsEnabled="1"
	emitMetadata="0"
	inputPosition="top"
	theme={$theme ? ($theme === 'light' ? 'light' : 'dark_tritanopia') : theme_}
	lang="en"
/>
