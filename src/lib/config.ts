import { LinkedIn, X } from '$lib/components/site/icons';
import { FileText, Github, Mail } from 'lucide-svelte';

type routesType = {
	name: string;
	link: string;
};

type socialsType = {
	href: string;
	icon: typeof Github;
	display: string;
	class?: string;
};

export const siteOwner = 'Prabhu Kiran Konda'
export const siteName = 'Prabhu Kiran Konda'
export const siteUrl = 'https://prabhukirankonda.vercel.app/'
export const siteTitle = 'Prabhu Kiran Konda'
export const siteImage = `${siteUrl}og.png`


// nav routes
export const routes: routesType[] = [
	{
		name: 'Blog',
		link: '/blog'
	},
	{
		name: 'Tags',
		link: '/tags'
	},
	{
		name: 'Projects',
		link: '/projects'
	},
	{
		name: 'About',
		link: '/about'
	}
];

// social icons with links
export const socials: socialsType[] = [
	{
		href: 'https://github.com/prabhukiran8790',
		icon: Github,
		display: 'GitHub'
	},
	{
		href: 'https://linkedin.com/in/PrabhuKiranKonda',
		icon: LinkedIn,
		display: 'LinkedIn'
	},
	{
		href: 'https://x.com/prabhukirantwt',
		icon: X,
		display: 'Twitter',
		class: 'h-4 w-4'
	},
	{
		href: 'mailto:prabhukiran426@gmail.com',
		icon: Mail,
		display: 'Mail',
		class: 'h-4 w-4'
	},
	{
		href: '/Prabhu Kiran Konda Resume.pdf',
		icon: FileText,
		display: 'Resume'
	}
];

export const getSocials = ({ exclude }: { exclude?: string } = {}): socialsType[] => {
	if (exclude) {
		return socials.filter((social) => social.display !== exclude);
	}
	return socials;
};

export const githubConfig = {
	username: 'PrabhuKiran8790',
	repo: 'prabhukirankonda-portfolio',
	branch: 'main'
};

export const author = {
	name: 'Prabhu Kiran Konda',
	tagline: 'I train machines to learn and build software to solve problems.',
	avatar: `https://github.com/${githubConfig.username}.png`,
	twt: 'prabhukirantwt'
};

export const whatsNew: string = `
Currently working on 100 Days of AI. A 100 day challenge to learn, teach and build AI
@ <a href='https://neuralchemie.com' class="underline hover:underline-offset-4">Neuralchemie</a>`;
