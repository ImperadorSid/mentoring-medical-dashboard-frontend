import { createBrowserRouter } from 'react-router-dom'

import { CreatePatient, PatientList } from '../pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PatientList />,
  },
  {
    path: '/patients',
    element: <PatientList />,
  },
  {
    path: '/create',
    element: <CreatePatient />,
  },
])
