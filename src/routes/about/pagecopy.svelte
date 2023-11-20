<script>
	import ProfilePicture from '$lib/assets/profile_picture.jpg';
	import X from '$lib/components/site/icons/X.svelte';
	import Linkedin from '$lib/components/site/icons/linkedin.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Github, Mail } from 'lucide-svelte';
	import * as Tooltip from '$lib/components/ui/tooltip';

	const socialIcons = [
		{
			icon: Mail,
			name: 'Mail',
			href: 'mailto:prabhukira426@gmail.com'
		},
		{
			icon: Github,
			name: 'Github',
			href: 'https://github.com/PrabhuKiran8790'
		},
		{
			icon: Linkedin,
			name: 'LinkedIn',
			href: 'https://linkedin.com/in/prabhukirankonda'
		},
		{
			icon: X,
			name: 'Twitter / X',
			href: 'https://x.com/prabhukirantwt'
		}
	];
</script>

<div class="p-2 mt-4 md:mt-8">
	<div>
		<h1 class="text-center text-4xl font-bold">About Me</h1>
	</div>
	<div class="md:container max-w-6xl mt-12 px-3">
		<div class="flex flex-col md:flex-row justify-between gap-16">
			<div class="flex flex-col gap-6 items-center w-full">
				<img src={ProfilePicture} alt="Prabhu Kiran Konda" class="rounded-full h-56 w-56" />
				<p class="text-center text-2xl font-bold">Prabhu Kiran Konda</p>
				<div class="flex items-center gap-2">
					{#each socialIcons as { icon, name, href }}
						<Tooltip.Root openDelay={0}>
							<Tooltip.Trigger>
								<Button variant="ghost" class="p-2" {href} target="_blank">
									<svelte:component this={icon} />
								</Button>
							</Tooltip.Trigger>
							<Tooltip.Content>
								<p>{name}</p>
							</Tooltip.Content>
						</Tooltip.Root>
					{/each}
				</div>
			</div>
			<div class="flex flex-col gap-9 info">
				<div>
					<h1 class="text-lg leading-8 tracking-wider">
						<p>Hello <span class="wave">👋</span></p>
						I'm<code>Prabhu Kiran Konda</code>, a technology enthusiast with a deep love for
						programming. I've recently discovered a passion for tech blogging and writing. I'm
						enthusiastic about sharing insights and knowledge from the ever-evolving world of
						technology.
						<br />
						<br />
						Currently I'm Learning
						<code>React</code>
						and
						<code>NextJS</code> to build modern web applications and also exploring Data Science and
						Machine Learning.
					</h1>
				</div>

				<div>
					<h1 class="font-bold text-xl leading-8 tracking-wider underline underline-offset-4">
						Tech Stack I'm Familiar with:
					</h1>
				</div>

				<div class="education space-y-6">
					<h1 class="font-bold text-xl leading-8 tracking-wider underline underline-offset-4">
						Education
					</h1>
					<h2 class="text-lg font-semibold">
						Bachelors in Electrical and Electronics Engineering - [2020 - 2023]
					</h2>
					<div class="text-lg leading-8 tracking-wider space-y-8">
						<div class="space-y-3">
							<li>
								@ <code>SR University</code>, Warangal, India
							</li>
							<li>CGPA: 8.57 / 10</li>
							<li>
								Coursework Includes
								<div class="pl-7 space-y-3">
									<li>Object-Oriented Programming in Java</li>
									<li>Artificial Intelligence</li>
									<li>Neural Networks and Deep Learning</li>
									<li>Natural Language Processing (NLP)</li>
								</div>
							</li>
						</div>
						<p>
							While studying at <code>SR University</code>, I was extensively involved in the AI
							Minor program and completed various projects related to Machine Learning and Deep
							Learning. Additionally, I authored several research papers exploring the applications
							of Machine Learning and Deep Learning in the field of Electrical Engineering.
						</p>
					</div>
				</div>

				<div class="space-y-5">
					<h1 class="font-bold text-xl leading-8 tracking-wider underline underline-offset-4">
						Certifications 🎖️
					</h1>

					<div class="text-lg leading-8 tracking-wider space-y-3">
						<li>
							Deep Learning Specialization <a
								href="https://www.coursera.org/account/accomplishments/specialization/certificate/DYAT64RBNY2R"
								class="text-orange-500">(Coursera)</a
							>
						</li>
						<li>
							Machine Learning A-Z: AI, Python & R in Data Science <a
								href="https://www.udemy.com/certificate/UC-1da0a923-8fb4-41a7-9166-c13adb00d2ad/"
								class="text-orange-500">(Udemy)</a
							>
						</li>
						<li>
							AI-900: Azure AI Fundamentals <a
								href="https://www.credly.com/badges/46b6842f-597c-4079-a876-fcd6ec7dd653?source=linked_in_profile"
								class="text-orange-500">(Microsoft)</a
							>
						</li>
					</div>
				</div>

				<div>
					<h1 class="font-bold text-xl leading-8 tracking-wider underline underline-offset-4">
						Publications 📚
					</h1>
					<div class="text-lg leading-8 tracking-wider space-y-3">
						<li>
							<a
								href="http://advances.utc.sk/index.php/AEEE/article/view/4561"
								class="text-orange-500"
							>
								A Platform Independent Web-Application for Short-Term Electric Power Load
								Forecasting on a 33/11 kV Substation Using Regression Model
							</a>, Advances in Electrical & Electronics Engineering
						</li>
						<li>
							<a href="https://www.mdpi.com/2413-8851/7/3/68" class="text-orange-500"
								>Weather Forecasting Using Radial Basis Function Neural Network in Warangal, India</a
							>, MDPI Urban Science
						</li>
						<li>
							<a
								href="https://link.springer.com/chapter/10.1007/978-981-99-2066-2_22"
								class="text-orange-500"
								>Active Power Load Data Dimensionality Reduction Using Autoencoder</a
							>, Springer
						</li>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	code {
		@apply bg-gray-300 dark:bg-zinc-800 px-1 rounded-md mx-1 border border-primary;
	}
	.wave {
		animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
		animation-duration: 2.5s; /* Change to speed up or slow down */
		animation-iteration-count: infinite; /* Never stop waving :) */
		transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
		display: inline-block;
	}
</style>
