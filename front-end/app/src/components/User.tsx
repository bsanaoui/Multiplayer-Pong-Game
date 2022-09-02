import { Avatar, Badge, Box, Stack, Typography } from '@mui/material'
import avatar2 from '../assets/avatar2.png'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';



const User = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#242526",
        width: '320px',
        height: '63px',
        paddingTop: '5px',
        paddingLeft: '13px'
      }}>
      <Stack spacing={2} direction="row">
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
                height: '50px',
                width: '50px',
                backgroundColor: "#FFF",
                padding: "3px",
              }}
              alt="Lion" src={avatar2} imgProps={{ style: { width: 'auto' } }} />
          </Badge>
        </div>
        <Stack>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: '1.4rem',
            }}>Lion</Typography>
          <Stack direction="row" spacing={0.5}>
            <SportsEsportsIcon sx={{ width: "19px" }} />
            <Typography
              sx={{
                color: '#ADADAD',
                fontWeight: '600',
                fontSize: '0.9rem',
                paddingTop: '1.3px',
              }}>
              Level 23</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default User