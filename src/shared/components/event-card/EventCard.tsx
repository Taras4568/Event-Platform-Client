import React from 'react'
import { Box, Typography, Chip } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import { EventCardProps } from '~/src/types/interfaces/event'
import { style } from './EventCard.style'

const EventCard = ({
  posterUrl,
  date,
  title,
  categories,
  height = 500,
  width = 320
}: EventCardProps) => {
  return (
    <Box sx={style.cardContainer(width, height, posterUrl)}>
      <Chip icon={<CalendarTodayIcon />} label={date} sx={style.dateBlock} />
      <Box className='overlay' sx={style.shadow}>
        <Box>
          <Typography
            color='white'
            component='div'
            fontWeight='bold'
            variant='h4'
          >
            {title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              justifyContent: 'left',
              marginTop: '12px'
            }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                size='medium'
                sx={{ color: 'white' }}
                variant='outlined'
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default EventCard
