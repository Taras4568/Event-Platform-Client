import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Box, CircularProgress, Container } from '@mui/material'
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
          flexDirection: 'column'
        }}
      >
        <Header />
        <Container component='main' maxWidth='xl' sx={{ flexGrow: 1, py: 3 }}>
          <Suspense
            fallback={
              <CircularProgress sx={{ display: 'block', mx: 'auto' }} />
            }
          >
            <Outlet />
          </Suspense>
        </Container>
      </Box>
    </QueryClientProvider>
  )
}

export default App
