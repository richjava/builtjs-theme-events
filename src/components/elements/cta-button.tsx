import Link from "next/link";

export default function CTAButton({ data, type = "lightBg" }:any) {
  if (!data) return <></>;
  return (
    <div className="inline-flex items-center group">
      <Link className={`${
            type === "lightBg"
              ? `text-secondary border-secondary hover:text-white hover:bg-secondary`
              : `text-white border-white hover:text-primary hover:bg-white`
          } inline-block text-sm py-4 px-4 md:px-8 text-center uppercase tracking-widest border bg-transparent transition-colors duration-200`} href={data.ctaUrl}>    
          {data.ctaText}
      </Link>
      <Link href={data.ctaUrl}>
          <svg
            viewBox="0 0 161.21 17.414"
            className="w-20 md:w-32 -ml-3 md:-ml-5 group-hover:ml-10 transition-all duration-200"
          >
            <g
              className={`${
                type === "darkBg" ? `text-white` : `text-primary`
              } stroke-2 stroke-current`}
              transform="translate(5923 8387.2)"
              fill="none"
              strokeLinecap="round"
            >
              <path transform="translate(10.85 38)" d="m-5933.4-8416.5h160" />
              <path
                transform="translate(11.505 64)"
                d="m-5782-8450.5 8 8-8 8"
              />
            </g>
          </svg>
      </Link>
    </div>
  );
}
