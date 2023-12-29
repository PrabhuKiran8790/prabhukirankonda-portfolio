<script>
	import '../app.postcss';
	import { ModeWatcher } from 'mode-watcher';
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import { openMobileMenu } from '$lib/stores';
	import { preparePageTransition } from '$lib/scripts/page-transitions';
	import { Navbar, Footer, MetaTags, MobileNav } from '$lib/components/site';
	import { Toaster } from 'svelte-french-toast';
	// import MobileNavbar from '$lib/components/site/mobile-navbar.svelte';

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

<div class="flex flex-col min-h-screen md:pt-10">
	<div class="flex-1 mb-20 md:mb-0">
		<slot />
	</div>
	<footer class="hidden border-t md:block">
		<Footer />
	</footer>
</div>
<!-- no-highlight (touch highlights in mobile) -->
<div class="no-highlight">
	<!-- <MobileNavbar /> -->
	<MobileNav />
</div>
