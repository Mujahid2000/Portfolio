import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Page/Home/Home';
import Projects from './Page/Home/Projects';
import About from './Page/Home/About';
import Blog from './Page/Blog';
import ContactForm from './Page/ContactForm';

import ProjectDetail from './Page/Home/ProjectDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
      path: '/',
      index: true,
      element: <Home></Home>
    },
    {
      path: '/projects',
      element: <Projects></Projects>
    },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/blog',
      element: <Blog></Blog>
    },
    {
      path: '/contact',
      element: <ContactForm></ContactForm>
    },
    
    {
      path: '/projectDetails/:id',
      element: <ProjectDetail/>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)
