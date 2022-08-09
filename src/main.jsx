import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import FontStyles from './fontStyles'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>
)
