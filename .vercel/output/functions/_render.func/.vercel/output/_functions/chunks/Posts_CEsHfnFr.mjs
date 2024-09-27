import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from './astro/server_DVdQurb5.mjs';
import 'kleur/colors';
import { $ as $$Header, a as $$Footer, b as $$Layout } from './Footer_CR7shWIP.mjs';
import { $ as $$Main } from './Main_BW6nK7OH.mjs';
import { $ as $$Pagination } from './Pagination_By5pcCoF.mjs';
import { C as Card } from './Card_B9dv2bBI.mjs';
import { S as SITE } from './config_CgJcjdPj.mjs';

const $$Astro = createAstro("https://www.migohacks.com/");
const $$Posts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Posts | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "posts" })} ${renderComponent($$result2, "Main", $$Main, { "pageTitle": "Posts", "pageDesc": "All the articles I've posted." }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<ul> ${page.data.map(({ data, slug }) => renderTemplate`${renderComponent($$result3, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data })}`)} </ul> ` })} ${renderComponent($$result2, "Pagination", $$Pagination, { "page": page })} ${renderComponent($$result2, "Footer", $$Footer, { "noMarginTop": page.lastPage > 1 })} ` })}`;
}, "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/layouts/Posts.astro", void 0);

export { $$Posts as $ };
