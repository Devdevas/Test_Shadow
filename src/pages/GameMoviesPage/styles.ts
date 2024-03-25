import styled from "styled-components";

export const GameDetailsContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const GameHeader = styled.div`
   display: flex;
   padding: 20px;
   align-items: center;
   background: #f0f0f0;
`;

export const CoverImage = styled.img`
   height: 400px;
   margin-right: 20px;
   object-fit: cover;
`;

export const GameInfo = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const GameTitle = styled.h1`
   margin: 0;
`;

export const GameRating = styled.div`
   font-size: 1.2em;
   color: #333;
`;

export const ScreenshotsContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
   gap: 10px;
   padding: 20px;
`;

export const Screenshot = styled.img`
   width: 100%;
   height: auto;
`;

export const GameDetails = styled.div`
   padding: 20px;
`;
