import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import {
  urlForImage,
  entrySlug,
} from "@/lib/utils";
import {
  LeftAlignedHeadline,
  CenterAlignedHeadline,
} from "@/components/elements";

export default function Cards1({ content }: any) {
  if (!content) return <></>;
  let { data, collections } = content;
  if (!collections) {
    return <></>;
  }
  let collectionName = Object.keys(collections)[0];
  let collection = collections[collectionName];
  let items;
  if (collection) {
    items = collection;
  }

  return (
    <section id="cards1" className="py-24 md:py-32 template">
      {data.headlineAlignment === "left" && (
        <LeftAlignedHeadline data={data} topSpacing={50} />
      )}
      {data.headlineAlignment === "center" && (
        <CenterAlignedHeadline data={data} topSpacing={150} />
      )}
      <div className="flex flex-col md:flex-row flex-wrap container">
        {items &&
          items.map((item: any, i: number) => (
            <div className="md:w-1/2" key={i}>
              <div className="bg-primary p-4 lg:p-8 mb-10 mx-5 relative">
                <div className="relative z-10">
                  <div className="md:px-5 lg:px-10 pt-2 lg:pt-1 pb-6 lg:pb-8">
                    <p className="pre-headline-white leading-4 mb-0">
                      {format(new Date(item.date), "dd LLLL yyyy")}
                    </p>
                  </div>

                  <div className="px-5 lg:px-10 mb-6">
                    <Link href={`event-item/${entrySlug(item)}`}>
                      <div className="relative w-full blurry-load filter-grayscale-1 hover:filter-grayscale-0 transition-filter duration-500 w-full h-48 md:h-56 lg:h-64 xl:h-72 object-cover mb-8 shadow-2xl">
                        <Image
                          src={urlForImage(item.featuredImage)}
                          alt={entrySlug(item)}
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>
                    </Link>

                    <Link
                      className="text-white mb-5"
                      href={`event-item/${entrySlug(item)}`}
                    >
                      <h3 className="text-white mb-5">
                        {item.title}
                      </h3>
                    </Link>
                    <div className="text-white mb-6 md:mb-12 lg:leading-8">
                      {item.description}
                    </div>
                    <div className="flex items-center flex-col lg:flex-row">
                      <Link
                        className="flex flex-grow justify-center w-full mb-4 lg:mb-0 mr-0 lg:mr-2 py-3 lg:py-3 text-white text-center uppercase tracking-widest text-sm border border-white hover:bg-white hover:text-primary transition-colors duration-200"
                        href={`event-item/${entrySlug(item)}`}
                      >
                        More Info
                      </Link>
                      <Link
                        className="flex flex-grow justify-center w-full ml-0 lg:ml-2 py-3 lg:py-3 text-secondary text-center uppercase tracking-widest text-sm border border-secondary hover:bg-secondary hover:text-white hover:border-secondary transition-colors duration-200"
                        href={`event-item/${entrySlug(item)}#booking`}
                      >
                        Buy Tickets
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary w-full h-56 md:h-64 lg:h-72 xl:h-80 absolute top-0 left-0 z-0"></div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
