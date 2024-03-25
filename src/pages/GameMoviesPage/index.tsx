import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchGameMovies } from "../../redux/slices/games/gamesActions";
import GameTrailer from "../../components/GameMovies";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { PageContainer } from "../../shared/styles/styles";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";

const GameMoviesPage = () => {
   const { gameId } = useParams<{ gameId: string }>();
   const dispatch = useAppDispatch();
   const { gameMovies, loadingGameMovies, error } = useAppSelector((state) => state.games);

   useEffect(() => {
      if (gameId) dispatch(fetchGameMovies(gameId));
   }, [gameId, dispatch]);

   return (
      <PageContainer>
         {loadingGameMovies && <Loader />}
         {error && <ErrorCard message={error} />}
         <h1>Game Trailers</h1>
         {!loadingGameMovies &&
            !error &&
            gameMovies &&
            (gameMovies.length > 0 ? (
               gameMovies.map((movie) => <GameTrailer key={movie.id} trailer={movie} />)
            ) : (
               <p>No trailers available for this game.</p>
            ))}
      </PageContainer>
   );
};

export default GameMoviesPage;
