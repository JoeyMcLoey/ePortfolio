import * as React from 'react';
import { Box, Typography } from '@mui/material';

function HomePage() {

  return (
    <Box bgcolor={'black'} height='100vh' textAlign='center' p={5}>
      <Typography color='white' variant='h3'>Hello, I'm Joseph</Typography>
      <Typography color='white' variant='h3'>I'm a Software Engineer</Typography>
    </Box>
  )
}

export default HomePage