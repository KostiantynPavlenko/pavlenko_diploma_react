import { Box, Button, Card, CardContent, CardMedia, Rating, Stack, Typography } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router"

export default function Hotel() {
  const navigate = useNavigate();
  const { name, address, city, hotel_rating, hotelImg } = useLoaderData();

  return (
    <div>
      <Box padding={2}>
      <Button 
        variant="contained"
        onClick={() => navigate("/")}
        >Back to hotels</Button>
        <Card sx={{ border: "none", boxShadow: "none" }}>
          <CardContent>
          <Typography gutterBottom variant="h4">
            {name}
          </Typography>
            <CardMedia
              component="img"
              height="100%"
              image={`/img/${hotelImg}`}
              alt="hotel"
              sx={{display: "block", maxWidth: "800px"}}
            />
          <Typography gutterBottom sx={{ mt: 3, mb: 3, fontSize: 16 }}>
            Adress: {address}
          </Typography>
          <Typography variant="body1">
            City: {city}
          </Typography>
          <Stack spacing={1} sx={{mt: 3}}>
            <Rating name="half-rating-read" defaultValue={0} value={hotel_rating} precision={0.5} readOnly />
          </Stack>
          </CardContent>
        </Card>
      </Box>
    </div>
  )
}