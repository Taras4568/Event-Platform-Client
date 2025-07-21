import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, CircularProgress } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Header } from '~/shared/components/header/Header'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '1920px ',
          marginLeft: 'auto',
          marginRight: 'auto',
          width: '100%'
        }}
      >
        <Header />
        <Box className='main-content' component='main'>
          <Suspense fallback={<CircularProgress />}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
    </QueryClientProvider>
  )
}

export default App
