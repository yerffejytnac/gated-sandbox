import styled from "styled-components";
import { Layout } from "@components";

import { motion, HTMLMotionProps, Variants, LayoutGroup } from "framer-motion";
import { useState } from "react";

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
  background-color: ${({ theme }) => theme.colors.green[50]};
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
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
  background-color: ${({ theme }) => theme.colors.blue[50]};
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding: 1rem 2rem;
`;

const Root = styled(motion.div)<HTMLMotionProps<"div">>`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.red[50]};
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

  & .controls {
    margin: 1rem 0;
  }

  & button {
    width: fit-content;
    display: inline-flex;
    margin-right: 0.5rem;
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

const IndexPage = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <Layout>
      <LayoutGroup>
        {showHeader && (
          <Layout.Header>
            <Header
              variants={headerVariants}
              initial="out"
              animate="in"
              exit="out"
            >
              <h3>Header</h3>
            </Header>
          </Layout.Header>
        )}
        <Layout.Body>
          <Root variants={rootVariants} initial="out" animate="in" exit="out">
            <motion.h1 variants={childVariants} layout>
              Retro brunch quinoa williamsburg actually austin VHS meh. Echo
              park health goth viral truffaut.
            </motion.h1>
            <motion.p variants={childVariants} layout>
              Readymade chicharrones viral tilde hoodie bitters street art
              thundercats tofu chillwave DSA keffiyeh narwhal church-key
              helvetica. Hella try-hard before they sold out sriracha, mustache
              hoodie heirloom. Leggings franzen whatever gluten-free green
              juice. Wolf poutine you probably haven't heard of them pork belly
              activated charcoal umami hella biodiesel, kombucha gentrify
              narwhal 3 wolf moon before they sold out. PBR&B next level
              succulents cliche tumeric readymade.
            </motion.p>
            <div className="controls">
              <button onClick={() => setShowHeader(!showHeader)}>
                Toggle Header
              </button>
              <button onClick={() => setShowFooter(!showFooter)}>
                Toggle Footer
              </button>
            </div>
          </Root>
        </Layout.Body>
        {showFooter && (
          <Layout.Footer>
            <Footer
              variants={footerVariants}
              initial="out"
              animate="in"
              exit="out"
            >
              <h3>Footer</h3>
            </Footer>
          </Layout.Footer>
        )}
      </LayoutGroup>
    </Layout>
  );
};

export default IndexPage;
