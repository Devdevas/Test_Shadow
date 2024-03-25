import styled from "styled-components";

export const HeaderContainer = styled.header`
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: ${(props) => props.theme.colors.backgroundGray};
   padding: ${(props) => props.theme.spacing.medium} 145px;

   @media screen and (max-width: 1024px) {
      padding: ${(props) => props.theme.spacing.medium} 60px;
   }

   @media screen and (max-width: 768px) {
      flex-wrap: wrap;
   }

   @media screen and (max-width: 540px) {
      padding: 20px 10px;
   }
`;

export const LogoContainer = styled.div`
   cursor: pointer;
`;

export const Logo = styled.img`
   width: 150px;
   margin-bottom: 2px;
   padding: 0 20px;
`;

export const SubscribeButton = styled.button`
   padding: ${(props) => props.theme.spacing.small} ${(props) => props.theme.spacing.medium};
   border: none;
   border-radius: ${(props) => props.theme.borderRadius.small};
   background-color: ${(props) => props.theme.colors.primary};
   color: ${(props) => props.theme.colors.whiteText};
   cursor: pointer;
   &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
   }

   @media screen and (max-width: 1350px) {
      margin-left: 50px;
      padding: ${(props) => props.theme.spacing.small} ${(props) => props.theme.spacing.small};
   }

   @media screen and (max-width: 576px) {
      flex-wrap: nowrap;
      margin-left: 10px;
      padding: ${(props) => props.theme.spacing.small} ${(props) => props.theme.spacing.small};
   }
`;

export const User = styled.p`
   margin: 0 10px;
   font-size: ${(props) => props.theme.fontSizes.medium};
   font-weight: ${(props) => props.theme.fontWeights.bold};

   @media screen and (max-width: 768px) {
      display: none;
   }
`;

export const ProfileContainer = styled.div`
   border-left: 1px solid ${(props) => props.theme.colors.grayText};
   margin-left: 30px;
   padding: 0 20px;
   display: flex;
   align-items: center;
   justify-content: center;
   color: ${(props) => props.theme.colors.whiteText};
   cursor: pointer;

   @media screen and (max-width: 768px) {
      padding: 0 10px;
   }
`;
