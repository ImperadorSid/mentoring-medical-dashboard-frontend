import { RouterProvider } from 'react-router-dom'
import { AllProviders } from './providers'

import { router } from './routes'

import './styles/global.css'

export const App = () => (
  <div className="App">
    <AllProviders>
      <RouterProvider router={router} />
    </AllProviders>
  </div>
)
