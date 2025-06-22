import { useNavigate } from 'react-router';

import { 
  AppBar,
  Container,
  Box,
  Button,
  Typography
 } from "@mui/material";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static" sx={{py: { xs: 2, sm: 2, marginBottom: '20px' }}}>
        <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%'}}>
          <Box display={'flex'} alignItems={'center'}>
            <Typography variant="h5" fontWeight="bold">BOOKING</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 8}}>
            <Button 
              onClick={() => navigate("/")}
              sx={{color: 'white', display: 'block'}}
            >Hotels</Button>
            <Button 
              onClick={() => navigate("about")}
              sx={{color: 'white', display: 'block'}}
            >About us</Button>
          </Box>
        </Container>
      </AppBar>
    </div>
  )
}