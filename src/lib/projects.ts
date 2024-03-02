import type { TechStack } from './icons';
import projectData from '../json/projects.json';

export type ProjectType = {
	title: string;
	featured?: boolean;
	href: string;
	source?: string;
	image: string;
	description: string;
	techstack: TechStack[];
};

export const projects: ProjectType[] = projectData;