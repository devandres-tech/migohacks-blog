import rss from '@astrojs/rss';
import { g as getCollection } from '../chunks/_astro_content_B-ogVSGt.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_CK5rFRMr.mjs';
import { S as SITE } from '../chunks/config_CgJcjdPj.mjs';
export { renderers } from '../renderers.mjs';

async function GET() {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data, slug }) => ({
      link: `posts/${slug}/`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.modDatetime ?? data.pubDatetime)
    }))
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
