import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDestinations } from "../../../../store/thunks/destinationsThunk";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

export default function DestinationSelector({onCitySelect, selectedCity}) {
  const dispatch = useDispatch();
  const [localSelectedCity, setLocalSelectedCity] = useState(selectedCity || null);
  const { destinations, loading, error } = useSelector(state => state.destinations);
  
  useEffect(() => {
    dispatch(getDestinations());
  }, [])

  const handleSearchClick = () => {
    if (localSelectedCity) {
      onCitySelect(localSelectedCity);
    }
  }

  if(error) {
    return error;
  }

  return (
    <div>
      <Box display={'flex'} gap={2}>
        <FormControl sx={{ minWidth: '300px' }}>
          <InputLabel id="demo-simple-select-label">Destination</InputLabel>
          <Select
            label="Destination"
            value={localSelectedCity?.id || ''}
            onChange={(e) => {
              const selected = destinations.find(dest => dest.id === e.target.value);
              setLocalSelectedCity(selected)
            }}
          >
            {loading ? <p>Loading...</p> : destinations.map(destination => {
              return <MenuItem key={destination.id} value={destination.id}>{destination.label}</MenuItem> 
            })}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleSearchClick()}
          disabled={!localSelectedCity}
          sx={{ display: 'block', mt: 2 }}
        >
          Show Hotels
        </Button>
      </Box>
    </div>
  )
}