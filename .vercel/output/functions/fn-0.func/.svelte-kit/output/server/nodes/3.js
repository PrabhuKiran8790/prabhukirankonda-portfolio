import * as universal from '../entries/pages/about/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.ts";
export const imports = ["_app/immutable/nodes/3.xlxe3959.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/scheduler.m8nR5Aoa.js","_app/immutable/chunks/index.DmaBKroe.js"];
export const stylesheets = ["_app/immutable/assets/marked.DsAFrLax.css"];
export const fonts = [];
