import React from "react";
import { Game } from "../../../redux/slices/games/gamesTypes";
import * as S from "./style";
import { SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";

interface Props {
   games: Game[];
}

const CarouselLatestGames = ({ games }: Props) => {
   return (
      <S.StyledSwiper
         spaceBetween={50}
         slidesPerView={1}
         centeredSlides={true}
         loop={true}
         effect={"fade"}
         autoplay={{
            delay: 4500,
            disableOnInteraction: false,
         }}
         pagination={{
            clickable: true,
         }}
         navigation={true}
         modules={[EffectFade, Autoplay, Pagination, Navigation]}
      >
         {games.map((game) => (
            <SwiperSlide key={game.id}>
               <Link to={`/games/${game.id}`}>
                  <S.SlideImage
                     style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1)), url(${game.background_image})`,
                        backgroundSize: "cover",
                        height: "500px",
                        cursor: "pointer",
                     }}
                  ></S.SlideImage>
               </Link>
               <S.GameTitle>
                  <Link to={`/games/${game.id}/movies`}>
                     <MdOutlinePlayCircleFilled
                        color="white"
                        size={80}
                        style={{ marginRight: "10px", cursor: "pointer" }}
                     />
                  </Link>
                  <div>
                     <S.GameName>{game.name}</S.GameName>
                     <S.GameSubTitle>Watch trailer</S.GameSubTitle>
                  </div>
               </S.GameTitle>
            </SwiperSlide>
         ))}
      </S.StyledSwiper>
   );
};

export default CarouselLatestGames;
