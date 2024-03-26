import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchGameMovies } from "../../redux/slices/games/gamesActions";
import GameTrailer from "../../components/GameTrailer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { NoResults, PageContainer } from "../../shared/styles/styles";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";
import * as S from "./styles";

const GameMoviesPage = () => {
   const { gameId } = useParams<{ gameId: string }>();
   const dispatch = useAppDispatch();
   const { gameMovies, loadingGameMovies, error } = useAppSelector((state) => state.games);

   useEffect(() => {
      if (gameId) dispatch(fetchGameMovies(gameId));
   }, [dispatch, gameId]);

   return (
      <PageContainer>
         {loadingGameMovies && <Loader />}
         {error && <ErrorCard message={error} />}

         <S.Title>Game Trailers</S.Title>
         <S.TrailersContainer>
            {!loadingGameMovies &&
               !error &&
               gameMovies &&
               (gameMovies.length ? (
                  gameMovies.map((movie) => <GameTrailer key={movie.id} trailer={movie} />)
               ) : (
                  <NoResults>No trailers available for this game.</NoResults>
               ))}
         </S.TrailersContainer>
      </PageContainer>
   );
};

export default GameMoviesPage;
