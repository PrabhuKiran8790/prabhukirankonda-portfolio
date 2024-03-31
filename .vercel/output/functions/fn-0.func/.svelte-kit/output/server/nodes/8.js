import * as server from '../entries/pages/tags/_tag_/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tags/_tag_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/tags/[tag]/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.HwsOn80S.js","_app/immutable/chunks/8.mPDhRuym.js","_app/immutable/chunks/scheduler.m8nR5Aoa.js","_app/immutable/chunks/index.DmaBKroe.js","_app/immutable/chunks/index.CF6Y6_XD.js","_app/immutable/chunks/entry.BJbXkuHH.js","_app/immutable/chunks/marked.esm.RWbm33ss.js","_app/immutable/chunks/ul.BG4kpopR.js","_app/immutable/chunks/theme-toggle.BuOcpD-o.js","_app/immutable/chunks/events.Dz27Pk1Q.js","_app/immutable/chunks/stores.Cg9KK6Dv.js","_app/immutable/chunks/badge.TtU7kCQ2.js","_app/immutable/chunks/masonry.DAeE1XoD.js"];
export const stylesheets = ["_app/immutable/assets/marked.DsAFrLax.css"];
export const fonts = [];
