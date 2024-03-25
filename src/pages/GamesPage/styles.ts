import { Link } from "react-router-dom";
import styled from "styled-components";
import { Select as AntSelect, Pagination } from "antd";

export const GamesContainer = styled.div`
   padding: 20px;
`;

export const GamesTitle = styled.div`
   font-size: ${(props) => props.theme.fontSizes.larger};
   margin: 0 0 35px 0;
   @media screen and (max-width: 490px) {
     font-size: ${(props) => props.theme.fontSizes.large};
   }
`;

export const FiltersContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: flex-end;
   justify-content: space-between;
   padding: 20px;
   background-color: ${(props) => props.theme.colors.backgroundGrayLighter};
   border-radius: 8px;
   margin-bottom: 20px;
`;

export const FiltersTitle = styled.h3`
   color: ${(props) => props.theme.colors.primary};
   font-size: ${(props) => props.theme.fontSizes.large};
   font-weight: ${(props) => props.theme.fontWeights.medium};
   margin-bottom: 20px;
`;

export const SelectContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   gap: 10px;
`;

export const StyledSelect = styled(AntSelect)`
   width: 180px;
   .ant-select-selector {
      background-color: ${(props) => props.theme.colors.backgroundBlack}!important;
   }
   .ant-select-selection-item,
   .ant-select-selection-placeholder {
      color: ${(props) => props.theme.colors.grayText}!important;
   }

   @media screen and (max-width: 1054px) {
      margin-bottom: 10px;
   }
`;

export const PaginationContainer = styled.div`
   text-align: center;
   margin-top: 50px;
`;

export const StyledPagination = styled(Pagination)`
   text-align: "center";
   .ant-pagination-item-active a {
      background-color: ${(props) => props.theme.colors.primary}!important;
      border: ${(props) => props.theme.borders.thin} ${(props) => props.theme.colors.whiteText}!important;
   }

   .ant-pagination-item a {
      background-color: ${(props) => props.theme.colors.backgroundGrayLighter};
      color: ${(props) => props.theme.colors.whiteText};
      border: ${(props) => props.theme.borders.thin} ${(props) => props.theme.colors.whiteText};
      border-radius: ${(props) => props.theme.borderRadius.small};
   }

   .ant-pagination-item a:hover {
      border-color: ${(props) => props.theme.colors.secondary};
   }

   .ant-pagination-prev,
   .ant-pagination-next {
      background: ${(props) => props.theme.colors.whiteText}!important;
   }
`;

export const SelectItem = styled.div``;

export const SortContainer = styled.div`
   width: 200px;
`;

export const Label = styled.div`
   color: ${(props) => props.theme.colors.whiteText};
   font-size: ${(props) => props.theme.fontSizes.medium};
   font-weight: ${(props) => props.theme.fontWeights.medium};
   margin-bottom: 7px;
`;

export const GamesGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
   gap: 20px;
`;

export const StyledLink = styled(Link)`
   text-decoration: none;
   color: inherit;
   &:hover {
      text-decoration: none;
   }
`;
export const DropdownButton = styled.button`
   padding: 8px 16px;
   border-radius: 20px;
   background-color: #007bff;
   color: white;
   border: none;
   cursor: pointer;
   font-size: 1rem;
   margin: 0 5px 10px 0;
`;

export const DropdownContent = styled.div<{ isVisible: boolean }>`
   display: ${({ isVisible }) => (isVisible ? "block" : "none")};
   position: absolute;
   background-color: #f1f1f1;
   min-width: 160px;
   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
   z-index: 1;
   border-radius: 5px;
   padding: 12px 16px;

   button {
      background-color: transparent;
      color: black;
      padding: 10px 20px;
      border: none;
      text-align: left;
      display: block;
      width: 100%;
      &:hover {
         background-color: #ddd;
      }
   }
`;

export const DropdownContainer = styled.div`
   position: relative;
   display: inline-block;
`;
