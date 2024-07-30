'use client';

import styled from 'styled-components';

export const Container = styled.main`
  max-width: 96rem;
  margin: 1.5rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 300px));
  justify-content: space-evenly;
  gap: 2rem;
`;
