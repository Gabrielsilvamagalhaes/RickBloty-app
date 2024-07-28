'use client';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
 * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: none;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
}

body {
  background-color: red;
}

`;
