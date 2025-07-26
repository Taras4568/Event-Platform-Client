import EventCard from '~/shared/components/event-card/EventCard'
import { Box, Grid } from '@mui/material'

const cards = [
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'XUI XUI XUI XUI XUI XUI XUI XUI XUI',
    date: '7 серпня 2025 року',
    categories: ['Music', 'Concert', 'Rock', 'Xui', 'Bliaha']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Another Event Title',
    date: '10 серпня 2025 року',
    categories: ['Art', 'Exhibition', 'Gallery']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Tech Conference 2025',
    date: '15 серпня 2025 року',
    categories: ['Technology', 'Conference', 'Innovation']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Food Festival',
    date: '20 серпня 2025 року',
    categories: ['Food', 'Festival', 'Culinary']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Film Premiere',
    date: '25 серпня 2025 року',
    categories: ['Film', 'Premiere', 'Cinema']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'XUI XUI XUI XUI XUI XUI XUI XUI XUI',
    date: '7 серпня 2025 року',
    categories: ['Music', 'Concert', 'Rock', 'Xui', 'Bliaha']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Another Event Title',
    date: '10 серпня 2025 року',
    categories: ['Art', 'Exhibition', 'Gallery']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Tech Conference 2025',
    date: '15 серпня 2025 року',
    categories: ['Technology', 'Conference', 'Innovation']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Food Festival',
    date: '20 серпня 2025 року',
    categories: ['Food', 'Festival', 'Culinary']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Film Premiere',
    date: '25 серпня 2025 року',
    categories: ['Film', 'Premiere', 'Cinema']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'XUI XUI XUI XUI XUI XUI XUI XUI XUI',
    date: '7 серпня 2025 року',
    categories: ['Music', 'Concert', 'Rock', 'Xui', 'Bliaha']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Another Event Title',
    date: '10 серпня 2025 року',
    categories: ['Art', 'Exhibition', 'Gallery']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Tech Conference 2025',
    date: '15 серпня 2025 року',
    categories: ['Technology', 'Conference', 'Innovation']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Food Festival',
    date: '20 серпня 2025 року',
    categories: ['Food', 'Festival', 'Culinary']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Film Premiere',
    date: '25 серпня 2025 року',
    categories: ['Film', 'Premiere', 'Cinema']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'XUI XUI XUI XUI XUI XUI XUI XUI XUI',
    date: '7 серпня 2025 року',
    categories: ['Music', 'Concert', 'Rock', 'Xui', 'Bliaha']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Another Event Title',
    date: '10 серпня 2025 року',
    categories: ['Art', 'Exhibition', 'Gallery']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Tech Conference 2025',
    date: '15 серпня 2025 року',
    categories: ['Technology', 'Conference', 'Innovation']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Food Festival',
    date: '20 серпня 2025 року',
    categories: ['Food', 'Festival', 'Culinary']
  },
  {
    posterUrl: 'https://i.pravatar.cc/40',
    title: 'Film Premiere',
    date: '25 серпня 2025 року',
    categories: ['Film', 'Premiere', 'Cinema']
  }
]

const EventsGrid = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container justifyContent='center' spacing={3}>
        {cards.map((card) => (
          <Grid key={card.title} lg={3} md={4} sm={6} xs={12}>
            <EventCard
              categories={card.categories}
              date={card.date}
              posterUrl={card.posterUrl}
              title={card.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default EventsGrid
