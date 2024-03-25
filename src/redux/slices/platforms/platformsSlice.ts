import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPlatforms, fetchPlatformsDetails } from "./platformsActions";
import { Platform, PlatformsState } from "./platformsTypes";

const initialState: PlatformsState = {
   platforms: [],
   platformDetails: null,
   loading: false,
   error: null,
};

export const platformsSlice = createSlice({
   name: "platforms",
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchPlatforms.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchPlatforms.fulfilled, (state, action: PayloadAction<Platform[]>) => {
            state.platforms = action.payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(fetchPlatforms.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? "Failed to fetch platforms!";
         });
      builder
         .addCase(fetchPlatformsDetails.pending, (state) => {
            state.loading = true;
            state.error = null;
         })
         .addCase(fetchPlatformsDetails.fulfilled, (state, action: PayloadAction<Platform>) => {
            state.platformDetails = action.payload;
            state.loading = false;
            state.error = null;
         })
         .addCase(fetchPlatformsDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload ?? "Failed to fetch platform's details!";
         });
   },
});

export default platformsSlice.reducer;
