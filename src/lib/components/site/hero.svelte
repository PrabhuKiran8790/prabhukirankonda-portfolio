<script>
	import ProfilePicture from '$lib/assets/profile_picture.jpg';
	import { SocialButtons } from '$lib/components/site';
</script>

<div class="md:container">
	<div class="md:flex md:flex-row items-center justify-between mt-5">
		<!-- Image for mobile devices -->
		<img
			src={ProfilePicture}
			alt="Prabhu Kiran Konda"
			class="block md:hidden mx-auto rounded-full h-40 w-40"
		/>

		<div class="space-y-3 md:w-1/2 md:mr-4">
			<h1 class="md:text-xl font-bold">Hi, I'm</h1>
			<h1 class="text-2xl md:text-5xl font-bold">Prabhu Kiran Konda</h1>
			<p>
				a software developer from India. I specialize in Python, Machine Learning, and full stack
				development. I’m currently seeking software developer roles to further my career. In my free
				time, I enjoy writing technical blogs and sharing my journey with others. If you'd like to
				get in touch, feel free to react out to me.
			</p>
			<SocialButtons />
		</div>

		<img
			src={ProfilePicture}
			alt="Prabhu Kiran Konda"
			class="hidden md:block rounded-full h-28 w-28 md:h-64 md:w-64 md:self-center"
		/>
	</div>
</div>
