import { LinkedIn, X, CodeBerg } from '$lib/components/site/icons';
import { Github, Mail } from 'lucide-svelte';

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

export const siteOwner = 'Rituraj Basak';
export const siteName = 'Rituraj Basak';
export const siteUrl = 'https://riturajbasak.vercel.app/';
export const siteTitle = 'Rituraj Basak';
export const siteImage = `${siteUrl}favicon.png`;
export const twitterHandle = '@RiturajBasak';
export const mailId = 'ycantistudy@gmail.com';

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
		name: 'RSS',
		link: '/rss.xml'
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
		href: 'https://codeberg.org/xade',
		icon: CodeBerg,
		display: 'CodeBerg'
	},
	{
		href: 'https://github.com/imxade',
		icon: Github,
		display: 'GitHub'
	},
	{
		href: 'https://linkedin.com/in/riturajbasak',
		icon: LinkedIn,
		display: 'LinkedIn'
	},
	{
		href: 'https://x.com/RiturajBasak',
		icon: X,
		display: 'Twitter',
		class: 'h-4 w-4'
	},
	{
		href: `mailto:${mailId}`,
		icon: Mail,
		display: 'Mail',
		class: 'h-4 w-4'
	}
];

export const getSocials = ({ exclude }: { exclude?: string } = {}): socialsType[] => {
	if (exclude) {
		return socials.filter((social) => social.display !== exclude);
	}
	return socials;
};

export const githubConfig = {
	username: 'imxade',
	repo: 'portfolio',
	branch: 'main'
};

export const author = {
	name: 'Rituraj Basak',
	tagline: '"Keep it simple, stupid!"',
	avatar: `https://github.com/${githubConfig.username}.png`,
	twt: 'riturajbasak'
};

export const quote: string = `
No One Knows What The OutCome Will Be. So, Choose Whatever You'll Regret The Least..`;
