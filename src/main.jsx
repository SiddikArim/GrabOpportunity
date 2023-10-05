import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:([
      {
        path:'/blog',
        element:<Blog></Blog>
      }
    ])
  },
]);
import './index.css'
import Home from './Components/Layout/Home.jsx';
import Blog from './Components/Blog/Blog.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
