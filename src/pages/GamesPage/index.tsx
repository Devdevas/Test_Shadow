import React, { useState, useEffect } from "react";
import { NoResults, PageContainer, StyledLink } from "../../shared/styles/styles";
import { fetchFilteredGames } from "../../redux/slices/games/gamesActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import GameCard from "../../components/GameCard";
import * as S from "./styles";
import { GameFilters } from "../../redux/slices/games/gamesTypes";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";
import { fetchGenres } from "../../redux/slices/genres/genresActions";
import { fetchPlatforms } from "../../redux/slices/platforms/platformsActions";
import { fetchDevelopers } from "../../redux/slices/developers/developersActions";
import { fetchGamesStores } from "../../redux/slices/gamesStores/gamesStoresActions";
import { Select } from "antd";
import { useLocation } from "react-router-dom";

const GamesPage = () => {
   const dispatch = useAppDispatch();
   const gamesState = useAppSelector((state) => state.games);
   const genresState = useAppSelector((state) => state.genres);
   const platformsState = useAppSelector((state) => state.platforms);
   const developersState = useAppSelector((state) => state.developers);
   const gamesStoresState = useAppSelector((state) => state.gamesStores);

   const genres = genresState.genres;
   const platforms = platformsState.platforms;
   const developers = developersState.developers;
   const gamesStores = gamesStoresState.gamesStores;

   const { totalGames, filteredGames, loadingFiltredGames, error } = gamesState;

   const [currentPage, setCurrentPage] = useState<number>(1);
   const pageSize = 20;

   const location = useLocation();
   const getSearchTermFromQuery = (query: any) => {
      const params = new URLSearchParams(query);
      return params.get("search") || "";
   };

   const [filters, setFilters] = useState<GameFilters>({
      search: getSearchTermFromQuery(location.search),
      page: 1,
      page_size: pageSize,
   });

   useEffect(() => {
      if (!genres?.length) dispatch(fetchGenres());
      if (!platforms?.length) dispatch(fetchPlatforms());
      if (!developers?.length) dispatch(fetchDevelopers());
      if (!gamesStores?.length) dispatch(fetchGamesStores());
   }, [dispatch, genres, platforms, developers, gamesStores]);

   useEffect(() => {
      const searchTerm = getSearchTermFromQuery(location.search);
      //Update filters by adding searchTerm
      setFilters((prevFilters) => ({
         ...prevFilters,
         search: searchTerm,
         page: currentPage,
         page_size: pageSize,
      }));
   }, [location.search, currentPage, pageSize]);

   useEffect(() => {
      const newFilters = { ...filters, page: currentPage, page_size: pageSize };
      dispatch(fetchFilteredGames(newFilters));
   }, [dispatch, filters, currentPage, pageSize]);

   const { Option } = Select;
   const handleFilterChange = (value: string, filterType: keyof GameFilters) => {
      if (value) {
         // If the selected value is not the empty option, update the key with the new value
         setFilters((prev) => ({ ...prev, [filterType]: value }));
      } else {
         // If the value is the empty option, remove the entire key from the filter object
         const newFilters = { ...filters };
         delete newFilters[filterType];
         setFilters(newFilters);
      }
   };

   const handlePageChange = (page: number) => {
      setCurrentPage(page);
   };

   const orderOptions = [
      { label: "Name (A-Z)", value: "name" },
      { label: "Name (Z-A)", value: "-name" },
      { label: "Release Date (Newest)", value: "-released" },
      { label: "Release Date (Oldest)", value: "released" },
      { label: "Rating (Highest)", value: "-rating" },
      { label: "Rating (Lowest)", value: "rating" },
      { label: "Popularity (Most Popular)", value: "-added" },
      { label: "Popularity (Least Popular)", value: "added" },
      { label: "Reviews (Most)", value: "-reviews_count" },
      { label: "Reviews (Fewest)", value: "reviews_count" },
      { label: "Metacritic (Highest)", value: "-metacritic" },
      { label: "Metacritic (Lowest)", value: "metacritic" },
   ];

   return (
      <PageContainer>
         <S.GamesTitle>List of all games</S.GamesTitle>
         <S.FiltersContainer>
            <div>
               <S.FiltersTitle>Filters:</S.FiltersTitle>
               <S.SelectContainer>
                  <S.SelectItem>
                     <S.Label>By genre</S.Label>
                     <S.StyledSelect
                        active={!!filters.genres}
                        placeholder="Select Genre"
                        onChange={(value) => handleFilterChange(value as string, "genres")}
                     >
                        <Option value="">Select genre</Option>
                        {genres?.map((genre) => (
                           <Option key={genre.id} value={genre.id}>
                              {genre.name}
                           </Option>
                        ))}
                     </S.StyledSelect>
                  </S.SelectItem>
                  <S.SelectItem>
                     <S.Label>By platform</S.Label>
                     <S.StyledSelect
                        active={!!filters.platforms}
                        placeholder="Select Platform"
                        onChange={(value) => handleFilterChange(value as string, "platforms")}
                     >
                        <Option value="">Select platform</Option>
                        {platforms?.map((platform) => (
                           <Option key={platform.id} value={platform.id}>
                              {platform.name}
                           </Option>
                        ))}
                     </S.StyledSelect>
                  </S.SelectItem>
                  <S.SelectItem>
                     <S.Label>By developer</S.Label>
                     <S.StyledSelect
                        active={!!filters.developers}
                        placeholder="Select developer"
                        onChange={(value) => handleFilterChange(value as string, "developers")}
                     >
                        <Option value="">Select developer</Option>
                        {developers?.map((developer) => (
                           <Option key={developer.id} value={developer.id}>
                              {developer.name}
                           </Option>
                        ))}
                     </S.StyledSelect>
                  </S.SelectItem>
                  <S.SelectItem>
                     <S.Label>By store</S.Label>
                     <S.StyledSelect
                        active={!!filters.stores}
                        placeholder="Select games store"
                        onChange={(value) => handleFilterChange(value as string, "stores")}
                     >
                        <Option value="">Select store</Option>
                        {gamesStores?.map((gamesStore) => (
                           <Option key={gamesStore.id} value={gamesStore.id}>
                              {gamesStore.name}
                           </Option>
                        ))}
                     </S.StyledSelect>
                  </S.SelectItem>
               </S.SelectContainer>
            </div>
            <S.SelectItem>
               <S.Label>Sort</S.Label>
               <S.StyledSelect
                  active={!!filters.ordering}
                  placeholder="Sort by"
                  onChange={(value) => handleFilterChange(value as string, "ordering")}
               >
                  <Option value="">Default</Option>
                  {orderOptions.map((option) => (
                     <Option key={option.value} value={option.value}>
                        {option.label}
                     </Option>
                  ))}
               </S.StyledSelect>
            </S.SelectItem>
         </S.FiltersContainer>

         {loadingFiltredGames && <Loader />}
         {error && error !== "Failed to fetch filtred games! The requested resource couldn't be found." && (
            <ErrorCard message={error} />
         )}
         {!loadingFiltredGames &&
            !error &&
            (filteredGames && filteredGames.length ? (
               <>
                  <S.GamesGrid>
                     {filteredGames.map((game) => (
                        <StyledLink key={game.id} to={`/games/${game.id}`}>
                           <GameCard game={game} />
                        </StyledLink>
                     ))}
                  </S.GamesGrid>
                  <S.PaginationContainer>
                     <S.StyledPagination
                        current={currentPage}
                        onChange={handlePageChange}
                        total={totalGames}
                        pageSize={pageSize}
                        showSizeChanger={false}
                     />
                  </S.PaginationContainer>
               </>
            ) : null)}
         {!filteredGames.length ||
            (error && error === "Failed to fetch filtred games! The requested resource couldn't be found." && (
               <NoResults>No games found!</NoResults>
            ))}
      </PageContainer>
   );
};

export default GamesPage;
