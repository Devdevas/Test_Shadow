import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
   background-color: ${(props) => props.theme.colors.backgroundGray};
   color: ${(props) => props.theme.colors.grayText};
   text-align: center;
   padding: 20px 0;
   margin-top: 50px;
   font-size: ${(props) => props.theme.fontSizes.medium};
   & div {
      margin: 20px;
   }
`;

export const StyledNavLink = styled(NavLink)`
   color: ${(props) => props.theme.colors.whiteText};
   text-decoration: none;
   margin-right: ${(props) => props.theme.spacing.large};
   font-weight: ${(props) => props.theme.fontWeights.bold};

   &:hover {
      color: ${(props) => props.theme.colors.secondary};
   }
`;
