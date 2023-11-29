<script lang="ts">
	import { TechStackIcon } from '.';
	import { techStackArray } from '$lib/icons';
</script>

<div class="flex flex-wrap items-center my-4 gap-3">
	{#each techStackArray as icon}
		<TechStackIcon {icon} />
	{/each}
</div>
