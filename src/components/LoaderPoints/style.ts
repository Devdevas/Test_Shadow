import styled from "styled-components";
import { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const LoadingPoints = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   height: 20px;
`;

export const Point = styled.div`
   display: inline-block;
   border-radius: 50%;
   border: 3px solid ${(props) => props.theme.colors.primary};
   margin: 0 4px;
   &:nth-child(1) {
      animation: ${loadingAnimation} 1s linear infinite;
      animation-delay: 0.25s;
   }

   &:nth-child(2) {
      animation: ${loadingAnimation} 1s linear infinite;
      animation-delay: 0.5s;
   }
   &:nth-child(3) {
      animation: ${loadingAnimation} 1s linear infinite;
      animation-delay: 0.75s;
   }
`;
