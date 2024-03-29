import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './styles/satoshi.css'
import './styles/simple-datatables.css'

/**
 * Main entry point of the application.
 * Renders the main application {<App />} to the root element in the HTML document.
 *
 * @author James M Kambanga
 * Date: March 27, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
