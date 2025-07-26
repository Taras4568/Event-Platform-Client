import { Box } from '@mui/material'
import EventCard from '~/shared/components/event-card/EventCard'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const a = Array.from({ length: 200 }, (_, i) => <Box key={i}>Text {i}</Box>)

  const mockEvents = [
    { id: '1', name: 'Концерт гурту "Океан Ельзи"' },
    { id: '2', name: 'Виставка сучасного мистецтва' },
    { id: '3', name: 'Майстер-клас з гончарства' }
  ]

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
      <ul>
        {mockEvents.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.name}</Link>
          </li>
        ))}
      </ul>
      <EventCard
        categories={['Music', 'Concert', 'Rock', 'Xui', 'Bliaha']}
        date={'7 серпня 2025 року'}
        posterUrl={'https://i.pravatar.cc/40'}
        title={'XUI XUI XUI XUI XUI XUI XUI XUI XUI'}
      />
      {a}
    </Box>
  )
}

export default HomePage
