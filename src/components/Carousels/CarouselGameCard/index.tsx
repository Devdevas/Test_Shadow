import React from "react";
import { Game } from "../../../redux/slices/games/gamesTypes";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { MdStar } from "react-icons/md";
import * as S from "./style";
import { Link } from "react-router-dom";

interface props {
   game: Game;
}

const CarouselGameCard = ({ game }: props) => {
   return (
      <S.CardContainer>
         <Link to={`/games/${game.id}`}>
            <S.SlideImage
               style={{
                  backgroundImage: `url(${game.background_image})`,
                  backgroundSize: "cover",
                  height: "200px",
                  backgroundPosition: "center",
                  cursor: "pointer",
               }}
            ></S.SlideImage>
         </Link>
         <S.GameTitle>
            <S.Rating>
               <MdStar size={20} color="#C3073F" style={{ marginRight: "5px" }} />
               {game.rating}
            </S.Rating>
            <S.GameName title={game.name}>{game.name}</S.GameName>
            <S.StyledLink to={`/games/${game.id}/movies`}>
               <S.TrailerContainer>
                  <MdOutlinePlayCircleFilled
                     color="white"
                     size={25}
                     style={{ marginRight: "5px", cursor: "pointer" }}
                  />
                  <S.GameSubTitle>Watch trailer</S.GameSubTitle>
               </S.TrailerContainer>
            </S.StyledLink>
         </S.GameTitle>
      </S.CardContainer>
   );
};

export default CarouselGameCard;
