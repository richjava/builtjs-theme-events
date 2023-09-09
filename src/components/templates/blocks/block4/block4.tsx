import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import {
  urlForImage,
  widthForImage,
  heightForImage,
  entrySlug,
} from "@/lib/utils";
import CTAButtonSimple from "../../../elements/cta-button-simple";

export default function Block4({ content }: any) {
  if (!content) return <></>;
  let { attributes, collections } = content;
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let entries;
  if (collection) {
    entries = collection;
  }
  return (
    <section id="block4" className="py-32 template">
      <div className="max-w-screen-xl px-4 mx-auto">
        <p className="pre-headline-secondary">{attributes.preheading}</p>
        <h2 className="mb-8 md:mb-16 leading-tight">{attributes.heading}</h2>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-2/5">
            <div className="sm:ml-6 lg:ml-12">
              <ReactMarkdown
                className="text-primary-50 mb-12 lg:max-w-2xl sm:pr-4 lg:pr-8 leading-7 line-break"
                children={attributes.body.replace(/\n/gi, "&nbsp; \n")}
              />
              <CTAButtonSimple attributes={attributes} />
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-center flex-wrap">
            {entries &&
              entries.map((entry: any, i: number) => {
                return (
                  <div className="w-1/2 md:w-1/3" key={i}>
                    <Link href={entry.url}>
                      <Image
                        className="w-full"
                        height={heightForImage(entry.image)}
                        width={widthForImage(entry.image)}
                        src={urlForImage(entry.image)}
                        alt={entrySlug(entry)}
                        layout="responsive"
                        objectFit="cover"
                      />
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
