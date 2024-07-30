'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { borderColor, primaryColor, secondaryColor } from '../../styles/Colors';

export const Container = styled.section`
  height: 100%;
  box-sizing: border-box;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 1.6rem;
  background-color: #201d1d;
  border: 3px solid transparent;

  &:hover {
    h2 {
      color: violet;
    }
  }
  p {
    color: ${primaryColor};
    font-size: 1.5rem;
    opacity: .7;
  }
`;

export const CardHeading = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  color: ${primaryColor};
  font-weight: 300;
`;

export const CardImage = styled(Image)`
  margin: 1.5rem 0;

  &:hover {
    border: 1px solid transparent;
  }
`;

export const CardLink = styled(Link)`
  text-decoration: none;
  color: ${primaryColor};
  font-weight: bolder;
  padding: 1rem 2.4rem;
  font-size: 1.8rem;
  background-color: ${secondaryColor};
  border: 2px solid transparent;
  border-radius: 1.5rem;
  transition: 70ms ease-in;
  transition: opacity  1s ease-out;


&:hover {
  border: 2px solid ${borderColor};
  color: ${borderColor};
}

&:active {
  opacity: .2;
}
`;
