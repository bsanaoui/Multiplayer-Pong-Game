import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'
import avatar2 from '../assets/avatar2.png'

interface FriendProps{
  name:string
}

const Friend = ({name}:FriendProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#2E3256", // #4289F3
        width: '420px',
        height: '66px',
        borderRadius: '14px',
      }}>
      <Stack spacing={2} direction="row"
          sx={{padding:'0.9em'}}>
        <div>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
              <div style={{ backgroundColor: '#3FFC10' }} className="dot_status" />
            }
          >
            <Avatar
              sx={{
                height: '36px',
                width: '37px',
                backgroundColor: "#FFF",
                padding: "3px",
              }}
              alt="Lion" src={avatar2} imgProps={{ style: { width: 'auto' } }} />
          </Badge>
        </div>
        <Stack>
          <Typography
            sx={{
              fontFamily: 'Lexend',
              fontWeight: '500',
              fontSize: '1.4rem',
              fontStyle: 'normal',
            }}>{name}</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Friend