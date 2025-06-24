import { Box, Container } from "@mui/material";

import styles from './Footer.module.css'; 

export default function Footer() {
  return (
    <Box sx={{
          py: { xs: 2, sm: 1 },
          marginTop: 6,
          width: '100%',
          backgroundColor: '#39c785'}}>
      <Container sx={{ maxWidth: '1200px', display: 'flex', height: '100%', padding: '0'}}>
        <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              gap: 4
              }}>
          <h3>Contacts</h3>
          <a href="tel:380 93 280 78 31" className={styles['contact-link']}>+380 93 280 78 31</a>
          <a href="mailto:kostianpv@gmail.com" className={styles['contact-link']}>kostianpv@gmail.com</a>
        </Box>
      </Container>
    </Box>
  )
}