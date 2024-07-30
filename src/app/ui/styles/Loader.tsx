'use client';
import styled from 'styled-components';
import { secondaryColor } from './Colors';

export const Loader = styled.div`
  width: 5rem;
  height: 5rem;
  border: 6px solid #f1f0f0;
  border-top-color: ${secondaryColor};
  animation: is-rotating 1s infinite;
  border-radius: 50%;

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;

 .fullscreen{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  
`;
