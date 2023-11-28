<script lang="ts">
	import { TechStackIcon } from '.';
	import { techStackArray } from '$lib/icons';
</script>

<div class="flex items-center gap-3 my-4 flex-wrap">
	{#each techStackArray as icon}
		<TechStackIcon {icon} />
	{/each}
</div>
