import styled from "styled-components";

export const CardContainer = styled.div`
   text-decoration: none;
`;

export const SlideImage = styled.div`
   &:hover {
      opacity: 0.8;
   }
`;

export const Rating = styled.div`
   display: flex;
   align-items: center;
   margin: 0 10px;
   color: ${(props) => props.theme.colors.grayText};
`;

export const GameTitle = styled.div`
   width: 100%;
   background-color: ${(props) => props.theme.colors.backgroundGrayLighter};
   padding: 20px 0;
   color: ${(props) => props.theme.colors.whiteText};
`;

export const TrailerContainer = styled.div`
   display: flex;
   align-items: center;
   margin: 0 10px;
   cursor: pointer;
`;

export const GameName = styled.div`
   font-size: ${(props) => props.theme.fontSizes.medium};
   font-weight: ${(props) => props.theme.fontWeights.medium};
   max-width: 200px;
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
   margin: 12px;
`;
export const GameSubTitle = styled.p`
   color: ${(props) => props.theme.colors.grayText};
   font-size: ${(props) => props.theme.fontSizes.medium};
   font-weight: ${(props) => props.theme.fontWeights.medium};
   text-decoration: none;
`;
