import Link from "next/link";

export default function CTAButtonSimple({ data }:any) {
  if (!data) return <></>;
  return (
    <div>
      {data.ctaUrl && data.ctaText && (
        <div className="h-5 inline-flex align-items mb-16 flex group">
          <Link className="mt-1 tracking-widest uppercase leading-none text-sm pr-4" href={data.ctaUrl}>
              {data.ctaText}
          </Link>
          <Link href={data.ctaUrl}>
              <svg
                className="h-5 group-hover:ml-5 w-10 transition-all duration-200"
                viewBox="0 0 9.414 17.414"
                width="7px"
              >
                <path
                  className="stroke-2 stroke-current text-secondary"
                  transform="translate(5782.7 8451.2)"
                  d="m-5782-8450.5l8 8-8 8"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
