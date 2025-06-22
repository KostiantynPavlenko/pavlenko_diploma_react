import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'http://localhost:3000';

export const getDestinations = createAsyncThunk(
  'destinations/getDestinations',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/destinations`)

      if(!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Failed to fetch destinations');
      }

      return await res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)