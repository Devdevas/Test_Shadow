import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../services/axiosConfig";
import { AxiosError } from "axios";
import { ApiResponse } from "../sharedTypes";
import { Developer } from "./developersTypes";

export const fetchDevelopers = createAsyncThunk<Developer[], void, { rejectValue: string }>(
   "developers/fetchDevelopers",
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get<ApiResponse<Developer[]>>("/developers");
         return response.data.results;
      } catch (error) {
         const axiosError = error as AxiosError;
         return rejectWithValue("Failed to fetch developers! " + axiosError.message);
      }
   }
);
