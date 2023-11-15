import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home/Home';
import Applied from './Components/Pagas/Applied';
import Jobs from './Components/Pagas/Jobs';
import Statistics from './Components/Pagas/Statistics';
import Blogs from './Components/Pagas/Blogs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: '/home', 
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/applied',
        element: <Applied></Applied>
      },
      {
        path: '/statistic',
        element: <Statistics></Statistics>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
