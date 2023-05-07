import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import HomePage from '../components/home/HomePage';
import App from '../layout/App';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
        ]
    }
])