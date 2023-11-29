<script lang="ts">
	export let eq: string;
</script>

<svelte:head>
	<script>
		MathJax = {
			tex: {
				inlineMath: [
					['$', '$'],
					['\\(', '\\)']
				]
			}
		};
	</script>
	<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
	<script
		id="MathJax-script"
		async
		src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
	>
	</script>
</svelte:head>

<p class="inline-block -mb-6">{@html eq}</p>
