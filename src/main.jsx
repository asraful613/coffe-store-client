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
    loader:()=>fetch('http://localhost:5000/coffe')
  },
  {
    path:"/updateCoffe:id",
    element:<UpdateCoffe></UpdateCoffe>,
    loader:({params})=>fetch(`http://localhost:5000/coffe${params.id}`)
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
