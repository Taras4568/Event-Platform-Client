import { lazy } from 'react'
import { Route } from 'react-router-dom'

const HomePage = lazy(() => import('~/pages/Home/HomePage'))

export const homeRouter = <Route element={<HomePage />} index />
