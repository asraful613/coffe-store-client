import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffe from './Components/UpdateCoffe.jsx';
import AddingCoffe from './Components/AddingCoffe.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:"/updateCoffe",
    element:<UpdateCoffe></UpdateCoffe>
  },
  {
    path:"/addingCoffe",
    element:<AddingCoffe></AddingCoffe>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
