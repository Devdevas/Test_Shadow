import { Link } from "react-router-dom";
import styled from "styled-components";

export const SearchContainer = styled.div`
   max-width: 500px;
   width: 100%;
   margin: 0 auto;
   position: relative;
   @media screen and (max-width: 768px) {
      order: 3;
      margin-top: 20px;
   }
   @media screen and (max-width: 540px) {
      max-width: 350px;
      margin: 20px auto 15px auto;
   }
`;

export const CloseIcon = styled.div`
   position: absolute;
   right: 0;
   top: 8px;
   color: ${(props) => props.theme.colors.primary};
   cursor: pointer;
`;

export const SearchBarInput = styled.input`
   width: 100%;
   padding: ${(props) => props.theme.spacing.small};
   border: ${(props) => props.theme.borders.thin} ${(props) => props.theme.colors.primary};
   border-radius: ${(props) => props.theme.borderRadius.medium};
   color: ${(props) => props.theme.colors.whiteText};
   background-color: ${(props) => props.theme.colors.backgroundGray};
`;

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: ${(props) => props.theme.colors.whiteText};
`;

export const SearchResults = styled.div`
   position: absolute;
   z-index: 2;
   background-color: ${(props) => props.theme.colors.backgroundGray};
   border-radius: ${(props) => props.theme.borderRadius.small};
   margin-top: 10px;
   padding: ${(props) => props.theme.spacing.small};
   width: 100%;
   max-height: 600px;
   overflow-y: scroll;

   &::-webkit-scrollbar {
      width: 5px;
      height: 8px;
   }

   &::-webkit-scrollbar-track {
      background-color: #f5f7fb;
      border-radius: 10px;
   }

   &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.colors.primary};
      border-radius: 10px;
   }
`;

export const SearchResultItem = styled.div`
   display: flex;
   align-items: center;
   padding: 10px 0;
   border-bottom: ${(props) => props.theme.borders.thin} ${(props) => props.theme.colors.backgroundGrayLighter};
   cursor: pointer;
   &:hover {
      background-color: ${(props) => props.theme.colors.backgroundBlack};
   }
`;
export const GameCover = styled.div`
   width: 40px;
   height: 60px;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   align-items: center;
   & img {
      height: 100%;
      width: auto;
   }
`;
export const GameInfos = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 60px;
   margin-left: 10px;
`;
export const GameName = styled.div``;
export const GameDate = styled.div`
   color: ${(props) => props.theme.colors.grayText};
   font-size: ${(props) => props.theme.fontSizes.medium};
   font-weight: ${(props) => props.theme.fontWeights.medium};
`;
export const GamePlatforms = styled.div`
   color: ${(props) => props.theme.colors.grayText};
   font-size: ${(props) => props.theme.fontSizes.small};
   font-weight: ${(props) => props.theme.fontWeights.medium};
`;
