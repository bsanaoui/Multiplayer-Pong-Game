import { Box } from '@mui/material'
import React from 'react'
import RoomButton from './RoomButton'

function PublicRooms() {
  return (
    <Box
      sx={{
        width: '100%',
        // height: '30vh',
        // backgroundColor: '#001E3C'
      }}
    >
      {/* Public Roooms */}
      <RoomButton/>
    </Box>
  )
}

export default PublicRooms