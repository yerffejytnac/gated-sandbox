import NextLink from "next/link";
import styled from "styled-components";

const Link = styled.a`
  padding: 0.5rem 1rem;
  margin-right: 0.375rem;
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  letter-spacing: -0.01em;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[50]};
    border: 1px solid rgba(0, 0, 0, 0.24);
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border: 1px solid rgba(0, 0, 0, 0.24);
  }
`;

interface NavLinkProps {
  href: string;
  name: string;
}

export const NavLink = ({ href, name }: NavLinkProps) => {
  return (
    <NextLink href={href} passHref>
      <Link>{name}</Link>
    </NextLink>
  );
};
