import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, f as renderSlot, u as unescapeHTML } from '../chunks/astro/server_DVdQurb5.mjs';
import 'kleur/colors';
import { S as SITE } from '../chunks/config_CgJcjdPj.mjs';
import { $ as $$Breadcrumbs } from '../chunks/Breadcrumbs_D_MLpyp5.mjs';
import { b as $$Layout, $ as $$Header, a as $$Footer } from '../chunks/Footer_CR7shWIP.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.migohacks.com/");
const $$AboutLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${frontmatter.title} | ${SITE.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "activeNav": "about" })} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, {})} ${maybeRenderHead()}<main id="main-content"> <section id="about" class="prose mb-28 max-w-3xl prose-img:border-0"> <h1 class="text-2xl tracking-wider sm:text-3xl">${frontmatter.title}</h1> ${renderSlot($$result2, $$slots["default"])} </section> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/layouts/AboutLayout.astro", void 0);

const html = "<p>I currently live in Durham, NC, working remotely for a software company based in Raleigh, NC. I started coding when I was introduced to programming in college with JAVA (yuck). Ever since, I’ve been in love with the idea of creating things out of nowhere. When I’m not programming, I enjoy playing soccer, grilling, drawing, traveling, and reading Russian literature.</p>\n<p>Most of my experience is in Web Development (React, Nodejs, TypeScript). I’ve recently been getting familiar with C# and .Net as this is what we use at my current company.</p>\n<h2 id=\"why-do-you-blog\">Why do you blog?</h2>\n<p>Mostly to document what I’ve learned and the projects I’m working on. I research things I find fascinating, then document my findings in a public post. Occasionally, I’ll write about topics unrelated to tech, with the hope that others will find them helpful, relevant, or interesting.</p>\n<h2 id=\"can-you-build-my-dream-app\">Can you build my dream app?</h2>\n<p>It depends. If your idea excites me or aligns with my interests, I’d be happy to consider it.</p>";

				const frontmatter = {"layout":"../layouts/AboutLayout.astro","title":"About"};
				const file = "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "\nI currently live in Durham, NC, working remotely for a software company based in Raleigh, NC. I started coding when I was introduced to programming in college with JAVA (yuck). Ever since, I’ve been in love with the idea of creating things out of nowhere. When I'm not programming, I enjoy playing soccer, grilling, drawing, traveling, and reading Russian literature.\n\nMost of my experience is in Web Development (React, Nodejs, TypeScript). I've recently been getting familiar with C# and .Net as this is what we use at my current company.\n\n## Why do you blog?\n\nMostly to document what I’ve learned and the projects I’m working on. I research things I find fascinating, then document my findings in a public post. Occasionally, I’ll write about topics unrelated to tech, with the hope that others will find them helpful, relevant, or interesting.\n\n## Can you build my dream app?\n\nIt depends. If your idea excites me or aligns with my interests, I’d be happy to consider it.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"why-do-you-blog","text":"Why do you blog?"},{"depth":2,"slug":"can-you-build-my-dream-app","text":"Can you build my dream app?"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
