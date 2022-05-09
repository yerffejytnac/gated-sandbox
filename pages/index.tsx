import styled from "styled-components";
import { Layout } from "@components";

import {
  AnimatePresence,
  motion,
  HTMLMotionProps,
  Variants,
} from "framer-motion";

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
const Header = styled(motion.div)<HTMLMotionProps<"div">>`
  background-color: red;
  padding: 2rem;
`;

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

const Footer = styled(motion.div)<HTMLMotionProps<"div">>`
  background-color: green;
  padding: 1rem 2rem;
`;

const Root = styled(motion.div)<HTMLMotionProps<"div">>`
  background-color: purple;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 960px;
  margin: 0 auto;

  & h1 {
    margin-bottom: 1rem;
  }

  & h1,
  & p {
    max-width: 54ch;
    border: 1px solid red;
  }
`;

const rootVariants: Variants = {
  out: { opacity: 0 },
  in: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.25,
      ease: "easeInOut",
    },
  },
};

const childVariants: Variants = {
  out: { opacity: 0, y: "25%" },
  in: { opacity: 1, y: 0 },
};

const Content = () => (
  <Root variants={rootVariants} initial="out" animate="in" exit="out">
    <motion.h1 variants={childVariants} layout>
      Retro brunch quinoa williamsburg actually austin VHS meh. Echo park health
      goth viral truffaut.
    </motion.h1>
    <motion.p variants={childVariants} layout>
      Readymade chicharrones viral tilde hoodie bitters street art thundercats
      tofu chillwave DSA keffiyeh narwhal church-key helvetica. Hella try-hard
      before they sold out sriracha, mustache hoodie heirloom. Leggings franzen
      whatever gluten-free green juice. Wolf poutine you probably haven't heard
      of them pork belly activated charcoal umami hella biodiesel, kombucha
      gentrify narwhal 3 wolf moon before they sold out. PBR&B next level
      succulents cliche tumeric readymade.
    </motion.p>
  </Root>
);

const IndexPage = () => {
  return (
    <Layout>
      <AnimatePresence>
        <Header variants={headerVariants} initial="out" animate="in" exit="out">
          <Layout.Header>
            <h3>Header</h3>
          </Layout.Header>
        </Header>
        <Layout.Content>
          <Content />
        </Layout.Content>
        <Footer variants={footerVariants} initial="out" animate="in" exit="out">
          <Layout.Footer>
            <h3>Footer</h3>
          </Layout.Footer>
        </Footer>
      </AnimatePresence>
    </Layout>
  );
};

export default IndexPage;
