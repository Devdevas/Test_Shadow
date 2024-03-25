import styled from "styled-components";

export const Message = styled.div`
   max-width: 400px;
   width: 100%;
   margin: 50px auto;
   text-align: center;
   padding: ${(props) => props.theme.spacing.large};
   background-color: ${(props) => props.theme.colors.backgroundGrayLighter};
   border-radius: ${(props) => props.theme.borderRadius.small};
   color: ${(props) => props.theme.colors.whiteText};
`;
