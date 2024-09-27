import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DVdQurb5.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_B-ogVSGt.mjs';
import { $ as $$Header, d as $$Socials, e as $$Hr, c as $$LinkButton, a as $$Footer, b as $$Layout } from '../chunks/Footer_CR7shWIP.mjs';
import { C as Card } from '../chunks/Card_B9dv2bBI.mjs';
import { g as getSortedPosts } from '../chunks/getSortedPosts_CK5rFRMr.mjs';
import { a as SOCIALS, S as SITE } from '../chunks/config_CgJcjdPj.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const recentPosts = sortedPosts.filter(({ data }) => !data.featured);
  console.log("sorted", recentPosts.length);
  const socialCount = SOCIALS.filter((social) => social.active).length;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "class": "astro-j7pv25f6" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "class": "astro-j7pv25f6" })} ${maybeRenderHead()}<main id="main-content" class="astro-j7pv25f6"> <section id="hero" class="astro-j7pv25f6"> <h1 class="astro-j7pv25f6">Welcome!</h1> <p class="astro-j7pv25f6">
Hi there, I am Andres Alcocer. Welcome to my blog, where I rant about
        the software development industry and occasionally share my more obscure
        thoughts.
</p> ${// only display if at least one social link is enabled
  socialCount > 0 && renderTemplate`<div class="social-wrapper astro-j7pv25f6"> <div class="social-links astro-j7pv25f6">Find me in:</div> ${renderComponent($$result2, "Socials", $$Socials, { "class": "astro-j7pv25f6" })} </div>`} </section> ${renderComponent($$result2, "Hr", $$Hr, { "class": "astro-j7pv25f6" })} ${recentPosts.length > 0 && renderTemplate`<section id="recent-posts" class="astro-j7pv25f6"> <h2 class="astro-j7pv25f6">Recent Posts</h2> <ul class="astro-j7pv25f6"> ${recentPosts.map(
    ({ data, slug }, index) => index < SITE.postPerIndex && renderTemplate`${renderComponent($$result2, "Card", Card, { "href": `/posts/${slug}/`, "frontmatter": data, "secHeading": false, "class": "astro-j7pv25f6" })}`
  )} </ul> </section>`} ${posts.length > 10 && renderTemplate`<div class="all-posts-btn-wrapper astro-j7pv25f6"> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "href": "/posts/", "class": "astro-j7pv25f6" }, { "default": ($$result3) => renderTemplate`
All Posts
<svg xmlns="http://www.w3.org/2000/svg" class="astro-j7pv25f6"> <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" class="astro-j7pv25f6"></path> </svg> ` })} </div>`} </main> ${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-j7pv25f6" })} ` })} `;
}, "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/pages/index.astro", void 0);

const $$file = "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
