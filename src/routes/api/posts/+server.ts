import { json, type RequestHandler } from '@sveltejs/kit';
import { getPosts, getSeriesPosts, groupPostsByTag } from '$lib/posts';

export const GET: RequestHandler = async ({ url }) => {
	const posts = await getPosts();
	const seriesPosts = await getSeriesPosts();

	// compare dates to get latest post
	const postLatest = posts[0];
	const seriesLatest = seriesPosts[0];
	const latest = postLatest.date > seriesLatest.date ? postLatest : seriesLatest;

	if (url.searchParams.get('latest') == 'true') {
		if (url.searchParams.get('series') == 'true') {
			return json(seriesLatest);
		}
		return json([latest]);
	}

	if (url.searchParams.get('series') == 'true') {
		return json(seriesPosts);
	}

	if (url.searchParams.get('tags') == 'true') {
		return json(await groupPostsByTag());
	}

	return json(posts);
};
