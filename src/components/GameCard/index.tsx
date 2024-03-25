import React from "react";
import * as S from "./style";
import { Game } from "../../redux/slices/games/gamesTypes";

interface GameCardProps {
   game: Game;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
   return (
      <S.Card>
         <S.CardImage src={game.background_image} alt={`Cover for ${game.name}`} />
         <S.CardBody>
            <S.CardTitle>{game.name}</S.CardTitle>
            <S.CardGenres>
               {game.genres.map((genre) => (
                  <S.GenreBadge key={genre.id}>{genre.name}</S.GenreBadge>
               ))}
            </S.CardGenres>
         </S.CardBody>
      </S.Card>
   );
};

export default GameCard;
