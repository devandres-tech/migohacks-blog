import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent } from '../../chunks/astro/server_DVdQurb5.mjs';
import 'kleur/colors';
import { S as SITE } from '../../chunks/config_CgJcjdPj.mjs';
import { $ as $$Posts } from '../../chunks/Posts_CEsHfnFr.mjs';
import { g as getCollection } from '../../chunks/_astro_content_B-ogVSGt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://www.migohacks.com/");
const getStaticPaths = async ({ paginate }) => {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  return paginate(posts, { pageSize: SITE.postPerPage });
};
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Posts", $$Posts, { "page": page })}`;
}, "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/pages/posts/[...page].astro", void 0);

const $$file = "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/pages/posts/[...page].astro";
const $$url = "/posts/[...page]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
