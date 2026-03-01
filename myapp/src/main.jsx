import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Apppnl_obj from './App_pnl.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Apppnl_obj />
  </StrictMode>,
)
