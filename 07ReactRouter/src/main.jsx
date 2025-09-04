import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from'./components/User/User.jsx'
import Github from './components/Github/Github.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [

      {
        path: "Home",
        element: <Home />
      },
      {
        path: "About",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path:'github',
        element:<Github/>
      },
      {
        path:'user/:userid',
        element:<User />
      },
      
    ]
  }
])






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
