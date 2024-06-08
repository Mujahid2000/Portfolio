import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Page/Home/Home';
import Project1 from './Page/ProjectDetails/Project1';
import Project2 from './Page/ProjectDetails/Project2';
import Projects from './Page/Home/Projects';
import About from './Page/Home/About';
import Blog from './Page/Blog';
import Project3 from './Page/ProjectDetails/Project3';
import ContactForm from './Page/ContactForm';
import Project4 from './Page/ProjectDetails/Project4';
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
      path: '/project1',
      element: <Project1></Project1>
    },
    {
      path: '/project2',
      element: <Project2></Project2>
    },
    {
      path: '/project3',
      element: <Project3></Project3>
    },
    {
      path: '/project4',
      element:<Project4/>
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
