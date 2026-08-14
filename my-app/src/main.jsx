import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  {AuthProvider}  from './context/Authcontext.jsx'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App/>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={10}
        toastOptions={{
          duration: 3500,
          style: {
            background: 'rgba(255, 255, 255, 0.96)',
            color: '#1e1b4b',
            border: '1px solid rgba(79, 70, 229, 0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 12px 32px rgba(79, 70, 229, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)',
            borderRadius: '14px',
            padding: '12px 18px',
            fontSize: '0.9rem',
            fontWeight: '600',
            fontFamily: "'Inter', sans-serif",
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#ffffff',
            },
            style: {
              border: '1px solid rgba(16, 185, 129, 0.25)',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
            style: {
              border: '1px solid rgba(239, 68, 68, 0.25)',
            },
          },
          loading: {
            style: {
              border: '1px solid rgba(79, 70, 229, 0.25)',
            },
          },
        }}
      />
    </AuthProvider>
</StrictMode>
)
