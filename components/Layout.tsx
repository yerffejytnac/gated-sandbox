import React, { ReactNode } from "react";
import styled from "styled-components";

const Root = styled.section`
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Header = styled.header``;

const Content = styled.main`
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const Footer = styled.footer``;

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => <Root>{children}</Root>;

Layout.Header = Header;
Layout.Content = Content;
Layout.Footer = Footer;

Layout.displayName = "Layout";
