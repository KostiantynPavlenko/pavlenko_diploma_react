
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllHotels, getHotelsByDestination } from "../../store/thunks/hotelsThunk";

import HotelsList from "./components/HotelsList";
import DestinationSelector from "./components/DestinationSelector";

import { Box, Button } from "@mui/material";

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
    <div>
      <Box sx={{ maxWidth: '1200px', padding: '0 32px', margin: '0 auto'}}>     
        <DestinationSelector onCitySelect={handleCitySelect} selectedCity={selectedCity}/>
        { hotelsLoading ? <p>Loading...</p> : <HotelsList hotels={hotels} hotelsCount={hotelsCount}/>}
        <div style={{ marginTop: 20 }}>
          <Button
            variant="outlined"
            onClick={() => setPage(prev => Math.max(prev - 1, 0))}
            disabled={page === 0}
            sx={{ mr: 2 }}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages - 1))}
            disabled={page >= totalPages - 1}
          >
            Next
          </Button>
        </div>
      </Box>
    </div>
  )
}