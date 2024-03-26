import styled from "styled-components";

export const Title = styled.h1`
   font-size: ${(props) => props.theme.fontSizes.larger};
   margin: 0 0 35px 0;
   @media screen and (max-width: 490px) {
      font-size: ${(props) => props.theme.fontSizes.large};
   }
`;

export const TrailersContainer = styled.div`
   background-color: ${(props) => props.theme.colors.backgroundGrayLighter};
   border-radius: ${(props) => props.theme.borderRadius.large};
   padding: 20px;
`;
