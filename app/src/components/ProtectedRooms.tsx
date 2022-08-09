import { Box } from '@mui/material'
import React from 'react'

function ProtectedRooms() {
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
    Protected Rooms
  </Box>
  )
}

export default ProtectedRooms