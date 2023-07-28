import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from "@reduxjs/toolkit"
import globalReducer from "./redux/index"
import { Provider } from "react-redux"

const store = configureStore({
  reducer: {
    global: globalReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
