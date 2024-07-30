'use client';

import styled from 'styled-components';
import { borderColor, primaryColor, secondaryColor } from '../../styles/Colors';

export const Container = styled.footer`
  background-color: ${secondaryColor};
  color: ${primaryColor};
  text-align: center;
  width: 100vw;
  padding: 2rem;

  h2:hover {
    display: inline;
    color: ${borderColor};
  }
`;
