import styled from "styled-components";

export const GameDetailsContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const GameHeader = styled.div`
   display: flex;
   padding: 20px;
   align-items: flex-start;
   background-color: ${(props) => props.theme.colors.backgroundGray};
   @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
   }
`;

export const CoverImage = styled.img`
   height: 400px;
   margin-right: 20px;
   object-fit: cover;
   width: 70%;
   border-radius: ${(props) => props.theme.borderRadius.small};
   @media screen and (max-width: 1024px) {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
   }
`;

export const GameInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   & strong {
      margin-right: 10px;
      color: ${(props) => props.theme.colors.whiteText};
   }
`;

export const GameTitle = styled.h1`
   font-size: ${(props) => props.theme.fontSizes.large};
   font-weight: ${(props) => props.theme.fontWeights.bold};
   margin-bottom: 10px;
`;

export const InfosItem = styled.div`
   display: flex;
   align-items: flex-start;
   margin: 10px 0;
   color: ${(props) => props.theme.colors.grayText};
   display: -webkit-box;
   -webkit-line-clamp: 7;
   -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
   line-height: 1.3;
`;

export const Genre = styled.div`
   background-color: ${(props) => props.theme.colors.primary};
   color: ${(props) => props.theme.colors.whiteText};
   padding: 5px 12px;
   border-radius: 15px;
   font-size: 16px;
   display: inline-block;
   margin: 5px;
`;

export const ScreenshotsTitle = styled.h2`
   font-size: ${(props) => props.theme.fontSizes.larger};
   margin: 60px 0 35px 0;
`;

export const ScreenshotsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
   gap: 10px;
   padding: 20px;
   background-color: ${(props) => props.theme.colors.backgroundGray};
`;

export const Screenshot = styled.img`
   width: 100%;
   height: auto;
`;

export const SameSeriesTitle = styled.div`
   font-size: ${(props) => props.theme.fontSizes.larger};
   margin: 80px 0 35px 0;
`;
