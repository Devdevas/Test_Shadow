import React from "react";
import { Nav, StyledNavLink } from "./style";

const NavBar = () => {
   return (
      <Nav>
         <StyledNavLink to="/" end>
            Home
         </StyledNavLink>
         <StyledNavLink to="/games" end>
            Games
         </StyledNavLink>
         <StyledNavLink to="/platforms" end>
            Platforms
         </StyledNavLink>
         <StyledNavLink to="/genres" end>
            Genres
         </StyledNavLink>
      </Nav>
   );
};

export default NavBar;
