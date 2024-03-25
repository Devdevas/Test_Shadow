import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${(props) => props.theme.colors.backgroundGrayLighter};
   padding: ${(props) => props.theme.spacing.small};
`;

export const StyledNavLink = styled(NavLink)`
   color: ${(props) => props.theme.colors.whiteText};
   text-decoration: none;
   margin-right: ${(props) => props.theme.spacing.large};
   font-weight: ${(props) => props.theme.fontWeights.bold};

   &:hover {
      color: ${(props) => props.theme.colors.secondary};
   }

   &.active {
      color: ${(props) => props.theme.colors.primary};
   }
`;
