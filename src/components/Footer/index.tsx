import React from "react";
import * as S from "./style";

const Footer = () => (
   <S.FooterContainer>
      <div>
         <S.StyledNavLink to="https://shadow.tech/fr-FR/about-us">About</S.StyledNavLink>
         <S.StyledNavLink to="https://shadow.tech/fr-FR">Contact</S.StyledNavLink>
      </div>
      <div>© 2024 SHADOW Gaming. All rights reserved.</div>
   </S.FooterContainer>
);

export default Footer;
