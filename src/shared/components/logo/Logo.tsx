import { Box } from '@mui/material'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Box
      component={Link}
      sx={{
        textDecoration: 'none',
        color: 'white',
        fontSize: '1.25rem',
        fontWeight: 'bold'
      }}
      to='/'
    >
      EventPlatform
    </Box>
  )
}

export default Logo
