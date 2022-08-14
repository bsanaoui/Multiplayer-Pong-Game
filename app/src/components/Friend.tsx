import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'
import avatar2 from '../assets/avatar2.png'

interface FriendProps{
  name:string
}

const Friend = ({name}:FriendProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#4289F3", // 2E3256
        width: '310px',
        height: '56px',
        paddingTop: '5px',
        paddingLeft: '13px',
        borderRadius: '14px',
      }}>
      <Stack spacing={2} direction="row"
          sx={{paddingTop:'0.22em'}}>
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
                height: '38px',
                width: '38px',
                backgroundColor: "#FFF",
                padding: "3px",
              }}
              alt="Lion" src={avatar2} imgProps={{ style: { width: 'auto' } }} />
          </Badge>
        </div>
        <Stack>
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '1.7rem',
              fontStyle: 'normal',
            }}>{name}</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Friend