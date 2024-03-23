import { CTAButtonSimple } from "@/components/elements";

export default function Block7({ content }: any) {
  if (!content) return <></>;
  let { data } = content;
  return (
    <section id="block7" className="cta-multi py-24 md:py-32 template">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="w-full lg:w-2/5">
            <p className="pre-headline-secondary">{data.preheading}</p>
            <h2 className="mb-16 leading-tight">{data.heading}</h2>
          </div>
          <div className="w-full lg:w-3/5 md:mt-8 sm:mx-4 lg:ml-10">
            <h4 className="mb-6">{data.subheading1}</h4>
            <p className="text-gray-500 mb-12 lg:max-w-2xl md:pr-4 leading-7">
              {data.blurb1}
            </p>
            <CTAButtonSimple
              data={{
                ctaUrl: "/subscribe",
                ctaText: "Subscribe",
              }}
            />
            <h4 className="mb-6">{data.subheading2}</h4>
            <p className="text-gray-500 mb-12 lg:max-w-2xl md:pr-4 leading-7">
              {data.blurb2}
            </p>
            <CTAButtonSimple
              data={{
                ctaUrl: "/donate",
                ctaText: "Donate",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
