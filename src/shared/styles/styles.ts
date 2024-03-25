import styled from "styled-components";

export const PageContainer = styled.div`
   max-width: 1200px;
   min-height: 100vh;
   margin: auto;
   padding: 20px;
`;

export const NoResults = styled.div`
   text-align: center;
   max-width: 250px;
   margin: 50px auto;
   padding: ${(props) => props.theme.spacing.small};
   border-radius: ${(props) => props.theme.borderRadius.small};
   background-color: ${(props) => props.theme.colors.backgroundGrayLighter};
   color: ${(props) => props.theme.colors.grayText};
`;
