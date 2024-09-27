import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_DVdQurb5.mjs';
import { g as getImage } from './_astro_assets_Bq7r9XFc.mjs';
import 'clsx';

const Astro__1dE976 = new Proxy({"src":"/_astro/developer-morale-graph.CsKBtiCY.png","width":1374,"height":874,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/assets/images/developer-morale-graph.png";
							}
							
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\.\\./\\.\\./assets/images/developer-morale-graph\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "../../assets/images/developer-morale-graph.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1dE976, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<p>It has been more than four years since I landed my first role as a software developer. I still remember not knowing what to expect and feeling anxious about whether I was “good” enough (the dreaded “impostor syndrome,” which never really goes away). As with anything in life, reality turned out to be quite different from my expectations.</p>\n<p>I remember thinking that, to be a great software developer, you needed to know the most obscure algorithms, every method your programming language offered, memorize documentation, be a math nerd, and, above all, code with your eyes closed. Oh, how wrong I was.</p>\n<p>The past few years have taught me that being a great software engineer is about solving problems within constraints—such as deadlines and limited resources. You must generate possible solutions and choose the best option to mitigate future issues. It’s important to be comfortable not knowing everything, as technology is always evolving. The ability to explain code in plain English is also a valuable skill—after all, we are dealing with human beings. Knowledge sharing strengthens the team—documentation is just as important as your codebase, and learning to frame questions in a way your audience will understand can take you far. Keep it SIMPLE and SUCCINCT.</p>\n<p>And yes, things are always breaking. Not because your code is terrible (though it could always be improved), but more often due to someone else’s changes introducing an unintended defect. You start to panic, rush to find the problem, and can’t seem to pinpoint the root cause. Now you start to cry and question your entire existence, wondering if being a farmer (praise to all of them) might have been a better career choice. Then, a miracle happens after a long walk—you find the root cause. Ah yes, line 1344, recent changes committed by one of your teammates caused your code to break. You meet with them, have a lovely conversation, and fix the issue. Now you don’t feel so bad, do you? You’re on top of the world, a true BADASS.</p>\n<p>Here’s a graph depicting the above scenario:</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;../../assets/images/developer-morale-graph.png&#x22;,&#x22;alt&#x22;:&#x22;alt text&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>SOFT SKILLS—yes, don’t be an ass to those who are less experienced than you. You might be the best programmer the world has ever seen, but if you can’t collaborate well with others, you’ll inevitably hurt your team’s performance, and your manager won’t be happy about it. Remember, you are REPLACEABLE. There is always someone smarter than you. So please, learn to be empathetic and guide others toward growth.</p>\n<p>Not everything is perfect, and sometimes management will suck. You’ll often question decisions from higher-ups, and while you may not like it, there’s little you can do about it. Learn to distance yourself from your emotions and adopt a pragmatic mindset. Focus on providing solutions rather than complaints. After all, engineering is a means to an end.</p>\n<p>It has been a truly humbling experience, and I’m still learning new things. However, I’ve picked up a few tricks along the way—like how to get myself unstuck and when to pause and ask for help. Taking care of my mental and physical health have been key ingredients to becoming the best software engineer I can be. This journey is never-ending, with its ups and downs, but I’m grateful for it, as it has allowed me to achieve some personal milestones. And no, AI won’t replace us anytime soon. Will it?</p>");
	

				const frontmatter = {"author":"Andres Alcocer","pubDatetime":"2024-09-26T21:33:31.625Z","title":"What I've learned after working professionally as a software developer for 4+ years","featured":false,"tags":["Software development","Experience"],"description":"Stepping back and reflecting over my years working professionally as a software developer. The good and the bad."};
				const file = "/Users/andresalcocer/Developer/nextjs-blog/verdant-virgo/src/content/blog/Working-professionally-as-a-software-developer.md";
				const url = undefined;
				function rawContent() {
					return "\nIt has been more than four years since I landed my first role as a software developer. I still remember not knowing what to expect and feeling anxious about whether I was \"good\" enough (the dreaded \"impostor syndrome,\" which never really goes away). As with anything in life, reality turned out to be quite different from my expectations.\n\nI remember thinking that, to be a great software developer, you needed to know the most obscure algorithms, every method your programming language offered, memorize documentation, be a math nerd, and, above all, code with your eyes closed. Oh, how wrong I was.\n\nThe past few years have taught me that being a great software engineer is about solving problems within constraints—such as deadlines and limited resources. You must generate possible solutions and choose the best option to mitigate future issues. It’s important to be comfortable not knowing everything, as technology is always evolving. The ability to explain code in plain English is also a valuable skill—after all, we are dealing with human beings. Knowledge sharing strengthens the team—documentation is just as important as your codebase, and learning to frame questions in a way your audience will understand can take you far. Keep it SIMPLE and SUCCINCT.\n\nAnd yes, things are always breaking. Not because your code is terrible (though it could always be improved), but more often due to someone else's changes introducing an unintended defect. You start to panic, rush to find the problem, and can't seem to pinpoint the root cause. Now you start to cry and question your entire existence, wondering if being a farmer (praise to all of them) might have been a better career choice. Then, a miracle happens after a long walk—you find the root cause. Ah yes, line 1344, recent changes committed by one of your teammates caused your code to break. You meet with them, have a lovely conversation, and fix the issue. Now you don't feel so bad, do you? You're on top of the world, a true BADASS.\n\nHere's a graph depicting the above scenario:\n\n![alt text](../../assets/images/developer-morale-graph.png)\n\nSOFT SKILLS—yes, don't be an ass to those who are less experienced than you. You might be the best programmer the world has ever seen, but if you can't collaborate well with others, you'll inevitably hurt your team's performance, and your manager won't be happy about it. Remember, you are REPLACEABLE. There is always someone smarter than you. So please, learn to be empathetic and guide others toward growth.\n\nNot everything is perfect, and sometimes management will suck. You'll often question decisions from higher-ups, and while you may not like it, there’s little you can do about it. Learn to distance yourself from your emotions and adopt a pragmatic mindset. Focus on providing solutions rather than complaints. After all, engineering is a means to an end.\n\nIt has been a truly humbling experience, and I’m still learning new things. However, I’ve picked up a few tricks along the way—like how to get myself unstuck and when to pause and ask for help. Taking care of my mental and physical health have been key ingredients to becoming the best software engineer I can be. This journey is never-ending, with its ups and downs, but I’m grateful for it, as it has allowed me to achieve some personal milestones. And no, AI won’t replace us anytime soon. Will it?\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
