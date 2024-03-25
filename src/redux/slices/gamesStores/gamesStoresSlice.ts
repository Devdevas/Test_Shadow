import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GamesStore, StoresState } from "./gamesStoresTypes";
import { fetchGamesStores } from "./gamesStoresActions";

const initialState: StoresState = {
   gamesStores: [],
   storeDetails: null,
   loading: false,
   error: null,
};

export const gamesStoresSlice = createSlice({
   name: "gamesStores",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchGamesStores.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchGamesStores.fulfilled, (state, action: PayloadAction<GamesStore[]>) => {
            state.gamesStores = action.payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(fetchGamesStores.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? "Failed to fetch games stores!";
         });
   },
});

export default gamesStoresSlice.reducer;
