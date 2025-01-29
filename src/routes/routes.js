import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../Components/Layout'

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    </Route>
  )
)

export default appRouter