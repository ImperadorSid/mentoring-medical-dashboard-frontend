import { createBrowserRouter } from 'react-router-dom'
import { PatientList } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PatientList />,
  },
])
