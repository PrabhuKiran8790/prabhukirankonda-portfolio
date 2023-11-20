<script>
	export let data;

	let { content, meta } = data;
</script>

<div class="mdsvex mb-20" id="mdsvex">
	<svelte:component this={content} />
</div>
