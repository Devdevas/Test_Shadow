import React, { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PageContainer } from "../../shared/styles/styles";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";
import CarouselLatestGames from "../../components/Carousels/CarouselLatestGames";
import { fetchGames } from "../../redux/slices/games/gamesActions";
import { Game } from "../../redux/slices/games/gamesTypes";
import * as S from "./styles";
import CarouselGames from "../../components/Carousels/CarouselGames";

const HomePage = () => {
   const dispatch = useAppDispatch();
   const { games, loading, error } = useAppSelector((state) => state.games);

   useEffect(() => {
      if (!games.length) dispatch(fetchGames());
   }, [dispatch, games]);

   const latestGames: Game[] = useMemo(() => {
      // Sort and slice games to obtain the last 20 games released
      return [...games].sort((a, b) => new Date(b.released).getTime() - new Date(a.released).getTime()).slice(0, 20);
   }, [games]);

   const topGames: Game[] = useMemo(() => {
      // Sort and slice games to obtain the top 20 rated games
      return [...games].sort((a, b) => b.rating - a.rating).slice(0, 20);
   }, [games]);

   const mostPlayedGames: Game[] = useMemo(() => {
      // Sort and slice games to obtain the top 20 most played games
      return [...games].sort((a, b) => b.added - a.added).slice(0, 20);
   }, [games]);

   return (
      <PageContainer>
         {loading && <Loader />}
         {error && <ErrorCard message={error} />}
         {!loading && !error && games && (
            <>
               <CarouselLatestGames games={latestGames} />
               <S.TopGamesTitle>The highest rated games</S.TopGamesTitle>
               <CarouselGames games={topGames} />
               <S.TopGamesTitle>The most played games</S.TopGamesTitle>
               <CarouselGames games={mostPlayedGames} />
            </>
         )}
      </PageContainer>
   );
};

export default HomePage;
