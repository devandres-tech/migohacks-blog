import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, F as Fragment, u as unescapeHTML, e as renderTransition } from '../../chunks/astro/server_DVdQurb5.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_B-ogVSGt.mjs';
import { c as $$LinkButton, s as socialIcons, $ as $$Header, a as $$Footer, b as $$Layout } from '../../chunks/Footer_CR7shWIP.mjs';
import { $ as $$Tag } from '../../chunks/Tag_BBfArkTG.mjs';
import { D as Datetime } from '../../chunks/Datetime_dqSy64tx.mjs';
import { s as slugifyStr } from '../../chunks/slugify_CvQuO4Tx.mjs';
/* empty css                                    */
import { S as SITE } from '../../chunks/config_CgJcjdPj.mjs';
/* empty css                                    */
import { g as getSortedPosts } from '../../chunks/getSortedPosts_CK5rFRMr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://www.migohacks.com/");
const $$ShareLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ShareLinks;
  const URL = Astro2.url;
  const shareLinks = [
    {
      name: "WhatsApp",
      href: "https://wa.me/?text=",
      linkTitle: `Share this post via WhatsApp`
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/sharer.php?u=",
      linkTitle: `Share this post on Facebook`
    },
    {
      name: "Twitter",
      href: "https://twitter.com/intent/tweet?url=",
      linkTitle: `Tweet this post`
    },
    {
      name: "Telegram",
      href: "https://t.me/share/url?url=",
      linkTitle: `Share this post via Telegram`
    },
    {
      name: "Pinterest",
      href: "https://pinterest.com/pin/create/button/?url=",
      linkTitle: `Share this post on Pinterest`
    },
    {
      name: "Mail",
      href: "mailto:?subject=See%20this%20post&body=",
      linkTitle: `Share this post via email`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`social-icons astro-wkojbtzc`, "class")}> <span class="italic astro-wkojbtzc">Share this post on:</span> <div class="text-center astro-wkojbtzc"> ${shareLinks.map((social) => renderTemplate`${renderComponent($$result, "LinkButton", $$LinkButton, { "href": `${social.href + URL}`, "className": "link-button astro-wkojbtzc", "title": social.linkTitle }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(socialIcons[social.name])}` })} <span class="sr-only astro-wkojbtzc">${social.linkTitle}</span> ` })}`)} </div> </div> `;
}, "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/components/ShareLinks.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.migohacks.com/");
const $$PostDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostDetails;
  const { post, posts } = Astro2.props;
  const {
    title,
    author,
    description,
    ogImage,
    canonicalURL,
    pubDatetime,
    modDatetime,
    tags
  } = post.data;
  const { Content } = await post.render();
  const ogImageUrl = typeof ogImage === "string" ? ogImage : ogImage?.src;
  const ogUrl = new URL(
    ogImageUrl ?? `/posts/${slugifyStr(title)}.png`,
    Astro2.url.origin
  ).href;
  const layoutProps = {
    title: `${title} | ${SITE.title}`,
    author,
    description,
    pubDatetime,
    modDatetime,
    canonicalURL,
    ogImage: ogUrl,
    scrollSmooth: true
  };
  const allPosts = posts.map(({ data: { title: title2 }, slug }) => ({
    slug,
    title: title2
  }));
  const currentPostIndex = allPosts.findIndex((a) => a.slug === post.slug);
  const prevPost = currentPostIndex !== 0 ? allPosts[currentPostIndex - 1] : null;
  const nextPost = currentPostIndex !== allPosts.length ? allPosts[currentPostIndex + 1] : null;
  return renderTemplate(_a || (_a = __template(["", '  <script data-astro-rerun>\n  /** Create a progress indicator\n   *  at the top */\n  function createProgressBar() {\n    // Create the main container div\n    const progressContainer = document.createElement("div");\n    progressContainer.className =\n      "progress-container fixed top-0 z-10 h-1 w-full bg-skin-fill";\n\n    // Create the progress bar div\n    const progressBar = document.createElement("div");\n    progressBar.className = "progress-bar h-1 w-0 bg-skin-accent";\n    progressBar.id = "myBar";\n\n    // Append the progress bar to the progress container\n    progressContainer.appendChild(progressBar);\n\n    // Append the progress container to the document body or any other desired parent element\n    document.body.appendChild(progressContainer);\n  }\n  createProgressBar();\n\n  /** Update the progress bar\n   *  when user scrolls */\n  function updateScrollProgress() {\n    document.addEventListener("scroll", () => {\n      const winScroll =\n        document.body.scrollTop || document.documentElement.scrollTop;\n      const height =\n        document.documentElement.scrollHeight -\n        document.documentElement.clientHeight;\n      const scrolled = (winScroll / height) * 100;\n      if (document) {\n        const myBar = document.getElementById("myBar");\n        if (myBar) {\n          myBar.style.width = scrolled + "%";\n        }\n      }\n    });\n  }\n  updateScrollProgress();\n\n  /** Attaches links to headings in the document,\n   *  allowing sharing of sections easily */\n  function addHeadingLinks() {\n    const headings = Array.from(\n      document.querySelectorAll("h2, h3, h4, h5, h6")\n    );\n    for (const heading of headings) {\n      heading.classList.add("group");\n      const link = document.createElement("a");\n      link.className =\n        "heading-link ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100";\n      link.href = "#" + heading.id;\n\n      const span = document.createElement("span");\n      span.ariaHidden = "true";\n      span.innerText = "#";\n      link.appendChild(span);\n      heading.appendChild(link);\n    }\n  }\n  addHeadingLinks();\n\n  /** Attaches copy buttons to code blocks in the document,\n   * allowing users to copy code easily. */\n  function attachCopyButtons() {\n    const copyButtonLabel = "Copy";\n    const codeBlocks = Array.from(document.querySelectorAll("pre"));\n\n    for (const codeBlock of codeBlocks) {\n      const wrapper = document.createElement("div");\n      wrapper.style.position = "relative";\n\n      const copyButton = document.createElement("button");\n      copyButton.className =\n        "copy-code absolute right-3 -top-3 rounded bg-skin-card px-2 py-1 text-xs leading-4 text-skin-base font-medium";\n      copyButton.innerHTML = copyButtonLabel;\n      codeBlock.setAttribute("tabindex", "0");\n      codeBlock.appendChild(copyButton);\n\n      // wrap codebock with relative parent element\n      codeBlock?.parentNode?.insertBefore(wrapper, codeBlock);\n      wrapper.appendChild(codeBlock);\n\n      copyButton.addEventListener("click", async () => {\n        await copyCode(codeBlock, copyButton);\n      });\n    }\n\n    async function copyCode(block, button) {\n      const code = block.querySelector("code");\n      const text = code?.innerText;\n\n      await navigator.clipboard.writeText(text ?? "");\n\n      // visual feedback that task is completed\n      button.innerText = "Copied";\n\n      setTimeout(() => {\n        button.innerText = copyButtonLabel;\n      }, 700);\n    }\n  }\n  attachCopyButtons();\n\n  /** Scrolls the document to the top when\n   * the "Back to Top" button is clicked. */\n  function backToTop() {\n    document.querySelector("#back-to-top")?.addEventListener("click", () => {\n      document.body.scrollTop = 0; // For Safari\n      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera\n    });\n  }\n  backToTop();\n\n  /* Go to page start after page swap */\n  document.addEventListener("astro:after-swap", () =>\n    window.scrollTo({ left: 0, top: 0, behavior: "instant" })\n  );\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { ...layoutProps, "class": "astro-vj4tpspi" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "class": "astro-vj4tpspi" })} ${maybeRenderHead()}<div class="mx-auto flex w-full max-w-3xl justify-start px-2 astro-vj4tpspi"> <button class="focus-outline mb-2 mt-8 flex hover:opacity-75 astro-vj4tpspi" onclick="(() => (history.length === 1) ? window.location = '/' : history.back())()"> <svg xmlns="http://www.w3.org/2000/svg" class="astro-vj4tpspi"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" class="astro-vj4tpspi"></path> </svg><span class="astro-vj4tpspi">Go back</span> </button> </div> <main id="main-content" class="astro-vj4tpspi"> <h1 class="post-title astro-vj4tpspi"${addAttribute(renderTransition($$result2, "plk3gbjq", "", slugifyStr(title)), "data-astro-transition-scope")}>${title}</h1> ${renderComponent($$result2, "Datetime", Datetime, { "pubDatetime": pubDatetime, "modDatetime": modDatetime, "size": "lg", "className": "my-2 astro-vj4tpspi" })} <article id="article" class="prose mx-auto mt-8 max-w-3xl astro-vj4tpspi"> ${renderComponent($$result2, "Content", Content, { "class": "astro-vj4tpspi" })} </article> <ul class="my-8 astro-vj4tpspi"> ${tags.map((tag) => renderTemplate`${renderComponent($$result2, "Tag", $$Tag, { "tag": slugifyStr(tag), "class": "astro-vj4tpspi" })}`)} </ul> <div class="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row-reverse sm:items-end sm:gap-4 astro-vj4tpspi"> <button id="back-to-top" class="focus-outline whitespace-nowrap py-1 hover:opacity-75 astro-vj4tpspi"> <svg xmlns="http://www.w3.org/2000/svg" class="rotate-90 astro-vj4tpspi"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" class="astro-vj4tpspi"></path> </svg> <span class="astro-vj4tpspi">Back to Top</span> </button> ${renderComponent($$result2, "ShareLinks", $$ShareLinks, { "class": "astro-vj4tpspi" })} </div> <hr class="my-6 border-dashed astro-vj4tpspi"> <!-- Previous/Next Post Buttons --> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 astro-vj4tpspi"> ${prevPost && renderTemplate`<a${addAttribute(`/posts/${prevPost.slug}`, "href")} class="flex w-full gap-1 hover:opacity-75 astro-vj4tpspi"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left flex-none astro-vj4tpspi"> ${renderComponent($$result2, "Fragment", Fragment, { "class": "astro-vj4tpspi" }, { "default": ($$result3) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-vj4tpspi"></path> <path d="M15 6l-6 6l6 6" class="astro-vj4tpspi"></path> ` })} </svg> <div class="astro-vj4tpspi"> <span class="astro-vj4tpspi">Previous Post</span> <div class="text-sm text-skin-accent/85 astro-vj4tpspi">${prevPost.title}</div> </div> </a>`} ${nextPost && renderTemplate`<a${addAttribute(`/posts/${nextPost.slug}`, "href")} class="flex w-full justify-end gap-1 text-right hover:opacity-75 sm:col-start-2 astro-vj4tpspi"> <div class="astro-vj4tpspi"> <span class="astro-vj4tpspi">Next Post</span> <div class="text-sm text-skin-accent/85 astro-vj4tpspi">${nextPost.title}</div> </div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right flex-none astro-vj4tpspi"> ${renderComponent($$result2, "Fragment", Fragment, { "class": "astro-vj4tpspi" }, { "default": ($$result3) => renderTemplate` <path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-vj4tpspi"></path> <path d="M9 6l6 6l-6 6" class="astro-vj4tpspi"></path> ` })} </svg> </a>`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "class": "astro-vj4tpspi" })} ` }));
}, "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/layouts/PostDetails.astro", "self");

const $$Astro = createAstro("https://www.migohacks.com/");
async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const postResult = posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
  return postResult;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { post } = Astro2.props;
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  return renderTemplate`${renderComponent($$result, "PostDetails", $$PostDetails, { "post": post, "posts": sortedPosts })}`;
}, "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/pages/posts/[slug]/index.astro", void 0);

const $$file = "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/pages/posts/[slug]/index.astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
