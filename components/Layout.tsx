import React, { ReactNode, useMemo } from "react";
import styled from "styled-components";

const getValidChildren = (children: React.ReactNode) =>
  React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];

interface RootProps {
  hasHeader: boolean;
  hasFooter: boolean;
}

const Root = styled.section<RootProps>`
  display: grid;
  grid-template-rows: 1fr;
  overflow: hidden;
  width: 100%;
  height: 100%;

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

const Header = styled.header``;
Header.displayName = "LayoutHeader";

const Body = styled.main`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
Body.displayName = "LayoutBody";

const Footer = styled.footer``;
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

  return <Root {...rootProps}>{children}</Root>;
};

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;

Layout.displayName = "Layout";
