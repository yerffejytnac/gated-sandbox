import styled from "styled-components";
import { Layout } from "@components";

import { motion, HTMLMotionProps, Variants } from "framer-motion";
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
  padding: 2rem;
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

const IndexPage = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  return (
    <Layout>
      <>
        {showHeader && (
          <Layout.Header
            variants={headerVariants}
            initial="out"
            animate="in"
            exit="out"
          >
            <h3>Header</h3>
          </Layout.Header>
        )}
        <Layout.Body layout="position">
          <Root variants={rootVariants} initial="out" animate="in" exit="out">
            <motion.h1 variants={childVariants}>
              Retro brunch quinoa williamsburg actually austin VHS meh. Echo
              park health goth viral truffaut.
            </motion.h1>
            <motion.p variants={childVariants}>
              Readymade chicharrones viral tilde hoodie bitters street art
              thundercats tofu chillwave DSA keffiyeh narwhal church-key
              helvetica. Hella try-hard before they sold out sriracha, mustache
              hoodie heirloom. Leggings franzen whatever gluten-free green
              juice.
            </motion.p>
            <motion.div className="controls" variants={childVariants}>
              <button onClick={() => setShowHeader(!showHeader)}>
                Toggle Header
              </button>
              <button onClick={() => setShowFooter(!showFooter)}>
                Toggle Footer
              </button>
            </motion.div>
            <motion.p variants={childVariants}>
              Raw denim craft beer disrupt vegan, vinyl iPhone cronut woke
              praxis fixie everyday carry. Freegan poutine helvetica, hot
              chicken literally stumptown celiac snackwave hexagon beard vice
              mixtape. Cronut tonx pop-up banjo humblebrag occupy roof party
              venmo paleo godard fanny pack tumeric. Venmo iceland enamel pin
              kale chips stumptown portland yr sartorial YOLO cornhole praxis
              mustache keytar everyday carry small batch. Shabby chic swag
              sustainable YOLO cold-pressed banh mi.
            </motion.p>
          </Root>
        </Layout.Body>
        {showFooter && (
          <Layout.Footer
            variants={footerVariants}
            initial="out"
            animate="in"
            exit="out"
          >
            <h3>Footer</h3>
          </Layout.Footer>
        )}
      </>
    </Layout>
  );
};

export default IndexPage;
