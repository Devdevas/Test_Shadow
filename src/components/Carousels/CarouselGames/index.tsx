import React from "react";
import { Game } from "../../../redux/slices/games/gamesTypes";
import * as S from "./style";
import { SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import CarouselGameCard from "../CarouselGameCard";

interface Props {
   games: Game[];
}

const CarouselGames = ({ games }: Props) => {
   return (
      <S.StyledSwiper
         slidesPerView={5}
         spaceBetween={30}
         navigation={true}
         modules={[Navigation, Pagination]}
         breakpoints={{
            400: {
               slidesPerView: 1,
               spaceBetween: 10,
            },
            640: {
               slidesPerView: 2,
               spaceBetween: 20,
            },
            768: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
            1024: {
               slidesPerView: 4,
               spaceBetween: 40,
            },
         }}
      >
         {games.map((game) => (
            <SwiperSlide key={game.id}>
               <CarouselGameCard game={game} />
            </SwiperSlide>
         ))}
      </S.StyledSwiper>
   );
};

export default CarouselGames;
