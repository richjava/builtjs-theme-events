import { GetStaticProps } from "next";
import { withRouter } from "next/router";
import { getConfig } from "@builtjs/theme";
import Page from "../lib-old/page";
import { pages } from "../lib-old/constants";

export default withRouter(Page);

export const getStaticProps: GetStaticProps = async () => {
  const config = await getConfig(pages.VOLUNTEER);
  return {
    props: { config }
  };
};