'use client';

import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../styles/Colors';

export const Container = styled.header`
  background-color: ${secondaryColor};
  color: ${primaryColor};
  text-align: center;
  width: 100vw;
  padding: 1rem;
`;
