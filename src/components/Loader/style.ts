import styled, { keyframes } from "styled-components";

const vibrateAnimation = keyframes`
  0%, 100% { transform: rotate(0); }
  10% { transform: rotate(-5deg); }
  20% { transform: rotate(5deg); }
  30% { transform: rotate(-5deg); }
  40% { transform: rotate(5deg); }
  75% { transform: rotate(0); }
`;

export const LoaderContainer = styled.div`
   width: 100%;
   margin-top: 150px;
   display: flex;
   align-items: center;
`;

export const GameControllerIcon = styled.img`
   width: 70px;
   margin: auto;
   animation: ${vibrateAnimation} 0.4s ease-in-out infinite;
   animation-direction: alternate;
`;
