import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

import './styles/global.css'

export const App = () => (
  <div className="App">
    <RouterProvider router={router} />
  </div>
)
