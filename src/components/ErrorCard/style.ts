import styled from "styled-components";

export const ErrorCardContainer = styled.div`
   margin: 20px auto;
   padding: 20px;
   max-width: 600px;
   background-color: ${(porps) => porps.theme.colors.backgroundPink};
   border-left: 6px solid ${(porps) => porps.theme.colors.primary};
   color: ${(porps) => porps.theme.colors.blackText};
   border-radius: ${(porps) => porps.theme.borderRadius.small};
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: "Open Sans", sans-serif;
`;

export const ErrorMessage = styled.p`
   font-size: ${(porps) => porps.theme.fontSizes.medium};
`;
