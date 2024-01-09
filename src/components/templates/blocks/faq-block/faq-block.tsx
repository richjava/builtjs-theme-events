import Link from "next/link";
import BlockContent from "@sanity/block-content-to-react";

export default function FaqBlock({ content }: any) {
  if (!content) return <></>;
  let { collections } = content;
  if (!collections) {
    return <></>;
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let entries;
  if (collection) {
    entries = collection;
  }
  return (
    <section id="faq-block" className="cta-multi relative pb-16 template">
      <div className="max-w-screen-xl px-4 mx-auto pt-32 pb-10">
        <h2 className="text-center mb-20">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row flex-wrap">
            {entries &&
              entries.map((entry: any, i: number) => (
                <div className="w-1/2 px-4 mb-10" key={i}>
                  <h5 className="font-sans text-lg font-semibold mb-2">
                    {entry.question}
                  </h5>
                  <BlockContent className="line-break" blocks={entry.answer} />
                </div>
              ))}
          </div>
        </div>
        <p className="text-center my-20">
          Didn&apos;t answer your question?&nbsp;
          <Link className="underline" href="/contact">
            Contact us
          </Link>
        </p>
      </div>
      <div className="absolute w-full h-full bg-primary-custom-light bottom-0 z-index--1"></div>
    </section>
  );
}
