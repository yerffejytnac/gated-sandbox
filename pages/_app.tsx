import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyles } from "@styles";
import { Layout } from "@components";
import { Fragment } from "react";
import { Variants } from "framer-motion";

interface Props extends AppProps {
  // TODO: See issue documented here... https://github.com/vercel/next.js/issues/36008
  Component: any;
}

const headerVariants: Variants = {
  out: { y: "-100%" },
  in: {
    y: 0,
    transition: {
      bounce: 0.125,
      type: "spring",
      duration: 0.5,
    },
  },
};

const App = ({ Component, pageProps }: Props) => {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Layout>
          <Fragment>
            <Layout.Header
              variants={headerVariants}
              initial="out"
              animate="in"
              exit="out"
            >
              <h3>Header</h3>
            </Layout.Header>
            <Component {...pageProps} />
          </Fragment>
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
