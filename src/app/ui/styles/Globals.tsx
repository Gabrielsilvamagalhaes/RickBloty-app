'use client';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor } from './Colors';

export const LinkHeader = styled(Link)`
  color: ${primaryColor};
  text-decoration: none;
  font-size: 2.8rem;
  font-weight: 500;
  letter-spacing: 0.5rem;
  cursor: pointer;
  transition: opacity 300ms ease-in-out;

    &:hover {
      opacity: .6;
    }
`;

export const GlobalStyled = createGlobalStyle`
 * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: none;
}

html {
  font-size: 62.5%;
}

body {
  height: 100vh;
  background-color: ${primaryColor};
}


`;
