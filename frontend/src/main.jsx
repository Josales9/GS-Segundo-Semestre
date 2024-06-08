import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Sobre from './routes/Sobre.jsx'
import Projeto from './routes/Projeto.jsx'


const router = createBrowserRouter([
{
  path:'/', element:<App/ >,
  errorElement: <Error/ >,

  children: [
    {path: '/', element: <Home />},
    {path: '/Sobre', element: <Sobre />},
    {path: '/Projeto', element: <Projeto />},
    {path: '/Login', element: <Login />},
  ]
}
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
