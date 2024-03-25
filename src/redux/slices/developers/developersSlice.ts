import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Developer, DevelopersState } from "./developersTypes";
import { fetchDevelopers } from "./developersActions";

const initialState: DevelopersState = {
   developers: [],
   loading: false,
   error: null,
};

export const platformsSlice = createSlice({
   name: "developers",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchDevelopers.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchDevelopers.fulfilled, (state, action: PayloadAction<Developer[]>) => {
            state.developers = action.payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(fetchDevelopers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? "Failed to fetch developers!";
         });
   },
});

export default platformsSlice.reducer;
