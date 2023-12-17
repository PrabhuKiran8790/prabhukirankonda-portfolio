import { getSeriesPostByCoverFolder } from '$lib/posts.js';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	let post

	let folder: string = ''
	let fileName: string = '';
	const pattern: RegExp = /-spn\d+-/; // -spn{order}- is the pattern for series post

	try {
		if (!pattern.test(params.slug)) {
			// not a series post
			post = await import(`../../../../posts/${params.slug}/page.md`);
		} else {
			folder = params.slug.split(pattern)[0];
			fileName = params.slug.split(pattern)[1];
			post = await import(`../../../../series/${folder}/${fileName}.md`);
		}
	} catch (e) {
		error(404, 'post not found');
	}

	if (!folder && !fileName) {
		return {
			content: post.default,
			meta: post.metadata,
		};
	}

	const seriesPost = await getSeriesPostByCoverFolder(folder);

	return {
		content: post.default,
		meta: post.metadata,
		coverFolder: folder,
		fileName,
		seriesPost
	};	
};
