export default function CenterAlignedHeadline({ data, topSpacing }:any) {
  if (!data) return <></>;
  return (
    <section className="pt-24 md:pt-32 lg:pt-48 xl:pt-64 max-w-screen-xl mx-auto relative" style={topSpacing ? {paddingTop:`${topSpacing}px`}: {}}>
      <p className="text-secondary tracking-widest leading-none uppercase text-xs pl-4 py-1 mb-2 text-center">
        {data.preheading}
      </p>
      <h1 className="h2 max-w-2xl mx-auto mb-20 leading-tight text-center">
        {data.heading}
      </h1>
      <div className="bg-squares"></div>
    </section>
  );
}
