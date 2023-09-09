import Head from "next/head";
import getConfig from "next/config";
import { urlForImage } from "@/lib/utils";

export default function Seo({ content }:any) {
  let { attributes=null } = { ...content };
  const { publicRuntimeConfig } = getConfig();
  let shareImage = urlForImage(attributes?.shareImage);
  return (
    <>
      {attributes && (
        <Head>
          {attributes.title && (
            <>
              <title>{attributes.title}</title>
              <meta property="og:title" content={attributes.title} />
              <meta name="twitter:title" content={attributes.title} />
            </>
          )}
          {attributes.description && (
            <>
              <meta name="description" content={attributes.description} />
              <meta
                property="og:description"
                content={attributes.description}
              />
              <meta
                name="twitter:description"
                content={attributes.description}
              />
            </>
          )}
          {attributes.shareImage && (
            <>
              <meta property="og:image" content={shareImage} />
              <meta name="twitter:image" content={shareImage} />
              <meta name="image" content={shareImage} />
            </>
          )}
          {attributes.article && <meta property="og:type" content="article" />}
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      )}
    </>
  );
}
