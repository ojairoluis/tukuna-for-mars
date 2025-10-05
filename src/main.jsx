import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // ✅ ¡Esta línea es obligatoria para que funcione Tailwind!
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)



