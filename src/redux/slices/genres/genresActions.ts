import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/axiosConfig";
import { AxiosError } from "axios";
import { Genre } from "./genresTypes";
import { ApiResponse } from "../sharedTypes";

export const fetchGenres = createAsyncThunk<Genre[], void, { rejectValue: string }>(
   "genres/fetchGenres",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get<ApiResponse<Genre[]>>("/genres");
         return response.data.results;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to fetch genres! " + axiosError.message);
      }
   }
);

export const fetchGenreDetails = createAsyncThunk<Genre, string, { rejectValue: string }>(
   "genres/fetchGenreDetails",
   async (genreId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get<Genre>(`/genres/${genreId}`);
         return response.data;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to fetch genre's details! " + axiosError.message);
      }
   }
);
