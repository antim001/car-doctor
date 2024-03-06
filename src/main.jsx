import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AuthProvider from '../src/Provider/AuthProvider'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-6xl mx-auto'>
<React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
</div>
)
