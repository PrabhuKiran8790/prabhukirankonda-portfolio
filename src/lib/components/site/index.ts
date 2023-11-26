export { default as ThemeToggle } from './theme-toggle.svelte';
export { default as Navbar } from './navbar.svelte';
export { default as MobileMenu } from './mobile-menu.svelte'
export { default as MobileNavbar } from './mobile-navbar.svelte';
export { default as Hero } from './hero.svelte';
export { default as SocialButtons } from './social-buttons.svelte';
export { default as MetaTags } from './metatags.svelte';
export { default as LatestPost } from './latest-post.svelte'
export { default as Footer } from './footer.svelte'
export { default as BlogMetatags } from './blog-metatags.svelte'
export { default as Search } from './search.svelte'
export { default as Blogcard } from './blogcard.svelte'
export { default as AllBlogs } from './all-blogs.svelte'
export { default as Projects } from './projects.svelte'
export { default as Masonry } from './masonry.svelte';
export { default as ProjectCard } from './project-card.svelte';
export { default as Icons } from './icons.svelte'
export { default as TechStackIcon } from './techstack-icon.svelte'


// import { Drizzle, MySQL, Streamlit, Tailwind } from './icons';

// export type TechStack =
// 	| 'Python'
// 	| 'TypeScript'
// 	| 'JavaScript'
// 	| 'Java'
// 	| 'React'
// 	| 'NextJS'
// 	| 'SvelteKit'
// 	| 'TensorFlow'
// 	| 'PyTorch'
// 	| 'Streamlit'
// 	| 'PostgreSQL'
// 	| 'MySQL'
// 	| 'MongoDB'
// 	| 'Firebase'
// 	| 'FastAPI'
// 	| 'Docker'
// 	| 'Git'
// 	| 'Prisma'
// 	| 'Drizzle'
// 	| 'Tailwind';

// type techStackIconType = {
// 	name: TechStack;
//     icon: string | typeof Streamlit;
// 	className?: string;
// 	type?: string;
// };

// export const techStackIcons: techStackIconType[] = [
// 	{ name: 'Python', icon: 'python' },
// 	{ name: 'TypeScript', icon: 'typescript' },
// 	{ name: 'JavaScript', icon: 'javascript' },
// 	{ name: 'Java', icon: 'java' },
// 	{ name: 'React', icon: 'react' },
// 	{ name: 'NextJS', icon: 'nextjs', className: 'bg-white rounded-full' },
// 	{ name: 'SvelteKit', icon: 'svelte' },
// 	{ name: 'TensorFlow', icon: 'tensorflow' },
// 	{ name: 'PyTorch', icon: 'pytorch' },
// 	{ name: 'Streamlit', icon: Streamlit, type: 'external' },
// 	{ name: 'PostgreSQL', icon: 'postgresql' },
// 	{ name: 'MySQL', icon: MySQL, type: 'external', className: 'bg-white' },
// 	{ name: 'MongoDB', icon: 'mongodb' },
// 	{ name: 'FastAPI', icon: 'fastapi' },
// 	{ name: 'Docker', icon: 'docker' },
// 	{ name: 'Git', icon: 'git' },
// 	{ name: 'Tailwind', icon: Tailwind, type: 'external' },
// 	{ name: 'Drizzle', icon: Drizzle, type: 'external' }
// ];

// export const getTechStack = ({ techstack }: { techstack: TechStack[] }) => {
// 	return techStackIcons.filter((stack) => techstack.includes(stack.name));
// };