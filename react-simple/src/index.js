import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './data/i18n'

import Root from './root'
import Main from './components/main/main'
import Gallery from './components/gallery/gallery'
import About from './components/about/about'
import Contacts from './components/contacts/contacts'

import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: 'abstract',
        element: <Gallery page="abstract" />,
      },
      {
        path: 'landscapes',
        element: <Gallery page="landscapes" />,
      },
      {
        path: 'other',
        element: <Gallery page="other" />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
