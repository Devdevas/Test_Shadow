import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
   fetchFilteredGames,
   fetchGameDetails,
   fetchGameMovies,
   fetchGames,
   fetchGameScreenShots,
   fetchGamesFromSeries,
} from "./gamesActions";
import { Game, GameMovie, GamesState, Screenshot } from "./gamesTypes";
import { ApiResponse } from "../sharedTypes";

const initialState: GamesState = {
   games: [],
   filteredGames: [],
   totalPages: 0,
   gameDetails: null,
   gamesFromSeries: [],
   gameMovies: [],
   gameScreenshots: [],
   loading: false,
   loadingFiltredGames: false,
   loadingGameMovies: false,
   loadingScreenshots: false,
   error: null,
};

export const gamesSlice = createSlice({
   name: "games",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         //Manage the games state according to response's status
         .addCase(fetchGames.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchGames.fulfilled, (state, action: PayloadAction<Game[]>) => {
            state.games = action.payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(fetchGames.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? "Failed to fetch games";
         });
      builder
         //Manage the game details state according to response's status
         .addCase(fetchGameDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchGameDetails.fulfilled, (state, action: PayloadAction<Game>) => {
            state.gameDetails = action.payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(fetchGameDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? "Failed to fetch game details";
         });
      builder
         //Manage filtered games state according to response's status
         .addCase(fetchFilteredGames.pending, (state) => {
            state.loadingFiltredGames = true;
            state.error = null;
         })
         .addCase(fetchFilteredGames.fulfilled, (state, action: PayloadAction<ApiResponse<Game[]>>) => {
            state.filteredGames = action.payload.results;
            state.totalPages = action.payload.count;
            state.loadingFiltredGames = false;
            state.error = null;
         })
         .addCase(fetchFilteredGames.rejected, (state, action) => {
            state.loadingFiltredGames = false;
            state.error = action.payload ?? "Failed to fetch filtered games";
         });
      builder
         //Manage games from series state according to response's status
         .addCase(fetchGamesFromSeries.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchGamesFromSeries.fulfilled, (state, action: PayloadAction<Game[]>) => {
            state.gamesFromSeries = action.payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(fetchGamesFromSeries.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? "Failed to fetch games from the same series";
         });
      builder
         //Manage game movies state according to response's status
         .addCase(fetchGameMovies.pending, (state) => {
            state.loadingGameMovies = true;
            state.error = null;
         })
         .addCase(fetchGameMovies.fulfilled, (state, action: PayloadAction<GameMovie[]>) => {
            state.gameMovies = action.payload;
            state.loadingGameMovies = false;
            state.error = null;
         })
         .addCase(fetchGameMovies.rejected, (state, action) => {
            state.loadingGameMovies = false;
            state.error = action.payload ?? "Failed to fetch game movies";
         });
      builder
         //Manage game movies state according to response's status
         .addCase(fetchGameScreenShots.pending, (state) => {
            state.loadingGameMovies = true;
            state.error = null;
         })
         .addCase(fetchGameScreenShots.fulfilled, (state, action: PayloadAction<Screenshot[]>) => {
            state.gameScreenshots = action.payload;
            state.loadingScreenshots = false;
            state.error = null;
         })
         .addCase(fetchGameScreenShots.rejected, (state, action) => {
            state.loadingScreenshots = false;
            state.error = action.payload ?? "Failed to fetch game screenshots";
         });
   },
});

export default gamesSlice.reducer;
