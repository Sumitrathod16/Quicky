import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  {AuthProvider}  from './context/Authcontext.jsx'
import './index.css'
import App from './App.jsx'
import { injectSpeedInsights } from '@vercel/speed-insights'

injectSpeedInsights()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
</StrictMode>
)
