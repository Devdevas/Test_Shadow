import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/axiosConfig";
import { AxiosError } from "axios";
import { GamesStore } from "./gamesStoresTypes";
import { ApiResponse } from "../sharedTypes";

export const fetchGamesStores = createAsyncThunk<GamesStore[], void, { rejectValue: string }>(
   "stores/fetchGamesStores",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get<ApiResponse<GamesStore[]>>("stores");
         return response.data.results;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to fetch games stores! " + axiosError.message);
      }
   }
);
