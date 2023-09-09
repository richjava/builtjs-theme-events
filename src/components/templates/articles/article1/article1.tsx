import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import {
  urlForImage,
  widthForImage,
  heightForImage,
  entrySlug,
} from "@/lib/utils";
import { CTAButtonSimple } from "@/components/elements";
import { CTAButton } from "@/components/elements";
import Link from "next/link";

export default function Article1({ content }: any) {
  if (!content) return <></>;
  let { entry = null } = { ...content };
  return (
    <article id="article1" className="template">
      <div className="pt-64 max-w-screen-xl px-4 mx-auto">
        {entry && (
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 lg:mr-10">
              <p className="pre-headline-secondary">Event Details</p>
              <h1 className="mb-8 md:mb-16 leading-tight">
                {entry.title}
              </h1>
              <div className="lg:hidden">
                <Image
                  className="w-full"
                  height={heightForImage(entry?.featuredImage)}
                  width={widthForImage(entry?.featuredImage)}
                  src={urlForImage(entry?.featuredImage)}
                  alt={entrySlug(entry)}
                />
              </div>
              <div className="sm:mx-6 lg:ml-12 lg:mr-0">
                <div className="mt-10">
                  <p className="text-primary-70 mb-5">
                    <strong className="text-primary">When:&nbsp;</strong>
                    {entry.startTime},&nbsp;
                    <span>
                      {format(new Date(entry.date), "dd LLLL yyyy")}
                    </span>
                  </p>
                  {entry.venue && (
                    <p className="text-primary-70 mb-5">
                      <strong className="text-primary">Where:&nbsp;</strong>
                      {entry.venue}
                    </p>
                  )}
                  {entry.genre && (
                    <p className="text-primary-70 mb-5">
                      <strong className="text-primary">Genre:&nbsp;</strong>
                      {entry.genre}
                    </p>
                  )}
                  {entry.duration && (
                    <p className="text-primary-70 mb-5">
                      <strong className="text-primary">Duration:&nbsp;</strong>
                      {entry.duration}
                    </p>
                  )}
                  {entry.restrictions && (
                    <p className="text-primary-70 mb-5">
                      <strong className="text-primary">
                        Restrictions:&nbsp;
                      </strong>
                      {entry.restrictions}
                    </p>
                  )}
                  {entry.infoWebsite && (
                    <p className="text-primary-70 mb-8 lg:mb-12">
                      <strong className="text-primary">Website:&nbsp;</strong>
                      <Link
                        className="hover:text-secondary-dark transition-colors duration-200"
                        href={entry.infoWebsite}
                      >
                        {entry.infoWebsite}
                      </Link>
                    </p>
                  )}
                  <CTAButtonSimple
                    attributes={{
                      ctaText: "Ticket information",
                      ctaUrl: "#booking",
                    }}
                  />
                </div>

                <ReactMarkdown
                  className="dropcap text-primary-70 leading-7 line-break"
                  children={entry.body.replace(/\n/gi, "&nbsp; \n")}
                />
                {entry.description && (
                  <div className="mt-10">
                    <p className="leading-7">
                      <strong>{entry.description}</strong>
                    </p>
                  </div>
                )}
              </div>
              <section
                id="booking"
                className="pt-10 lg:pt-20 mb-24 md:mb-32 lg:mb-48"
              >
                <div className="pt-10 lg:pt-20">
                  <p className="pre-headline-secondary">Tickets</p>
                  <h2 className="mb-8 md:mb-16 leading-tight">
                    Booking information
                  </h2>
                  <div className="sm:ml-6 lg:ml-12">
                    <ReactMarkdown
                      className="block mb-12 text-primary-70 leading-7 line-break"
                      children={entry.bookingInfo.replace(
                        /\n/gi,
                        "&nbsp; \n"
                      )}
                    />
                    {entry.ticketUrl && (
                      <CTAButton
                        attributes={{
                          ctaUrl: entry.ticketUrl,
                          ctaText: "Buy tickets online",
                        }}
                      />
                    )}
                  </div>
                </div>
              </section>
            </div>
            <div className="w-full lg:w-1/2 relative">
              <div className="hidden lg:block w-full">
                <Image
                  className="mx-auto filter-grayscale-1 hover:filter-grayscale-0 transition-filter transition-all duration-500 blur-out"
                  height={heightForImage(entry?.featuredImage)}
                  width={widthForImage(entry?.featuredImage)}
                  src={urlForImage(entry?.featuredImage)}
                  alt={entrySlug(entry)}
                  layout="responsive"
                  objectFit="cover"
                />
              </div>
              <div className="bg-squares hidden lg:block -mt-40 lg:mt-32 xl:mt-0"></div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
