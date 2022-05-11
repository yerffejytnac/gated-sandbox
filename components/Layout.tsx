import React, { ReactNode } from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  height: 100%;
`;

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children }: Props) => <Root>{children}</Root>;
