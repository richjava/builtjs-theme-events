import { GetStaticPaths, GetStaticProps } from 'next';
import { withRouter } from "next/router";
import { getConfig, getEntries } from "@builtjs/theme";
import { entrySlug } from "@/lib/utils";
import Page from "@/lib/page";
import { pages } from "@/lib/constants";

export default withRouter(Page);

export const getStaticPaths: GetStaticPaths = async () => {
  const name = 'eventItem';
  const allEntries:any = await getEntries(name);
  return {
    paths: allEntries.entries.map((entry: any) => `/event-item/${entrySlug(entry)}`) ?? [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const config = await getConfig(pages.EVENT_ARTICLE);
  console.log({context})
  config.params = context.params;
  return {
    props: { config }
  };
}