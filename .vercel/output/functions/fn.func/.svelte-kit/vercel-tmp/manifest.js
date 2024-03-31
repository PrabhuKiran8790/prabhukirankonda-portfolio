export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","FastAPI_MongDB.png","GFPGAN-min.png","GFPGAN.png","PDF_Assistant.png","Prabhu Kiran Konda Resume.pdf","corgi-ai-dashboard.png","dall-e-svelte-min.png","dall-e-svelte.png","github-dark.json","linear-reg-scratch-dark.png","linear-reg-scratch.png","min-dark.json","moonlight-2-theme.json","multigpt.png","og.png","p-favicon.png","svelte-todo.png","sveltekit-portfolio-min.png","sveltekit-portfolio.png","twitter-card.png"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cg-58uZ4.js","app":"_app/immutable/entry/app.sc7v8tXd.js","imports":["_app/immutable/entry/start.Cg-58uZ4.js","_app/immutable/chunks/entry.BJbXkuHH.js","_app/immutable/chunks/scheduler.m8nR5Aoa.js","_app/immutable/entry/app.sc7v8tXd.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.m8nR5Aoa.js","_app/immutable/chunks/index.DmaBKroe.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
