<script lang="ts">
	export let icon: string;
	let className: string | undefined = undefined;
	export { className as class };
</script>

<img
	src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`}
	alt={`${icon}`}
	class={className}
/>
