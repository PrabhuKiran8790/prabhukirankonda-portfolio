<script>
	import ProfilePicture from '$lib/assets/profile_picture.jpg';
	import { SocialButtons } from '$lib/components/site';
</script>

<div class="md:container">
	<div class="items-center justify-between mt-5 md:flex md:flex-row">
		<!-- Image for mobile devices -->
		<img
			src={ProfilePicture}
			alt="Prabhu Kiran Konda"
			class="block w-40 h-40 mx-auto rounded-full md:hidden"
		/>

		<div class="space-y-3 md:w-1/2 md:mr-4">
			<h1 class="font-bold md:text-xl">Hi, I'm</h1>
			<h1 class="text-2xl font-bold md:text-5xl">Prabhu Kiran Konda</h1>
			<p>
				a software developer from India. I specialize in Python, Machine Learning, and full stack
				development. I’m currently seeking software developer roles to further my career. In my free
				time, I enjoy writing technical blogs and sharing my journey with others. If you'd like to
				get in touch, feel free to reach out to me.
			</p>
			<SocialButtons />
		</div>

		<img
			src={ProfilePicture}
			alt="Prabhu Kiran Konda"
			class="hidden rounded-full md:block h-28 w-28 md:h-64 md:w-64 md:self-center"
		/>
	</div>
</div>
