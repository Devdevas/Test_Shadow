import React from "react";
import * as S from "./style";
import gameControllerImg from "../../assets/game-controller.png";

const Loader = () => {
   return (
      <S.LoaderContainer>
         <S.GameControllerIcon src={gameControllerImg} alt="Game Controller icon" />
      </S.LoaderContainer>
   );
};

export default Loader;
