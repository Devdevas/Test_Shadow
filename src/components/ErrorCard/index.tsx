import React from "react";
import * as S from "./style";

interface Props {
   message: string;
}

const ErrorCard = ({ message }: Props) => {
   return (
      <S.ErrorCardContainer>
         <S.ErrorMessage>{message}</S.ErrorMessage>
      </S.ErrorCardContainer>
   );
};

export default ErrorCard;
