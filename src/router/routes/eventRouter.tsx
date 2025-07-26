import { lazy } from 'react'
import { Route } from 'react-router-dom'

const EventsPage = lazy(() => import('~/pages/Events/EventPage'))
const EventDetailPage = lazy(() => import('~/pages/Events/EventDetailPage'))

export const eventRouter = (
  <Route path='/events'>
    <Route element={<EventsPage />} index />
    <Route element={<EventDetailPage />} path=':id' />
  </Route>
)
