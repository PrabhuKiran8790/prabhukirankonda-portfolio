import type { ComponentType, SvelteComponent } from 'svelte';
import { Drizzle, Streamlit, Svelte, Tailwind, SQL } from './components/site/icons';

function tuple<T extends string[]>(...o: T) {
	return o;
}

export const techStackArray = tuple(
	'Python',
	'JavaScript',
	'SvelteKit',
	'Streamlit',
	'SQL',
	'Flask',
	'Docker',
	'Git'
);

export type TechStack = (typeof techStackArray)[number];

export type TechStackObject = {
	[key in TechStack]?: {
		name?: string;
		filename?: string;
		className?: string;
		customIcon?: ComponentType<SvelteComponent>;
	};
};

export type LangIconsType = {
	[key: string]: {
		name?: string;
		filename?: string;
		className?: string;
		customIcon?: ComponentType<SvelteComponent>;
	};
};

export const techStackData: TechStackObject = {
	// inlcude if you want any custom type icon
	// by default it's gonna stick with default values

	/*
    why i'm only icluding the one that i want to be a custom type is that, if you see the URL structure of devicon.dev (that's where we get those icons), it has following structure
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{name}/{filename}.svg" />
    so we can you default ones if not included here. 
    */
	SQL: {
		customIcon: SQL
	},
	SvelteKit: {
		customIcon: Svelte
	},
	Streamlit: {
		customIcon: Streamlit
	}
};
