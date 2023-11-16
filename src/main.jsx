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

import Error from './Components/Pagas/Error';
import JobInfo from './Components/Pagas/JobInfo';
import JobDetailes from './Components/Home-page-item/JobDetailes';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/', 
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <JobInfo></JobInfo>
      },
      {
        path: '/applied',
        element: <Applied></Applied>,
        loader: ()=> fetch('.././public/jobs.json')
      },
      {
        path: '/jobDetails/:id',
        element: <JobDetailes></JobDetailes>,
        loader: ()=> fetch('.././public/jobs.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
