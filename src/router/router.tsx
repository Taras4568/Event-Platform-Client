import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate
} from 'react-router-dom'

import App from '../App'
import { eventRouter } from '~/router/routes/eventRouter'
import { homeRouter } from '~/router/routes/homeRouter'
import { Suspense } from 'react'
import NotFoundPage from '~/pages/Error/NotFoundPage'
import { Box } from '@mui/material'

export const routerConfig = (
  <Route
    element={<App />}
    errorElement={<Navigate replace to='/404' />}
    path='/'
  >
    {eventRouter}
    {homeRouter}
    <Route
      element={
        <Suspense fallback={<Box>Завантаження сторінки...</Box>}>
          <NotFoundPage />
        </Suspense>
      }
      path='*'
    />
  </Route>
)

export const router = createBrowserRouter(
  createRoutesFromElements(routerConfig)
)
