import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_eEfhJntv.mjs';
import { manifest } from './manifest_BsP-5zHX.mjs';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/og.png.astro.mjs');
const _page4 = () => import('./pages/posts/_slug_.png.astro.mjs');
const _page5 = () => import('./pages/posts/_page_.astro.mjs');
const _page6 = () => import('./pages/posts/_slug_.astro.mjs');
const _page7 = () => import('./pages/posts/_---page_.astro.mjs');
const _page8 = () => import('./pages/robots.txt.astro.mjs');
const _page9 = () => import('./pages/rss.xml.astro.mjs');
const _page10 = () => import('./pages/search.astro.mjs');
const _page11 = () => import('./pages/tags/_tag_/_page_.astro.mjs');
const _page12 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page13 = () => import('./pages/tags.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.md", _page2],
    ["src/pages/og.png.ts", _page3],
    ["src/pages/posts/[slug]/index.png.ts", _page4],
    ["src/pages/posts/[page].astro", _page5],
    ["src/pages/posts/[slug]/index.astro", _page6],
    ["src/pages/posts/[...page].astro", _page7],
    ["src/pages/robots.txt.ts", _page8],
    ["src/pages/rss.xml.ts", _page9],
    ["src/pages/search.astro", _page10],
    ["src/pages/tags/[tag]/[page].astro", _page11],
    ["src/pages/tags/[tag]/[...page].astro", _page12],
    ["src/pages/tags/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "f888eb5d-642d-43a3-9300-a25ac0416379",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
