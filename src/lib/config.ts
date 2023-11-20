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


export const siteurl = 'https://prabhukirankonda.vercel.app'

export const routes: routesType[] = [
	{
		name: 'Blog',
		link: '/blog'
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

const socials: socialsType[] = [
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
		href: '#',
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
	repo: 'sveltekit-portfolio',
	branch: 'main'
};

export const localToGithubURL = ({ src }: { src: string }) => {
	return `https://raw.githubusercontent.com/${githubConfig.username}/${githubConfig.repo}/${githubConfig.branch}${src}`;
};
