import { c as create_ssr_component, e as escape, g as add_attribute, i as each, b as spread, d as escape_object } from "./ssr.js";
const MetaTags = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let updatedTitle;
  let { title = "" } = $$props;
  let { titleTemplate = "" } = $$props;
  let { robots = "index,follow" } = $$props;
  let { additionalRobotsProps = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { mobileAlternate = void 0 } = $$props;
  let { languageAlternates = void 0 } = $$props;
  let { twitter = void 0 } = $$props;
  let { facebook = void 0 } = $$props;
  let { openGraph = void 0 } = $$props;
  let { canonical = void 0 } = $$props;
  let { keywords = void 0 } = $$props;
  let { additionalMetaTags = void 0 } = $$props;
  let { additionalLinkTags = void 0 } = $$props;
  let robotsParams = "";
  if (additionalRobotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, maxVideoPreview, noarchive, noimageindex, notranslate, unavailableAfter } = additionalRobotsProps;
    robotsParams = `${nosnippet ? ",nosnippet" : ""}${maxSnippet ? `,max-snippet:${maxSnippet}` : ""}${maxImagePreview ? `,max-image-preview:${maxImagePreview}` : ""}${noarchive ? ",noarchive" : ""}${unavailableAfter ? `,unavailable_after:${unavailableAfter}` : ""}${noimageindex ? ",noimageindex" : ""}${maxVideoPreview ? `,max-video-preview:${maxVideoPreview}` : ""}${notranslate ? ",notranslate" : ""}`;
  }
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.titleTemplate === void 0 && $$bindings.titleTemplate && titleTemplate !== void 0)
    $$bindings.titleTemplate(titleTemplate);
  if ($$props.robots === void 0 && $$bindings.robots && robots !== void 0)
    $$bindings.robots(robots);
  if ($$props.additionalRobotsProps === void 0 && $$bindings.additionalRobotsProps && additionalRobotsProps !== void 0)
    $$bindings.additionalRobotsProps(additionalRobotsProps);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.mobileAlternate === void 0 && $$bindings.mobileAlternate && mobileAlternate !== void 0)
    $$bindings.mobileAlternate(mobileAlternate);
  if ($$props.languageAlternates === void 0 && $$bindings.languageAlternates && languageAlternates !== void 0)
    $$bindings.languageAlternates(languageAlternates);
  if ($$props.twitter === void 0 && $$bindings.twitter && twitter !== void 0)
    $$bindings.twitter(twitter);
  if ($$props.facebook === void 0 && $$bindings.facebook && facebook !== void 0)
    $$bindings.facebook(facebook);
  if ($$props.openGraph === void 0 && $$bindings.openGraph && openGraph !== void 0)
    $$bindings.openGraph(openGraph);
  if ($$props.canonical === void 0 && $$bindings.canonical && canonical !== void 0)
    $$bindings.canonical(canonical);
  if ($$props.keywords === void 0 && $$bindings.keywords && keywords !== void 0)
    $$bindings.keywords(keywords);
  if ($$props.additionalMetaTags === void 0 && $$bindings.additionalMetaTags && additionalMetaTags !== void 0)
    $$bindings.additionalMetaTags(additionalMetaTags);
  if ($$props.additionalLinkTags === void 0 && $$bindings.additionalLinkTags && additionalLinkTags !== void 0)
    $$bindings.additionalLinkTags(additionalLinkTags);
  updatedTitle = titleTemplate ? title ? titleTemplate.replace(/%s/g, title) : title : title;
  {
    if (!robots && additionalRobotsProps) {
      console.warn("additionalRobotsProps cannot be used when robots is set to false");
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-hxkwhf_START -->${updatedTitle ? `${$$result.title = `<title>${escape(updatedTitle)}</title>`, ""}` : ``}${robots !== false ? `<meta name="robots" content="${escape(robots, true) + escape(robotsParams, true)}">` : ``}${description ? `<meta name="description"${add_attribute("content", description, 0)}>` : ``}${canonical ? `<link rel="canonical"${add_attribute("href", canonical, 0)}>` : ``}${keywords?.length ? `<meta name="keywords"${add_attribute("content", keywords.join(", "), 0)}>` : ``}${mobileAlternate ? `<link rel="alternate"${add_attribute("media", mobileAlternate.media, 0)}${add_attribute("href", mobileAlternate.href, 0)}>` : ``}${languageAlternates && languageAlternates.length > 0 ? `${each(languageAlternates, (languageAlternate) => {
    return `<link rel="alternate"${add_attribute("hreflang", languageAlternate.hrefLang, 0)}${add_attribute("href", languageAlternate.href, 0)}>`;
  })}` : ``}${twitter ? `${twitter.cardType ? `<meta name="twitter:card"${add_attribute("content", twitter.cardType, 0)}>` : ``} ${twitter.site ? `<meta name="twitter:site"${add_attribute("content", twitter.site, 0)}>` : ``} ${twitter.handle ? `<meta name="twitter:creator"${add_attribute("content", twitter.handle, 0)}>` : ``} ${twitter.title ? `<meta name="twitter:title"${add_attribute("content", twitter.title, 0)}>` : ``} ${twitter.description ? `<meta name="twitter:description"${add_attribute("content", twitter.description, 0)}>` : ``} ${twitter.image ? `<meta name="twitter:image"${add_attribute("content", twitter.image, 0)}>` : ``} ${twitter.imageAlt ? `<meta name="twitter:image:alt"${add_attribute("content", twitter.imageAlt, 0)}>` : ``}` : ``}${facebook ? `<meta property="fb:app_id"${add_attribute("content", facebook.appId, 0)}>` : ``}${openGraph ? `${openGraph.url || canonical ? `<meta property="og:url"${add_attribute("content", openGraph.url || canonical, 0)}>` : ``} ${openGraph.type ? `<meta property="og:type"${add_attribute("content", openGraph.type.toLowerCase(), 0)}> ${openGraph.type.toLowerCase() === "profile" && openGraph.profile ? `${openGraph.profile.firstName ? `<meta property="profile:first_name"${add_attribute("content", openGraph.profile.firstName, 0)}>` : ``} ${openGraph.profile.lastName ? `<meta property="profile:last_name"${add_attribute("content", openGraph.profile.lastName, 0)}>` : ``} ${openGraph.profile.username ? `<meta property="profile:username"${add_attribute("content", openGraph.profile.username, 0)}>` : ``} ${openGraph.profile.gender ? `<meta property="profile:gender"${add_attribute("content", openGraph.profile.gender, 0)}>` : ``}` : `${openGraph.type.toLowerCase() === "book" && openGraph.book ? `${openGraph.book.authors && openGraph.book.authors.length ? `${each(openGraph.book.authors, (author) => {
    return `<meta property="book:author"${add_attribute("content", author, 0)}>`;
  })}` : ``} ${openGraph.book.isbn ? `<meta property="book:isbn"${add_attribute("content", openGraph.book.isbn, 0)}>` : ``} ${openGraph.book.releaseDate ? `<meta property="book:release_date"${add_attribute("content", openGraph.book.releaseDate, 0)}>` : ``} ${openGraph.book.tags && openGraph.book.tags.length ? `${each(openGraph.book.tags, (tag) => {
    return `<meta property="book:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "article" && openGraph.article ? `${openGraph.article.publishedTime ? `<meta property="article:published_time"${add_attribute("content", openGraph.article.publishedTime, 0)}>` : ``} ${openGraph.article.modifiedTime ? `<meta property="article:modified_time"${add_attribute("content", openGraph.article.modifiedTime, 0)}>` : ``} ${openGraph.article.expirationTime ? `<meta property="article:expiration_time"${add_attribute("content", openGraph.article.expirationTime, 0)}>` : ``} ${openGraph.article.authors && openGraph.article.authors.length ? `${each(openGraph.article.authors, (author) => {
    return `<meta property="article:author"${add_attribute("content", author, 0)}>`;
  })}` : ``} ${openGraph.article.section ? `<meta property="article:section"${add_attribute("content", openGraph.article.section, 0)}>` : ``} ${openGraph.article.tags && openGraph.article.tags.length ? `${each(openGraph.article.tags, (tag) => {
    return `<meta property="article:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``}` : `${openGraph.type.toLowerCase() === "video.movie" || openGraph.type.toLowerCase() === "video.episode" || openGraph.type.toLowerCase() === "video.tv_show" || openGraph.type.toLowerCase() === "video.other" && openGraph.video ? `${openGraph.video?.actors && openGraph.video.actors.length ? `${each(openGraph.video.actors, (actor) => {
    return `${actor.profile ? `<meta property="video:actor"${add_attribute("content", actor.profile, 0)}>` : ``} ${actor.role ? `<meta property="video:actor:role"${add_attribute("content", actor.role, 0)}>` : ``}`;
  })}` : ``} ${openGraph.video?.directors && openGraph.video.directors.length ? `${each(openGraph.video.directors, (director) => {
    return `<meta property="video:director"${add_attribute("content", director, 0)}>`;
  })}` : ``} ${openGraph.video?.writers && openGraph.video.writers.length ? `${each(openGraph.video.writers, (writer) => {
    return `<meta property="video:writer"${add_attribute("content", writer, 0)}>`;
  })}` : ``} ${openGraph.video?.duration ? `<meta property="video:duration"${add_attribute("content", openGraph.video.duration.toString(), 0)}>` : ``} ${openGraph.video?.releaseDate ? `<meta property="video:release_date"${add_attribute("content", openGraph.video.releaseDate, 0)}>` : ``} ${openGraph.video?.tags && openGraph.video.tags.length ? `${each(openGraph.video.tags, (tag) => {
    return `<meta property="video:tag"${add_attribute("content", tag, 0)}>`;
  })}` : ``} ${openGraph.video?.series ? `<meta property="video:series"${add_attribute("content", openGraph.video.series, 0)}>` : ``}` : ``}`}`}`}` : ``} ${openGraph.title || updatedTitle ? `<meta property="og:title"${add_attribute("content", openGraph.title || updatedTitle, 0)}>` : ``} ${openGraph.description || description ? `<meta property="og:description"${add_attribute("content", openGraph.description || description, 0)}>` : ``} ${openGraph.images && openGraph.images.length ? `${each(openGraph.images, (image) => {
    return `<meta property="og:image"${add_attribute("content", image.url, 0)}> ${image.alt ? `<meta property="og:image:alt"${add_attribute("content", image.alt, 0)}>` : ``} ${image.width ? `<meta property="og:image:width"${add_attribute("content", image.width.toString(), 0)}>` : ``} ${image.height ? `<meta property="og:image:height"${add_attribute("content", image.height.toString(), 0)}>` : ``} ${image.secureUrl ? `<meta property="og:image:secure_url"${add_attribute("content", image.secureUrl.toString(), 0)}>` : ``} ${image.type ? `<meta property="og:image:type"${add_attribute("content", image.type.toString(), 0)}>` : ``}`;
  })}` : ``} ${openGraph.videos && openGraph.videos.length ? `${each(openGraph.videos, (video) => {
    return `<meta property="og:video"${add_attribute("content", video.url, 0)}> ${video.width ? `<meta property="og:video:width"${add_attribute("content", video.width.toString(), 0)}>` : ``} ${video.height ? `<meta property="og:video:height"${add_attribute("content", video.height.toString(), 0)}>` : ``} ${video.secureUrl ? `<meta property="og:video:secure_url"${add_attribute("content", video.secureUrl.toString(), 0)}>` : ``} ${video.type ? `<meta property="og:video:type"${add_attribute("content", video.type.toString(), 0)}>` : ``}`;
  })}` : ``} ${openGraph.audio && openGraph.audio.length ? `${each(openGraph.audio, (audio) => {
    return `<meta property="og:audio"${add_attribute("content", audio.url, 0)}> ${audio.secureUrl ? `<meta property="og:audio:secure_url"${add_attribute("content", audio.secureUrl.toString(), 0)}>` : ``} ${audio.type ? `<meta property="og:audio:type"${add_attribute("content", audio.type.toString(), 0)}>` : ``}`;
  })}` : ``} ${openGraph.locale ? `<meta property="og:locale"${add_attribute("content", openGraph.locale, 0)}>` : ``} ${openGraph.siteName ? `<meta property="og:site_name"${add_attribute("content", openGraph.siteName, 0)}>` : ``}` : ``}${additionalMetaTags && Array.isArray(additionalMetaTags) ? `${each(additionalMetaTags, (tag) => {
    return `<meta${spread([escape_object(tag)], {})}>`;
  })}` : ``}${additionalLinkTags?.length ? `${each(additionalLinkTags, (tag) => {
    return `<link${spread([escape_object(tag)], {})}>`;
  })}` : ``}<!-- HEAD_svelte-hxkwhf_END -->`, ""}`;
});
export {
  MetaTags as M
};
