<script>
	export let data;

	let { content } = data;
</script>

<div class="mb-20 mdsvex" id="mdsvex">
	<svelte:component this={content} />
</div>
