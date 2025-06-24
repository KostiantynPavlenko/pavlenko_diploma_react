
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllHotels, getHotelsByDestination } from "../../store/thunks/hotelsThunk";

import HotelsList from "./components/HotelsList";
import DestinationSelector from "./components/DestinationSelector";

import { Box, Button, Pagination } from "@mui/material";

const PAGE_SIZE = 12;

export default function Hotels() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);
  const [selectedCity, setSelectedCity] = useState(null);

  const { hotels, hotelsLoading, hotelsError, hotelsCount } = useSelector(state => state.hotels);
  const totalPages = Math.ceil(hotelsCount / PAGE_SIZE);
  
  useEffect(() => {
    dispatch(getAllHotels());
  }, [])

  useEffect(() => {
    if (selectedCity) {
      dispatch(getHotelsByDestination({ destinationId: selectedCity.id, limit: PAGE_SIZE, page }));
    } else {
      dispatch(getAllHotels({PAGE_SIZE, page}));
    }
  }, [page, selectedCity])

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setPage(0);
  };

  if (hotelsError) {
    return (hotelsError);
  }

  return (
    <Box sx={{ minHeight: '100vh', maxWidth: '1200px', padding: '0 32px', margin: '0 auto'}}>     
      <DestinationSelector onCitySelect={handleCitySelect} selectedCity={selectedCity}/>
      { hotelsLoading ? <p>Loading...</p> : <HotelsList hotels={hotels} hotelsCount={hotelsCount}/>}
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination
          count={totalPages}
          page={page + 1}
          onChange={(e, value) => setPage(value - 1)}
          color="primary"
          variant="outlined"
          shape="rounded"
          siblingCount={1}
          boundaryCount={1}
        />
      </Box>
    </Box>
  )
}