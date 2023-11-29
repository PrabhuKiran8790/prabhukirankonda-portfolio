<script>
	export let data;

	let { content, meta } = data;
</script>

<div class="mb-20 mdsvex" id="mdsvex">
	<svelte:component this={content} />
</div>
