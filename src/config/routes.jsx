import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/projects',
    element: <Projects />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);
