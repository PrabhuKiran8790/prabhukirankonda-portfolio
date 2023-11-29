<script>
	import { Svelte } from './icons';

	let currentYear = new Date().getFullYear();
</script>

<div class="container">
	<div class="flex flex-col-reverse items-center p-2 md:justify-between md:flex-row">
		<div>
			Prabhu Kiran Konda | © {currentYear}
		</div>
		<div class="flex items-center gap-2">
			<h1>Made with</h1>
			<Svelte class="inline-block w-7 h-7" />
		</div>
	</div>
</div>
