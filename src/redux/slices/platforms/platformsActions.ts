import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/axiosConfig";
import { AxiosError } from "axios";
import { Platform } from "./platformsTypes";
import { ApiResponse } from "../sharedTypes";

export const fetchPlatforms = createAsyncThunk<Platform[], void, { rejectValue: string }>(
   "platforms/fetchPlatforms",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get<ApiResponse<Platform[]>>("/platforms");
         return response.data.results;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to fetch platforms! " + axiosError.message);
      }
   }
);

export const fetchPlatformsDetails = createAsyncThunk<Platform, string, { rejectValue: string }>(
   "platforms/fetchPlatformsDetails",
   async (platformId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get<Platform>(`/platform/${platformId}`);
         return response.data;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to fetch platform's details! " + axiosError.message);
      }
   }
);
