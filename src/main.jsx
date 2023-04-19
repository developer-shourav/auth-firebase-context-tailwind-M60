import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main> </Main>,
    children:[
      {
        path:"/",
        element:<Home> </Home>,
      },

      {
       path:"/login",
       element:<Login> </Login>,
      },

      {
        path:"/register",
        element:<Register> </Register>,
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
