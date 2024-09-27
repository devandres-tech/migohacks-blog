import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../../../chunks/astro/server_DVdQurb5.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../../chunks/_astro_content_B-ogVSGt.mjs';
import { g as getPostsByTag, $ as $$TagPosts } from '../../../chunks/getPostsByTag_BpXU1dWN.mjs';
import { g as getUniqueTags } from '../../../chunks/getUniqueTags_ADmQALdg.mjs';
import { S as SITE } from '../../../chunks/config_CgJcjdPj.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://www.migohacks.com/");
async function getStaticPaths({ paginate }) {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);
  return tags.flatMap(({ tag, tagName }) => {
    const tagPosts = getPostsByTag(posts, tag);
    return paginate(tagPosts, {
      params: { tag },
      props: { tagName },
      pageSize: SITE.postPerPage
    });
  });
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const params = Astro2.params;
  const { tag } = params;
  const { page, tagName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "TagPosts", $$TagPosts, { "page": page, "tag": tag, "tagName": tagName })}`;
}, "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/pages/tags/[tag]/[...page].astro", void 0);

const $$file = "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/pages/tags/[tag]/[...page].astro";
const $$url = "/tags/[tag]/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
