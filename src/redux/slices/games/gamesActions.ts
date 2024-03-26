import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/axiosConfig";
import { Game, GameFilters, GameMovie, Screenshot } from "./gamesTypes";
import { AxiosError } from "axios";
import { ApiResponse } from "../sharedTypes";

export const fetchGames = createAsyncThunk<Game[], void, { rejectValue: string }>(
   "games/fetchGames",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get<ApiResponse<Game[]>>("games");
         return response.data.results;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to fetch games! " + axiosError.message);
      }
   }
);

export const fetchGameDetails = createAsyncThunk<Game, string, { rejectValue: string }>(
   "games/fetchGameDetails",
   async (gameId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get<Game>(`/games/${gameId}`);
         return response.data;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to fetch game's details! " + axiosError.message);
      }
   }
);

export const fetchFilteredGames = createAsyncThunk<ApiResponse<Game[]>, GameFilters, { rejectValue: string }>(
   "games/fetchFilteredGames",
   async (filters, { rejectWithValue }) => {
      try {
         // Build query params from filters
         const params = new URLSearchParams(filters as any).toString();
         const response = await axiosInstance.get<ApiResponse<Game[]>>(`/games?${params}`);
         return response.data;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to fetch filtred games! " + axiosError.message);
      }
   }
);

export const fetchSearchedGames = createAsyncThunk<ApiResponse<Game[]>, GameFilters, { rejectValue: string }>(
   "games/fetchSearchedGames",
   async (searchParams, { rejectWithValue }) => {
      try {
         // Build query params from searchParams
         const params = new URLSearchParams(searchParams as any).toString();
         const response = await axiosInstance.get<ApiResponse<Game[]>>(`/games?${params}`);
         return response.data;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to search games! " + axiosError.message);
      }
   }
);

export const fetchGamesFromSeries = createAsyncThunk<Game[], string, { rejectValue: string }>(
   "games/fetchGamesFromSeries",
   async (gameId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get<ApiResponse<Game[]>>(`/games/${gameId}/game-series`);
         return response.data.results;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to fetch games from the same series! " + axiosError.message);
      }
   }
);

export const fetchGameMovies = createAsyncThunk<GameMovie[], string, { rejectValue: string }>(
   "games/fetchGameMovies",
   async (gameId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get<ApiResponse<GameMovie[]>>(`/games/${gameId}/movies`);
         return response.data.results;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to fetch game movies! " + axiosError.message);
      }
   }
);

export const fetchGameScreenShots = createAsyncThunk<Screenshot[], string, { rejectValue: string }>(
   "games/fetchGameScreenShots",
   async (gameId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get<ApiResponse<Screenshot[]>>(`/games/${gameId}/screenshots`);
         return response.data.results;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to fetch game screenshots! " + axiosError.message);
      }
   }
);
