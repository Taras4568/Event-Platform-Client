import { Box, Button, Link, Typography } from '@mui/material'

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flexGrow: 1,
        textAlign: 'center',
        p: 3
      }}
    >
      <Typography component='h1' sx={{ fontWeight: 'bold' }} variant='h1'>
        404
      </Typography>
      <Typography sx={{ mb: 3 }} variant='h5'>
        Ой! Цю сторінку не знайдено.
      </Typography>
      <Button color='primary' component={Link} href='/' variant='contained'>
        Повернутись на головну
      </Button>
    </Box>
  )
}

export default NotFoundPage
