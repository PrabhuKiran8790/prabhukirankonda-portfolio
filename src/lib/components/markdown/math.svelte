<script lang="ts">
	import katex from 'katex';

	// export let math: string;

	export const ki = (tex: string) => {
		return katex.renderToString(tex);
	};

	export const kd = (tex: string) => {
		return katex.renderToString(tex, { displayMode: true });
	};
</script>

{@html kd(``)}
