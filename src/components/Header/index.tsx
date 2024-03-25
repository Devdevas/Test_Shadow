import React from "react";
import * as S from "./style";
import { MdAccountCircle } from "react-icons/md";
import logoImg from "../../assets/logo-shadow-games.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchFeature";

const Header = () => {
   return (
      <>
         <S.HeaderContainer>
            <NavLink to="/">
               <S.Logo src={logoImg} alt="Logo of Shadow Games" />
            </NavLink>
            <SearchBar />
            <S.SubscribeButton>Subscribe</S.SubscribeButton>
            <S.ProfileContainer>
               <MdAccountCircle size={25} />
               <S.User>User</S.User>
               <TiArrowSortedDown />
            </S.ProfileContainer>
         </S.HeaderContainer>
      </>
   );
};

export default Header;
