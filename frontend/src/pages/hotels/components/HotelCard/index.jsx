import { useNavigate } from 'react-router';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { CardMedia } from '@mui/material';

export default function HotelCard({ hotel }) {
  const navigate = useNavigate();

  return (
    <Card 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          width="100%"
          image={`/img/${hotel.hotelImg}`}
          alt="Paella dish"
          sx={{mb: 1}}
        />
        <Typography gutterBottom sx={{ fontSize: 16 }}>
          {hotel.name}
        </Typography>
        <Typography gutterBottom sx={{ fontSize: 14 }}>
          {hotel.address}
        </Typography>
        <Typography sx={{mb: 1.5}} variant="body2">
          {hotel.city}
        </Typography>
        <Stack spacing={1}>
          <Rating name="half-rating-read" defaultValue={0} value={hotel.hotel_rating} precision={0.5} readOnly />
        </Stack>
      </CardContent>
      <Button
        onClick={() => navigate(`/hotels/${hotel.id}`)}
      >
        Get more
      </Button>
    </Card>
  );
}