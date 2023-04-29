import { GetStaticProps } from "next";
import { withRouter } from "next/router";
import { getConfig } from "@builtjs/theme";
import Page from "../theme/page";
import { pages } from "../theme/constants";

export default withRouter(Page);

export const getStaticProps: GetStaticProps = async () => {
  const config = await getConfig(pages.EVENTS);
  return {
    props: { config }
  };
};