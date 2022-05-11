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
  background-color: ${({ theme }) => theme.colors.teal[50]};

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

const BarPage = () => {
  return (
    <Fragment>
      <Layout.Body layout="position">
        <Root variants={rootVariants} initial="out" animate="in" exit="out">
          <motion.h1 variants={childVariants}>Bar</motion.h1>
          <motion.p variants={childVariants}>
            Raw denim craft beer disrupt vegan, vinyl iPhone cronut woke praxis
            fixie everyday carry. Freegan poutine helvetica, hot chicken
            literally stumptown celiac snackwave hexagon beard vice mixtape.
            Cronut tonx pop-up banjo humblebrag occupy roof party venmo paleo
            godard fanny pack tumeric. Venmo iceland enamel pin kale chips
            stumptown portland yr sartorial YOLO cornhole praxis mustache keytar
            everyday carry small batch. Shabby chic swag sustainable YOLO
            cold-pressed banh mi.
          </motion.p>
        </Root>
      </Layout.Body>
      <Layout.Footer
        variants={footerVariants}
        initial="out"
        animate="in"
        exit="out"
      >
        <NavLink href="/foo" name="Back" />
        <NavLink href="/baz" name="Next" />
      </Layout.Footer>
    </Fragment>
  );
};

export default BarPage;
