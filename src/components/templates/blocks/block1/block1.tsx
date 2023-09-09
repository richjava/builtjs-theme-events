import Image from "next/image";
import getConfig from "next/config";
import ReactMarkdown from "react-markdown";
import {
  urlForImage,
  widthForImage,
  heightForImage,
  entrySlug,
} from "@/lib/utils";
import { CTAButton } from "@/components/elements";
import { LeftAlignedHeadline } from "@/components/elements";

export default function Block1({ content }: any) {
  if (!content) return <></>;
  const { publicRuntimeConfig } = getConfig();
  let { attributes } = content;

  return (
    <section id="block1" className="template">
      <LeftAlignedHeadline attributes={attributes} />
      <div className="max-w-screen-xl px-4 mx-auto pt-5 pb-24">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-16 lg:mb-0 lg:mr-10 sm:mx-6 lg:ml-12">
            {attributes.leadingSentence && (
              <p className="text-primary-70 leading-7 text-lg mb-8">
                <strong>{attributes.leadingSentence}</strong>
              </p>
            )}
            <ReactMarkdown
              className="text-primary-70 leading-7 pb-12 line-break"
              children={attributes.body.replace(/\n/gi, "&nbsp; \n")}
            />
            {attributes.ctaText && <CTAButton attributes={attributes} />}
          </div>
          <div className="lg:w-1/2 relative">
            <div className="shadow-xl">
              <Image
                className="mx-auto filter-grayscale-1 hover:filter-grayscale-0 transition-filter transition-all duration-500 blur-out"
                height={heightForImage(attributes.image)}
                width={widthForImage(attributes.image)}
                src={urlForImage(attributes.image)}
                alt={entrySlug(attributes)}
                layout="responsive"
                objectFit="cover"
              />
            </div>

            <div className="bg-squares"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
