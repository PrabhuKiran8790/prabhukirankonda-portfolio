// import type { ComponentType, SvelteComponent } from 'svelte';
// import { Drizzle, Streamlit, Svelte, Tailwind } from './components/site/icons';

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	tags: string[];
	image: string;
	draft: boolean;
};


// note: all these techstacks will be rendered as icons in about page.
// for projects section, we can choose what we want to be rendered. see lib/projects.ts for more.
// export enum TechStackEnum {
//   Python = 'Python',
//   TypeScript = 'TypeScript',
//   JavaScript = 'JavaScript',
//   Java = 'Java',
//   React = 'React',
//   NextJS = 'NextJS',
//   SvelteKit = 'SvelteKit',
//   TensorFlow = 'TensorFlow',
//   PyTorch = 'PyTorch',
//   Streamlit = 'Streamlit',
//   PostgreSQL = 'PostgreSQL',
//   MySQL = 'MySQL',
//   MongoDB = 'MongoDB',
//   Firebase = 'Firebase',
//   FastAPI = 'FastAPI',
//   Docker = 'Docker',
//   Git = 'Git',
// //   Prisma = 'Prisma',
//   Drizzle = 'Drizzle',
//   Tailwind = 'Tailwind',
// }
    
// export type TechStack = keyof typeof TechStackEnum;

// export type TechStackObject = {
// 	[key in TechStack]?: {
// 		name?: string;
// 		filename?: string;
// 		className?: string;
// 		customIcon?: ComponentType<SvelteComponent>;
// 	};
// };


// export type LangIconsType = {
//     [key : string]: {
// 		name?: string;
// 		filename?: string;
// 		className?: string;
// 		customIcon?: ComponentType<SvelteComponent>;
// 	};
// }


// export const techStackArray: TechStack[] = Object.values(TechStackEnum);

// export const techStackData: TechStackObject = {
//     // inlcude if you want any custom type icon
//     // by default it's gonna stick with default values

//     /*
//     why i'm only icluding the one that i want to be a custom type is that, if you see the URL structure of devicon.dev (that's where we get those icons), it has following structure
//     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" />
//     <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{name}/{filename}.svg" />
//     so we can you default ones if not included here. 
//     */

//     // for nextjs, i want the background to be white so i inlcude nextjs in this
//     NextJS: {
//         className: 'bg-white rounded-full' // that's it. 
//     },
//     Firebase: {
//         filename: 'firebase-plain'
//     },
//     SvelteKit: {
//         customIcon: Svelte
//     },
//     Streamlit: {
//         customIcon: Streamlit
//     },
//     MySQL: {
//         className: 'bg-white',
//         filename: 'mysql-original-wordmark',
//     },
//     Tailwind: {
//         customIcon: Tailwind
//     },
//     Drizzle: {
//         customIcon: Drizzle
//     },
// };
