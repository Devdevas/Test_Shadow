import styled from "styled-components";

export const Card = styled.div`
   width: 100%;
   height: 100%;
   min-height: 300px;
   border-radius: ${(props) => props.theme.borderRadius.large};
   overflow: hidden;
   transition: transform 0.2s;
   background: linear-gradient(to bottom, rgba(27, 27, 27, 1) 70%, rgba(27, 27, 27, 0) 100%);
   &:hover {
      transform: translateY(-5px);
   }
`;

export const CardImage = styled.img`
   max-width: 100%;
   height: 180px;
   display: block;
   object-fit: cover;
   cursor: pointer;
`;

export const CardBody = styled.div`
   padding: 10px;
`;

export const CardTitle = styled.h3`
   margin: 10px 0;
   font-size: ${(props) => props.theme.fontSizes.medium};
   font-weight: ${(props) => props.theme.fontWeights.medium};
   color: ${(props) => props.theme.colors.whiteText};
`;

export const CardGenres = styled.div`
   display: flex;
   gap: 10px;
   flex-wrap: wrap;
`;

export const GenreBadge = styled.span`
   background-color: ${(props) => props.theme.colors.backgroundBlack};
   border-radius: ${(props) => props.theme.borderRadius.large};
   border: ${(props) => props.theme.borders.thin} ${(props) => props.theme.colors.secondary};
   padding: 5px 10px;
   font-size: ${(props) => props.theme.fontSizes.small};
   white-space: nowrap;
`;
