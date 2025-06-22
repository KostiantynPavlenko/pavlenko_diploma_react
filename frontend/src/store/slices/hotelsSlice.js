import { createSlice } from "@reduxjs/toolkit";
import { getAllHotels, getHotelsByDestination } from "../thunks/hotelsThunk";

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: {
    hotels: [],
    hotelsCount: 0,
    filteredHotelsId: null,
    error: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllHotels.pending, state => {
        state.hotelsLoading = true;
        state.error = '';
      })
      .addCase(getAllHotels.fulfilled, (state, action) => {
        state.hotels = action.payload.hotels;
        state.hotelsCount = action.payload.total;
        state.hotelsLoading= false;
      })
      .addCase(getAllHotels.rejected, (state, action) => {
        state.error = action.payload;
        state.hotelsLoading = false;
      })
      .addCase(getHotelsByDestination.pending, state => {
        state.hotelsLoading = true;
        state.error = '';
      })
      .addCase(getHotelsByDestination.fulfilled, (state, action) => {
        state.hotels = action.payload.hotels;
        state.hotelsCount = action.payload.total;
        state.hotelsLoading= false;
      })
      .addCase(getHotelsByDestination.rejected, (state, action) => {
        state.error = action.payload;
        state.hotelsLoading = false;
      })
  }
});

export default hotelsSlice.reducer;