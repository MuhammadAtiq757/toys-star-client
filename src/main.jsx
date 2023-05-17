import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Main></Main>
  </React.StrictMode>,
)