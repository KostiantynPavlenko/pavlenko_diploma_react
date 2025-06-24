import { Box, Button, Grid } from "@mui/material";
import HotelCard from "../HotelCard";


export default function HotelsList({hotels}) {

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        gap: 3,
        margin: '20px auto 0 auto'
      }}>
        {hotels.map(hotel => {
          return <Box
              key={hotel.id}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: '0 1 calc(33.333% - 16px)',
                '@media (max-width: 900px)': {
                  flex: '0 1 calc(48.3% - 6px)',
                },
                '@media (max-width: 600px)': {
                  flex: '0 1 100%',
                },
              }}>
                <HotelCard key={hotel.id} hotel={hotel} />
              </Box>
          })}
      </Box>
  )
}