import { GetStaticProps } from "next";
import { withRouter } from "next/router";
import { getConfig } from "@builtjs/theme";
import Page from "../lib/page";
import { pages } from "../lib/constants";

export default withRouter(Page);

export const getStaticProps: GetStaticProps = async () => {
  const config = await getConfig(pages.CONTACT);
  return {
    props: { config }
  };
};