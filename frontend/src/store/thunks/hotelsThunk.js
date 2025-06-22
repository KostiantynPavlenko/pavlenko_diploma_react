import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'http://localhost:3000';

export const getAllHotels = createAsyncThunk(
  'hotels/getAllHotels',
  async ({limit = 12, page = 0} = {}, { rejectWithValue }) => {
    try {
      const res = await fetch(`${BASE_URL}/hotels?limit=${limit}&page=${page}`);

      if(!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Failed to fetch hotels');
      }
      
      return await res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getHotelsByDestination = createAsyncThunk (
  'hotels/getHotelsByDestination',
  async ({ destinationId, limit = 12, page = 0 }, { rejectWithValue }) => {  
    try {
      const res = await fetch(`${BASE_URL}/search`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({destinationId, limit, page})
      })

      if(!res.ok) {
        const err = await res.json();
        throw new Error(err.message || 'Failed to fetch hotels by destination');
      }

      return await res.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

