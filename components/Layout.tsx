import { motion, HTMLMotionProps, LayoutGroup } from "framer-motion";
import React, { ReactNode, useMemo } from "react";
import styled from "styled-components";

const getValidChildren = (children: React.ReactNode) =>
  React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];

interface RootProps extends HTMLMotionProps<"section"> {
  hasHeader: boolean;
  hasFooter: boolean;
}

const Root = styled(motion.section)<RootProps>`
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.red[50]};
  ${({ hasHeader }) =>
    hasHeader &&
    `
    grid-template-rows: auto 1fr;
  `}

  ${({ hasFooter }) =>
    hasFooter &&
    `
    grid-template-rows: 1fr auto;
  `}

    ${({ hasHeader, hasFooter }) =>
    hasHeader &&
    hasFooter &&
    `
    grid-template-rows: auto 1fr auto;
  `}
`;

Root.displayName = "LayoutRoot";

const Header = styled(motion.header)<HTMLMotionProps<"header">>`
  background-color: ${({ theme }) => theme.colors.green[50]};
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding: 2rem;
`;

Header.displayName = "LayoutHeader";

const Body = styled(motion.main)<HTMLMotionProps<"main">>`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

Body.displayName = "LayoutBody";

const Footer = styled(motion.footer)<HTMLMotionProps<"footer">>`
  background-color: ${({ theme }) => theme.colors.blue[50]};
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding: 1rem 2rem;
`;

Footer.displayName = "LayoutFooter";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const components = useMemo(() => {
    let items = new Set();
    const child = React.Children.only(children);
    if (React.isValidElement(child)) {
      getValidChildren(child.props.children).map((c: any) =>
        items.add(c.type.displayName)
      );
    }
    return [...items];
  }, [children]);

  const hasHeader = components.includes("LayoutHeader");
  const hasFooter = components.includes("LayoutFooter");
  const rootProps = { hasHeader, hasFooter };

  return (
    <LayoutGroup>
      <Root {...rootProps} layout>
        {children}
      </Root>
    </LayoutGroup>
  );
};

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;

Layout.displayName = "Layout";
