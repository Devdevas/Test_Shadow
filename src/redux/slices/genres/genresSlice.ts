import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGenres, fetchGenreDetails } from "./genresActions";
import { Genre, GenresState } from "./genresTypes";

const initialState: GenresState = {
   genres: [],
   genreDetails: null,
   loading: false,
   error: null,
};

export const genresSlice = createSlice({
   name: "genres",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchGenres.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchGenres.fulfilled, (state, action: PayloadAction<Genre[]>) => {
            state.genres = action.payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(fetchGenres.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? "Failed to fetch genres";
         });
      builder
         .addCase(fetchGenreDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchGenreDetails.fulfilled, (state, action: PayloadAction<Genre>) => {
            state.genreDetails = action.payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(fetchGenreDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? "Failed to fetch genre's details";
         });
   },
});

export default genresSlice.reducer;
