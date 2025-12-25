import Head from "next/head";

export default function SEO({ seoData }) {
  if (!seoData) return null;

  const {
    metadata = {},
    openGraph = {},
    twitter = {},
    schemas = [],
    alternateLanguages = [],
    additionalMetaTags = []
  } = seoData;

  return (
    <Head>
      {metadata.title && <title>{metadata.title}</title>}
      {metadata.description && (
        <meta name="description" content={metadata.description} />
      )}
      {metadata.keywords && (
        <meta name="keywords" content={metadata.keywords} />
      )}
      {metadata.robots && (
        <meta name="robots" content={metadata.robots} />
      )}
      {metadata.viewport && (
        <meta name="viewport" content={metadata.viewport} />
      )}
      {metadata.author && (
        <meta name="author" content={metadata.author} />
      )}
      {metadata.publisher && (
        <meta name="publisher" content={metadata.publisher} />
      )}
      {metadata.language && (
        <meta name="language" content={metadata.language} />
      )}

      {metadata.canonical && (
        <link rel="canonical" href={metadata.canonical} />
      )}

      {openGraph.type && (
        <meta property="og:type" content={openGraph.type} />
      )}
      {openGraph.locale && (
        <meta property="og:locale" content={openGraph.locale} />
      )}
      {openGraph.url && (
        <meta property="og:url" content={openGraph.url} />
      )}
      {openGraph.siteName && (
        <meta property="og:site_name" content={openGraph.siteName} />
      )}
      {openGraph.title && (
        <meta property="og:title" content={openGraph.title} />
      )}
      {openGraph.description && (
        <meta property="og:description" content={openGraph.description} />
      )}
      {openGraph.image && (
        <>
          <meta property="og:image" content={openGraph.image} />
          {openGraph.imageWidth && (
            <meta property="og:image:width" content={openGraph.imageWidth} />
          )}
          {openGraph.imageHeight && (
            <meta property="og:image:height" content={openGraph.imageHeight} />
          )}
          {openGraph.imageAlt && (
            <meta property="og:image:alt" content={openGraph.imageAlt} />
          )}
        </>
      )}

      {twitter.card && (
        <meta name="twitter:card" content={twitter.card} />
      )}
      {twitter.site && (
        <meta name="twitter:site" content={twitter.site} />
      )}
      {twitter.creator && (
        <meta name="twitter:creator" content={twitter.creator} />
      )}
      {twitter.title && (
        <meta name="twitter:title" content={twitter.title} />
      )}
      {twitter.description && (
        <meta name="twitter:description" content={twitter.description} />
      )}
      {twitter.image && (
        <>
          <meta name="twitter:image" content={twitter.image} />
          {twitter.imageAlt && (
            <meta name="twitter:image:alt" content={twitter.imageAlt} />
          )}
        </>
      )}

      {alternateLanguages && alternateLanguages.length > 0 &&
        alternateLanguages.map((lang, index) => (
          <link
            key={index}
            rel="alternate"
            hrefLang={lang.hreflang}
            href={lang.href}
          />
        ))
      }

      {additionalMetaTags && additionalMetaTags.length > 0 &&
        additionalMetaTags.map((tag, index) => (
          <meta key={index} name={tag.name} content={tag.content} />
        ))
      }

      {schemas && schemas.length > 0 &&
        schemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))
      }

      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Head>
  );
}