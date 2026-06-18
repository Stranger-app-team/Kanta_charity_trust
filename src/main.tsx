import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css' // Temporarily disabled to prevent layout conflicts with Figma
import './styles/index.css'

import { LanguageProvider } from './context/LanguageContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
)