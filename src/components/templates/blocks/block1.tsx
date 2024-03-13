import Image from "next/image";
import { ReactNode } from "react";
import BlockContent from "@sanity/block-content-to-react";
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
  let { data } = content;
  const serializers = {
    types: {
      block: (props: { children: ReactNode }) => (
        <p className="text-primary-70 leading-7 pb-12 line-break">
          {props.children}
        </p>
      ),
    },
  };
  return (
    <section id="block1" className="template">
      <LeftAlignedHeadline data={data} />
      <div className="max-w-screen-xl px-4 mx-auto pt-5 pb-24">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 mb-16 lg:mb-0 lg:mr-10 sm:mx-6 lg:ml-12">
            {data.leadingSentence && (
              <p className="text-primary-70 leading-7 text-lg mb-8">
                <strong>{data.leadingSentence}</strong>
              </p>
            )}
            <BlockContent
              blocks={data.body}
              serializers={serializers}
            />
            {data.ctaText && <CTAButton data={data} />}
          </div>
          <div className="lg:w-1/2 relative">
            <div className="shadow-xl">
              <Image
                className="mx-auto filter-grayscale-1 hover:filter-grayscale-0 transition-filter transition-all duration-500 blur-out"
                height={heightForImage(data.image)}
                width={widthForImage(data.image)}
                src={urlForImage(data.image)}
                alt={entrySlug(data)}
              />
            </div>

            <div className="bg-squares"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
