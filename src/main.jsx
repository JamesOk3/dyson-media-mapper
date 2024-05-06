import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import './styles/satoshi.css'
import './styles/simple-datatables.css'
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "./ui/errors/ErrorFallback.jsx";

/**
 * Main entry point of the application.
 * Renders the main application {<App />} to the root element in the HTML document.
 * @param {JSX.Element} ErrorFallback - handle errors when rendering components
 * @param {Function} Callback - to redirect users back to the homepage
 *
 * @author James M Kambanga
 * Date: March 27, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ErrorBoundary FallbackComponent={ErrorFallback}
                     onReset={() => window.location.replace("/dashboard")
      }>
        <App />
      </ErrorBoundary>
  </React.StrictMode>,
)
