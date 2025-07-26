import { Box, Typography } from '@mui/material'
import EventFilters from '~/shared/containers/eventFilters/eventFilters'
import EventsGrid from '~/shared/containers/eventsGrid/eventsGrid'

const EventsPage = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography gutterBottom variant='h4'>
        Список Подій
      </Typography>
      <EventFilters />
      <EventsGrid />
    </Box>
  )
}

export default EventsPage
