import { GetStaticPaths, GetStaticProps } from 'next';
import { withRouter } from "next/router";
import { getConfig, getItems } from "@builtjs/theme";
import Page from "../../../theme/page";
import { pages } from "../../../theme/constants";

export default withRouter(Page);

export const getStaticPaths: GetStaticPaths = async () => {
  const allItems = await getItems('event-item');
  return {
    paths: allItems.items.map(({ attributes }:any) => `/event-items/${attributes.slug}`) ?? [],
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const config = await getConfig(pages.EVENT_ARTICLE);
  config.params = context.params;
  return {
    props: { config }
  };
}