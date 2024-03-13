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

export default function Block6({ content }: any) {
  if (!content) return <></>;
  let { data } = content;
  const serializers = {
    types: {
      block: (props: { children: ReactNode }) => (
        <p className="text-primary-10 mb-20 lg:max-w-2xl sm:pr-4 leading-7 line-break">
          {props.children}
        </p>
      ),
    },
  };
  return (
    <section id="block6" className="cta-bg-image pt-32 mb-24 template">
      <div className="flex items-start flex-col lg:flex-row relative">
        <div className="w-full lg:w-2/5 lg:mt-17">
          <div className="hidden lg:block cta-generic-img filter-grayscale-1 hover:filter-grayscale-0 w-full home-about-image object-cover">
            <Image
              height={heightForImage(data.image)}
              width={widthForImage(data.image)}
              src={urlForImage(data.image)}
              alt={entrySlug(data)}
            />
          </div>
        </div>
        <div className="px-4 py-12 lg:pt-10 lg:pb-32 xl:pt-32 xl:pb-24 lg:px-10 xl:ml-8 w-full lg:w-3/5">
          <p className="pre-headline-white">{data.preheading}</p>
          <h2 className="text-white mb-10">{data.heading}</h2>
          <div className="sm:ml-6 lg:ml-12">
            <p className="text-white text-lg mb-6 lg:max-w-2xl sm:pr-4 leading-8">
              {data.blurb}
            </p>
            <BlockContent blocks={data.body} serializers={serializers} />
            <div className="inline-flex items-center group">
              <CTAButton data={data} type="primaryBg" />
            </div>
          </div>
        </div>
        <div className="bg-secondary absolute top-0 right-0 w-full lg:w-4/5 h-full lg:-mt-16 z-index--1"></div>
      </div>
    </section>
  );
}
