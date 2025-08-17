import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext.jsx'
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router>
        <App />
        <ToastContainer
          position='top-right'
          autoClose={1000}
          hideProgressBar
          newestOnTop
          closeOnClick={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='colored'
          transition={Slide}
        />
      </Router>
    </AuthProvider>
  </StrictMode>
)
