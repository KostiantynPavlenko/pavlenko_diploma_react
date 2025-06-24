import { Box, Typography } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ minHeight: '100vh', maxWidth: '1200px', margin: '0 auto', padding: '0 30px' }}>
      <Typography gutterBottom variant="h4">
        About This Project
      </Typography>
      <Typography gutterBottom sx={{ mt: 3, mb: 3, fontSize: 16 }}>
        This is a diploma project — a booking platform developed as part of a final qualification work.
        The application allows users to browse, select, and book services or properties through a user-friendly interface.
      </Typography>
      <Typography gutterBottom variant="h5">
        Technology Stack:
      </Typography>
            <Typography gutterBottom sx={{ mt: 3, mb: 3, fontSize: 16 }}>
        React.js, Vite, Redux, Redux Toolkit, Redux Thunk, React Router
      </Typography>
    </Box>
  )
}