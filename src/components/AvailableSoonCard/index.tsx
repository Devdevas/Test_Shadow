import React from "react";
import { PageContainer } from "../../shared/styles/styles";
import { Message } from "./style";

interface Props {
   message: string;
}

export const AvailableSoonCard = ({ message }: Props) => {
   return (
      <PageContainer>
         <Message>{message}</Message>
      </PageContainer>
   );
};
