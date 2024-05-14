import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Store from './Store.jsx'
import { Provider } from 'react-redux';


Store.subscribe(()=>console.log(Store.getState()));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider Store={Store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
