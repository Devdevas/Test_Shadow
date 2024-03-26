import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchGameDetails, fetchGameScreenShots, fetchGamesFromSeries } from "../../redux/slices/games/gamesActions";
import * as S from "./styles";
import { PageContainer } from "../../shared/styles/styles";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";
import { MdStar } from "react-icons/md";
import { formatPlatformsNames } from "../../shared/utils/formatPlatformsNames";
import CarouselGames from "../../components/Carousels/CarouselGames";

const GameDetailsPage = () => {
   const { gameId } = useParams<{ gameId: string }>();
   const dispatch = useAppDispatch();
   const { gamesFromSeries, gameScreenshots, gameDetails, loading, loadingScreenshots, error } = useAppSelector(
      (state) => state.games
   );

   useEffect(() => {
      if (gameId && gameId !== gameDetails?.id.toString()) {
         dispatch(fetchGameDetails(gameId));
         dispatch(fetchGameScreenShots(gameId));
         dispatch(fetchGamesFromSeries(gameId));
      }
   }, [dispatch, gameId, gameDetails]);

   return (
      <PageContainer>
         {loading && <Loader />}
         {error && <ErrorCard message={error} />}
         {!loading && !error && gameDetails && (
            <>
               <S.GameDetailsContainer>
                  <S.GameHeader>
                     <S.CoverImage src={gameDetails.background_image} alt={gameDetails.name} />
                     <S.GameInfo>
                        <S.GameTitle>{gameDetails.name}</S.GameTitle>
                        <S.InfosItem>
                           <strong>Released on:</strong> {gameDetails.released}
                        </S.InfosItem>
                        <S.InfosItem>
                           <strong>Platforms:</strong> {formatPlatformsNames(gameDetails.platforms)}
                        </S.InfosItem>
                        <S.InfosItem>
                           <strong>Rating:</strong> {gameDetails.rating}{" "}
                           <MdStar size={20} color="#C3073F" style={{ marginRight: "5px" }} /> /{" "}
                           {gameDetails.rating_top} ({gameDetails.ratings_count} ratings)
                        </S.InfosItem>
                        <S.InfosItem>
                           <strong>Genre:</strong>{" "}
                           {gameDetails.genres?.map((genre) => (
                              <S.Genre key={genre.id}>{genre.name}</S.Genre>
                           ))}
                        </S.InfosItem>
                        <S.InfosItem>
                           <strong>Description:</strong> {gameDetails.description_raw}
                        </S.InfosItem>
                     </S.GameInfo>
                  </S.GameHeader>
                  <S.ScreenshotsTitle>Screenshots</S.ScreenshotsTitle>
                  <S.ScreenshotsContainer>
                     {loadingScreenshots && <Loader />}
                     {!loadingScreenshots &&
                        !error &&
                        gameScreenshots?.map((shot) => (
                           <S.Screenshot key={shot.id} src={shot.image} alt="Screenshot" />
                        ))}
                  </S.ScreenshotsContainer>
               </S.GameDetailsContainer>
               <S.SameSeriesTitle>Games from the same series</S.SameSeriesTitle>
               <CarouselGames games={gamesFromSeries} />
            </>
         )}
      </PageContainer>
   );
};

export default GameDetailsPage;
