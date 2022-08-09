import { Box } from '@mui/material'
import React from 'react'

function PublicRooms() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '30vh',
        backgroundColor: '#001E3C',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      Public Roooms
    </Box>
  )
}

export default PublicRooms