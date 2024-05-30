import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/Index.css'
import { BrowserRouter } from 'react-router-dom'
import MainRoutes from './routes/routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
