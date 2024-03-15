<script>
	import ProfilePicture from '$lib/assets/profile_picture.jpg';
	import { SocialButtons } from '$lib/components/site';
	import { siteOwner, quote } from '$lib/config';
	import { QuoteIcon } from 'lucide-svelte';

	// const ProfilePicture = new URL('../../assets/profile_picture.jpg', import.meta.url).href
</script>

<div class="md:container">
	<div class="items-center justify-between mt-5 md:mt-12 md:flex md:flex-row">
		<!-- Image for mobile devices -->
		<img
			src={ProfilePicture}
			alt={siteOwner}
			class="block mx-auto rounded-full w-52 h-52 md:hidden"
		/>

		<div class="space-y-3 md:w-1/2 md:mr-4">
			<div
				class="flex flex-col gap-4 border border-border p-2 bg-slate-100 dark:bg-zinc-900 rounded-xl mt-6 md:mt-0 text-primary"
			>
				<div class="flex items-center gap-4">
					<QuoteIcon />
					<h1 class="font-semibold">Quote</h1>
				</div>

				<div>
					{@html quote}
				</div>
			</div>

			<h1 class="font-bold md:text-xl">Hi, I'm</h1>
			<h1 class="text-2xl font-bold md:text-5xl">{siteOwner}</h1>
			<p>
				A technology enthusiast determined to witness its evolution to the fullest.
				Willing to help create a world where mundane and repetitive jobs, otherwise done by
				humans, are seamlessly automated, paving the way for a more liberated and fulfilling
				existence.
			</p>
			<SocialButtons />
		</div>

		<img
			src={ProfilePicture}
			alt={siteOwner}
			class="hidden rounded-full md:block h-28 w-28 md:h-64 md:w-64 md:self-center"
		/>
	</div>
</div>
