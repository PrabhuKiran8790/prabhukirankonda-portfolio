<script>
	import { Svelte } from './icons';

	let currentYear = new Date().getFullYear();
</script>

<div class="container">
	<div class="flex items-center md:justify-between md:flex-row flex-col-reverse p-2">
		<div>
			Prabhu Kiran Konda | © {currentYear}
		</div>
		<div class="flex items-center gap-2">
			<h1>Made with</h1>
			<Svelte class="w-7 h-7 inline-block" />
		</div>
	</div>
</div>
