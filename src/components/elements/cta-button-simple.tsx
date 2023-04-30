import Link from "next/link";

export default function CTAButtonSimple({ attributes }:any) {
  if (!attributes) return <></>;
  return (
    <div>
      {attributes.ctaUrl && attributes.ctaText && (
        <div className="h-5 inline-flex align-items mb-16 flex group">
          <Link className="mt-1 tracking-widest uppercase leading-none text-sm pr-4" href={attributes.ctaUrl}>
              {attributes.ctaText}
          </Link>
          <Link href={attributes.ctaUrl}>
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
