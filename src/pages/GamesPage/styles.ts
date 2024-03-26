import styled from "styled-components";
import { Select as AntSelect, Pagination } from "antd";

interface Props {
   active?: boolean;
}

export const GamesContainer = styled.div`
   padding: 20px;
`;

export const GamesTitle = styled.h1`
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

export const StyledSelect = styled(AntSelect)<Props>`
   width: 180px;
   .ant-select-selector {
      background-color: ${(props) => props.theme.colors.backgroundBlack}!important;
   }
   .ant-select-selection-item,
   .ant-select-selection-placeholder {
      color: ${(props) => (props.active ? props.theme.colors.whiteText : props.theme.colors.grayText)}!important;
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

export const SelectItem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`;

export const SortContainer = styled.div`
   width: 200px;
`;

export const Label = styled.label`
   color: ${(props) => props.theme.colors.whiteText};
   font-size: ${(props) => props.theme.fontSizes.medium};
   font-weight: ${(props) => props.theme.fontWeights.small};
   margin-bottom: 7px;
`;

export const GamesGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
   gap: 20px;
`;
