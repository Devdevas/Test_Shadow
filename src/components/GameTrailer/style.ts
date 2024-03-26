import styled from "styled-components";

export const TrailerContainer = styled.div`
   position: relative;
   margin-bottom: 20px;
`;
export const TrailerCover = styled.img`
   border: ${(props) => props.theme.borders.thick} ${(props) => props.theme.colors.whiteText};
   border-radius: ${(props) => props.theme.borderRadius.large};
`;

export const IconContainer = styled.div`
   &:hover {
      color: ${(props) => props.theme.colors.primary};
   }
`;

export const TrailerTitle = styled.div`
   display: flex;
   align-items: center;
   position: absolute;
   bottom: 50px;
   left: 50px;
`;

export const TrailerName = styled.h2`
   font-size: ${(props) => props.theme.fontSizes.larger};
   font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const CloseButton = styled.button`
   padding: ${(props) => props.theme.spacing.small} ${(props) => props.theme.spacing.medium};
   border: none;
   border-radius: ${(props) => props.theme.borderRadius.small};
   background-color: ${(props) => props.theme.colors.primary};
   color: ${(props) => props.theme.colors.whiteText};
   margin-bottom: 10px;
   max-width: 80px;
   cursor: pointer;
`;
