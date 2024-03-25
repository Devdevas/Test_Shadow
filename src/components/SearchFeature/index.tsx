import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchFilteredGames } from "../../redux/slices/games/gamesActions";
import ErrorCard from "../ErrorCard";
import { IoMdCloseCircle } from "react-icons/io";
import LoaderPoints from "../LoaderPoints";
import { formatPlatformsNames } from "../../shared/utils/formatPlatformsNames";

const SearchBar = () => {
   const dispatch = useAppDispatch();
   const [searchTerm, setSearchTerm] = useState("");
   const [showResults, setShowResults] = useState(false);

   const { filteredGames, loadingFiltredGames, error } = useAppSelector((state) => state.games);

   //Start games search only if 2 characters or more have been entered
   useEffect(() => {
      if (searchTerm.length >= 2) {
         dispatch(fetchFilteredGames({ search: searchTerm }));
         setShowResults(true);
      } else {
         setShowResults(false);
      }
   }, [searchTerm, dispatch]);

   const handleCloseResultsMenu = () => {
      setShowResults(false);
      setSearchTerm("");
   };

   const searchRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
         if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
            handleCloseResultsMenu(); // Closes menu if clicked outside
         }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
         document.removeEventListener("mousedown", handleClickOutside);
      };
   }, []);

   return (
      <S.SearchContainer ref={searchRef}>
         <S.SearchBarInput
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
         />
         {showResults && (
            <>
               <S.CloseIcon onClick={handleCloseResultsMenu}>
                  <IoMdCloseCircle size={20} />
               </S.CloseIcon>
               <S.SearchResults>
                  {loadingFiltredGames && <LoaderPoints />}
                  {error && <ErrorCard message={error} />}
                  {!loadingFiltredGames &&
                     !error &&
                     filteredGames.length > 0 &&
                     filteredGames.map((game) => (
                        <S.StyledLink key={game.id} to={`/games/${game.id}`}>
                           <S.SearchResultItem onClick={handleCloseResultsMenu}>
                              <S.GameCover>
                                 <img src={game.background_image} alt="Game cover" />
                              </S.GameCover>
                              <S.GameInfos>
                                 <S.GameName>{game.name}</S.GameName>
                                 <S.GameDate>{game.released}</S.GameDate>
                                 <S.GamePlatforms>{formatPlatformsNames(game.platforms)}</S.GamePlatforms>
                              </S.GameInfos>
                           </S.SearchResultItem>
                        </S.StyledLink>
                     ))}
                  {!loadingFiltredGames && !error && !filteredGames.length && "No games found!"}
               </S.SearchResults>
            </>
         )}
      </S.SearchContainer>
   );
};

export default SearchBar;
