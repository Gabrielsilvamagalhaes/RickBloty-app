'use client';

import styled from 'styled-components';

export const Container = styled.main`
  max-width: 96rem;
  margin: 1.5rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: minmax(100px, 220px);
  justify-content: space-evenly;
  row-gap: 2rem;
`;
