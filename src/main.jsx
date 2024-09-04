import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyHome from './Page/MyHome';
import Layout from './Layout/Layout';
import About from './Page/About';
import Projects from './Page/Projects';
import Resume from './Page/Resume';
import { HelmetProvider } from 'react-helmet-async';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <MyHome></MyHome>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/projects",
        element: <Projects></Projects>
      },
      {
        path: "/resume",
        element: <Resume></Resume>
      }
    ]

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
