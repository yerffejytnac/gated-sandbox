import { Fragment } from "react";
import styled from "styled-components";
import { motion, HTMLMotionProps, Variants } from "framer-motion";

import { Layout, NavLink } from "@components";

const footerVariants: Variants = {
  out: { y: "100%" },
  in: {
    y: 0,
    transition: {
      bounce: 0.125,
      type: "spring",
      duration: 0.5,
    },
  },
};

const Root = styled(motion.div)<HTMLMotionProps<"div">>`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  max-width: 960px;
  margin: 0 auto;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.indigo[50]};

  & h1 {
    margin-bottom: 1rem;
  }

  & h1,
  & p {
    max-width: 54ch;
    border: 1px solid red;
  }

  & p + p {
    margin-top: 1rem;
  }
`;

const rootVariants: Variants = {
  out: { opacity: 0 },
  in: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.125,
      ease: "easeInOut",
    },
  },
};

const childVariants: Variants = {
  out: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
};

const BazPage = () => {
  return (
    <Fragment>
      <Layout.Body layout="position">
        <Root variants={rootVariants} initial="out" animate="in" exit="out">
          <motion.h1 variants={childVariants}>Baz</motion.h1>
          <motion.p variants={childVariants}>
            Cornhole vaporware hammock, selvage letterpress celiac chillwave.
            Raw denim tousled prism subway tile taiyaki letterpress ennui
            fashion axe. Offal tumblr ramps XOXO paleo pinterest chartreuse 90's
            lomo hammock retro. Chillwave pabst thundercats edison bulb woke put
            a bird on it banh mi organic snackwave 3 wolf moon plaid
            cold-pressed flannel DSA art party. Skateboard live-edge selfies,
            tacos crucifix knausgaard yr. Poutine glossier tbh banjo, deep v
            polaroid selvage gentrify squid bespoke 90's ramps franzen keffiyeh.
          </motion.p>
        </Root>
      </Layout.Body>
      <Layout.Footer
        variants={footerVariants}
        initial="out"
        animate="in"
        exit="out"
      >
        <NavLink href="/bar" name="Back" />
      </Layout.Footer>
    </Fragment>
  );
};

export default BazPage;
