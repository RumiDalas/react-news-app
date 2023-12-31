import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './Providers/AuthProviders'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
