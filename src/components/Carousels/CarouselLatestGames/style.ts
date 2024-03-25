import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CarouselContainer = styled.div``;

export const SlideImage = styled.div`
   position: relative;
`;

export const GameTitle = styled.div`
   display: flex;
   align-items: center;
   position: absolute;
   bottom: 30px;
   width: 100%;
   padding: 10px 50px;
   color: ${(props) => props.theme.colors.whiteText};
   @media screen and (max-width: 768px) {
      font-size: ${(props) => props.theme.fontSizes.medium};
      padding: 10px 20px;
   }
`;

export const GameName = styled.div`
   font-size: ${(props) => props.theme.fontSizes.larger};
   font-weight: ${(props) => props.theme.fontWeights.medium};
`;
export const GameSubTitle = styled.p`
   color: ${(props) => props.theme.colors.grayText};
   font-size: ${(props) => props.theme.fontSizes.large};
   font-weight: ${(props) => props.theme.fontWeights.medium};
`;

export const StyledSwiper = styled(Swiper)`
   .swiper-button-next,
   .swiper-button-prev {
      color: ${(props) => props.theme.colors.primary};
      padding: ${(props) => props.theme.spacing.small};
      border: ${(props) => props.theme.borders.thin} ${(props) => props.theme.colors.primary};
      border-radius: ${(props) => props.theme.borderRadius.small};
      background-color: ${(props) => props.theme.colors.backgroundTransparent};
   }

   .swiper-pagination-bullet {
      background-color: ${(props) => props.theme.colors.whiteText};
   }

   .swiper-pagination-bullet-active {
      background-color: ${(props) => props.theme.colors.primary};
   }
   border-radius: ${(props) => props.theme.borderRadius.large};
   overflow: hidden;
`;
