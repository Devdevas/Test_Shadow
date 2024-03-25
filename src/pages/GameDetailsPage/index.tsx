import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchGameDetails, fetchGameScreenShots } from "../../redux/slices/games/gamesActions";
import * as S from "./styles";
import { PageContainer } from "../../shared/styles/styles";
import Loader from "../../components/Loader";
import ErrorCard from "../../components/ErrorCard";
import { MdStar } from "react-icons/md";
import { formatPlatformsNames } from "../../shared/utils/formatPlatformsNames";

const GameDetailsPage = () => {
   const { gameId } = useParams<{ gameId: string }>();
   const dispatch = useAppDispatch();
   const { gameScreenshots, gameDetails, loading, loadingScreenshots, error } = useAppSelector((state) => state.games);

   useEffect(() => {
      if (gameId) {
         dispatch(fetchGameDetails(gameId));
         dispatch(fetchGameScreenShots(gameId));
      }
   }, [dispatch, gameId]);

   return (
      <PageContainer>
         {loading && <Loader />}
         {error && <ErrorCard message={error} />}
         {!loading && !error && gameDetails && (
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
                        <MdStar size={20} color="#C3073F" style={{ marginRight: "5px" }} /> / {gameDetails.rating_top} (
                        {gameDetails.ratings_count} ratings)
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
                     gameScreenshots?.map((shot) => <S.Screenshot key={shot.id} src={shot.image} alt="Screenshot" />)}
               </S.ScreenshotsContainer>
               <S.GameDetails>{/* Additional details like description, tags, stores can go here */}</S.GameDetails>
            </S.GameDetailsContainer>
         )}
      </PageContainer>
   );
};

export default GameDetailsPage;
