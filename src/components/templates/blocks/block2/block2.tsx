import Image from "next/image";
import { ReactNode } from "react";
import getConfig from "next/config";
import BlockContent from "@sanity/block-content-to-react";
import {
  urlForImage,
  widthForImage,
  heightForImage,
  entrySlug,
} from "@/lib/utils";
import { CTAButton } from "@/components/elements";

export default function Block2({ content }: any) {
  if (!content) return <></>;
  const { publicRuntimeConfig } = getConfig();
  let { data } = content;
  const serializers = {
    types: {
      block: (props: { children: ReactNode }) => (
        <p className="text-primary-70 leading-7 mb-12 line-break">
          {props.children}
        </p>
      ),
    },
  };
  return (
    <section id="block2" className="pt-24 pb-16 template">
      <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto">
        <div className="lg:w-1/2 relative">
          <Image
            className="shadow-xl mx-auto filter-grayscale-1 hover:filter-grayscale-0 transition-filter transition-all duration-500 blur-out"
            height={heightForImage(data.image)}
            width={widthForImage(data.image)}
            src={urlForImage(data.image)}
            alt={entrySlug(data)}
          />
        </div>
        <div className="lg:w-1/2 sm:mx-6 lg:ml-12 lg:mb-0 mt-12 lg:mt-0">
          <BlockContent
            blocks={data.body}
            serializers={serializers}
          />
          <CTAButton data={data} />
        </div>
      </div>
    </section>
  );
}
