import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderTransition } from './astro/server_DVdQurb5.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer, b as $$Layout } from './Footer_CR7shWIP.mjs';
import { $ as $$Main } from './Main_BW6nK7OH.mjs';
import { C as Card } from './Card_B9dv2bBI.mjs';
import { $ as $$Pagination } from './Pagination_By5pcCoF.mjs';
import { S as SITE } from './config_CgJcjdPj.mjs';
/* empty css                         */
import { g as getSortedPosts } from './getSortedPosts_CK5rFRMr.mjs';
import { a as slugifyAll } from './slugify_CvQuO4Tx.mjs';

const $$Astro = createAstro("https://www.migohacks.com/");
const $$TagPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TagPosts;
  const { page, tag, tagName } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Tag: ${tagName} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "tags" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": [`Tag:`, `${tagName}`], "titleTransition": tag, "pageDesc": `All the articles with the tag "${tagName}".` }, { "default": ($$result3) => renderTemplate`  ${maybeRenderHead()}<ul> ${page.data.map(({ data, slug }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data })}`)} </ul> `, "title": ($$result3) => renderTemplate`<h1${addAttribute(renderTransition($$result3, "vfrq7tp3", "", tag), "data-astro-transition-scope")}>${`Tag:${tag}`}</h1>` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": page.lastPage > 1 })} ` })}`;
}, "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/layouts/TagPosts.astro", "self");

const getPostsByTag = (posts, tag) => getSortedPosts(
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag))
);

export { $$TagPosts as $, getPostsByTag as g };
