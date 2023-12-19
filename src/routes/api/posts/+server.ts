import { json, type RequestHandler } from '@sveltejs/kit';
import { getPosts, getSeriesPosts, groupPostsByTag } from '$lib/posts';

export const GET: RequestHandler = async ({ url }) => {
	const posts = await getPosts();
	const seriesPosts = await getSeriesPosts();
	if (url.searchParams.get('latest') == 'true') {
		if (url.searchParams.get('series') == 'true') {
			return json(seriesPosts[0]);
		}
		return json([posts[0]]);
	}

	if (url.searchParams.get('series') == 'true') {
		return json(seriesPosts);
	}

	if (url.searchParams.get('tags') == 'true') {
		return json(await groupPostsByTag());
	 }
	
	return json(posts);
};
