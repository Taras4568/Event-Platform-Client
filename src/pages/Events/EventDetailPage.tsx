import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant='h4'>Детальна інформація про подію {id}</Typography>
    </Box>
  )
}

export default EventDetailPage
