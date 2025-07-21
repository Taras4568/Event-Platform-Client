import { Box } from '@mui/material'

const HomePage = () => {
  const a = Array.from({ length: 200 }, (_, i) => <Box key={i}>Text {i}</Box>)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: '20px',
        width: '100%'
      }}
    >
      {a}
    </Box>
  )
}

export default HomePage
