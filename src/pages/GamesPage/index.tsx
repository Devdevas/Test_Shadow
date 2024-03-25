import React, { useState, useEffect } from "react";
import { NoResults, PageContainer } from "../../shared/styles/styles";
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

const GamesPage = () => {
   const dispatch = useAppDispatch();
   const games = useAppSelector((state) => state.games);
   const genres = useAppSelector((state) => state.genres);
   const platforms = useAppSelector((state) => state.platforms);
   const developers = useAppSelector((state) => state.developers);
   const gamesStores = useAppSelector((state) => state.gamesStores);

   const { totalPages, filteredGames, loadingFiltredGames, error } = games;

   const [filters, setFilters] = useState<GameFilters>({});
   const [currentPage, setCurrentPage] = useState<number>(1);
   const pageSize = 20;

   useEffect(() => {
      if (!genres.genres?.length) dispatch(fetchGenres());
      if (!platforms.platforms?.length) dispatch(fetchPlatforms());
      if (!developers.developers?.length) dispatch(fetchDevelopers());
      if (!gamesStores.gamesStores?.length) dispatch(fetchGamesStores());
   }, [dispatch, genres, platforms, developers, gamesStores]);

   useEffect(() => {
      // Fetch games initially without filters and with initial pagination
      dispatch(fetchFilteredGames({ ...filters, page: currentPage, page_size: pageSize }));
   }, [dispatch, filters, currentPage, pageSize]);

   useEffect(() => {
      const newFilters = { ...filters, page: currentPage };
      dispatch(fetchFilteredGames(newFilters));
   }, [dispatch, filters, currentPage]);

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
         <S.GamesContainer>
            <S.GamesTitle>List of all games</S.GamesTitle>
            <S.FiltersContainer>
               <div>
                  <S.FiltersTitle>Filters:</S.FiltersTitle>
                  <S.SelectContainer>
                     <S.SelectItem>
                        <S.Label>By genre</S.Label>
                        <S.StyledSelect
                           placeholder="Select Genre"
                           onChange={(value) => handleFilterChange(value as string, "genres")}
                        >
                           <Option value="">Select genre</Option>
                           {genres.genres.map((genre) => (
                              <Option key={genre.id} value={genre.id}>
                                 {genre.name}
                              </Option>
                           ))}
                        </S.StyledSelect>
                     </S.SelectItem>
                     <S.SelectItem>
                        <S.Label>By platform</S.Label>
                        <S.StyledSelect
                           placeholder="Select Platform"
                           onChange={(value) => handleFilterChange(value as string, "platforms")}
                        >
                           <Option value="">Select platform</Option>
                           {platforms.platforms.map((platform) => (
                              <Option key={platform.id} value={platform.id}>
                                 {platform.name}
                              </Option>
                           ))}
                        </S.StyledSelect>
                     </S.SelectItem>
                     <S.SelectItem>
                        <S.Label>By developer</S.Label>
                        <S.StyledSelect
                           placeholder="Select developer"
                           onChange={(value) => handleFilterChange(value as string, "developers")}
                        >
                           <Option value="">Select developer</Option>
                           {developers.developers.map((developer) => (
                              <Option key={developer.id} value={developer.id}>
                                 {developer.name}
                              </Option>
                           ))}
                        </S.StyledSelect>
                     </S.SelectItem>
                     <S.SelectItem>
                        <S.Label>By store</S.Label>
                        <S.StyledSelect
                           placeholder="Select games store"
                           onChange={(value) => handleFilterChange(value as string, "stores")}
                        >
                           <Option value="">Select store</Option>
                           {gamesStores.gamesStores.map((gamesStore) => (
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
            {error && <ErrorCard message={error} />}
            {!loadingFiltredGames &&
               !error &&
               (filteredGames && filteredGames.length ? (
                  <>
                     <S.GamesGrid>
                        {filteredGames.map((game) => (
                           <S.StyledLink key={game.id} to={`/games/${game.id}`}>
                              <GameCard game={game} />
                           </S.StyledLink>
                        ))}
                     </S.GamesGrid>
                     <S.PaginationContainer>
                        <S.StyledPagination
                           current={currentPage}
                           onChange={handlePageChange}
                           total={totalPages * pageSize}
                           pageSize={pageSize}
                           showSizeChanger={false}
                        />
                     </S.PaginationContainer>
                  </>
               ) : (
                  <NoResults>No games found!</NoResults>
               ))}
         </S.GamesContainer>
      </PageContainer>
   );
};

export default GamesPage;
