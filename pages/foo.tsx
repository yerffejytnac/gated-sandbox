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

const FooPage = () => {
  return (
    <Fragment>
      <Layout.Body layout="position">
        <Root variants={rootVariants} initial="out" animate="in" exit="out">
          <motion.h1 variants={childVariants}>Foo</motion.h1>
          <motion.p variants={childVariants}>
            Readymade chicharrones viral tilde hoodie bitters street art
            thundercats tofu chillwave DSA keffiyeh narwhal church-key
            helvetica. Hella try-hard before they sold out sriracha, mustache
            hoodie heirloom. Leggings franzen whatever gluten-free green juice.
          </motion.p>
        </Root>
      </Layout.Body>
      <Layout.Footer
        variants={footerVariants}
        initial="out"
        animate="in"
        exit="out"
      >
        <NavLink href="/bar" name="Next" />
      </Layout.Footer>
    </Fragment>
  );
};

export default FooPage;
