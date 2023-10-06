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
      },
      {
        path:'/applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path:'/main-content',
        element:<MainContent></MainContent>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      }
    ])
  },
]);
import './index.css'
import Blog from './Components/Blog/Blog.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import MainContent from './Components/MainContent/MainContent.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
