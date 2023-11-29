<script>
	import '../app.postcss';
	import { ModeWatcher } from 'mode-watcher';
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import { openMobileMenu } from '$lib/stores';
	import { preparePageTransition } from '$lib/scripts/page-transitions';
	import { Navbar, Footer, MetaTags } from '$lib/components/site';
	import { Toaster } from 'svelte-french-toast';
	import MobileNavbar from '$lib/components/site/mobile-navbar.svelte';
	import { page } from '$app/stores';

	onNavigate(() => {
		if ($openMobileMenu) {
			$openMobileMenu = false;
		}
	});

	preparePageTransition();

	$: {
		if (browser) {
			if ($openMobileMenu) {
				document.body.classList.add('overflow-hidden');
			} else if (!$openMobileMenu) {
				document.body.classList.remove('overflow-hidden');
			}
		}
	}
</script>

<ModeWatcher />
<MetaTags />
<Toaster />
<Navbar />
<!-- no-highlight (touch highlights in mobile) -->
<div class="no-highlight">
	<MobileNavbar />
</div>
<div class="flex flex-col min-h-screen md:pt-10">
	<div class="flex-1 mb-16 md:mb-0">
		<slot />
	</div>
	<footer class="hidden border-t md:block">
		<Footer />
	</footer>
</div>
