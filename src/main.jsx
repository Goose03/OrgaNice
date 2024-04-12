import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './App'
import CoachTasks from './goals/CoachTasks'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <CoachTasks />
  </React.StrictMode>,
)
