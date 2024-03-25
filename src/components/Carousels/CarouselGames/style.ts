import styled from "styled-components";
import { Swiper } from "swiper/react";

export const CarouselContainer = styled.div``;

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
