import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import EventFilters from '~/shared/containers/eventFilters/eventFilters'

const mockEvents = [
  { id: '1', name: 'Концерт гурту "Океан Ельзи"' },
  { id: '2', name: 'Виставка сучасного мистецтва' },
  { id: '3', name: 'Майстер-клас з гончарства' }
]

const EventsPage = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <Typography gutterBottom variant='h4'>
        Список Подій
      </Typography>
      <EventFilters />
      <ul>
        {mockEvents.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </Box>
  )
}

export default EventsPage
