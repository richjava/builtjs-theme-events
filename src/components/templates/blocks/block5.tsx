import Image from "next/image";
import { ReactNode } from "react";
import BlockContent from "@sanity/block-content-to-react";
import { urlForImage, entrySlug } from "@/lib/utils";
import { CTAButton } from "@/components/elements";

export default function Block5({ content }: any) {
  if (!content) return <></>;
  let { data } = content;
  const serializers = {
    types: {
      block: (props: { children: ReactNode }) => (
        <p className="text-gray-50 sm:ml-6 lg:ml-12 mb-20 lg:max-w-2xl lg:pr-4 leading-7 line-break">
          {props.children}
        </p>
      ),
    },
  };
  return (
    <section id="block5" className="cta-generic relative mt-48 template">
      <div className="relative filter-grayscale-1 w-full home-volunteer-image object-cover hover:filter-grayscale-0 transition-filter transition-all duration-500 blur-out">
        <Image
          className="w-full"
          src={urlForImage(data.image)}
          alt={entrySlug(data)}
          style={{ objectFit: "cover" }}
          fill
          priority
        />
      </div>
      <div className="lg:absolute top-0 left-0 w-full lg:-mt-24">
        <div className="max-w-screen-xl lg:px-4 mx-auto">
          <div className="bg-primary top-0 left-0 px-4 py-12 lg:p-16 w-full lg:w-3/5">
            <p className="pre-headline-white">{data.preheading}</p>
            <h2 className="text-white mb-10">{data.heading}</h2>
            <BlockContent blocks={data.body} serializers={serializers} />
            <div className="sm:ml-6 lg:ml-12">
              <CTAButton data={data} type="darkBg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
