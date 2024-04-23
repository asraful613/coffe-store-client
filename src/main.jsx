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
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import Users from './Components/Users.jsx';
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
  },
  {
    path:"/signIn",
    element:<SignIn></SignIn>
  },
  {
    path:"/signUp",
    element:<SignUp></SignUp>
  },
  {
    path:"/users",
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:5000/user')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <AuthProviders>
        <RouterProvider router={router} />
        </AuthProviders>
  </React.StrictMode>,
)
