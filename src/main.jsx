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
        path:'/',
        element:<Header></Header>,
        loader: () => fetch('categories.json')
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/applied-jobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: async () => {
          try {
              const response = await fetch('/jobs.json');
              const data = await response.json();
              return data;
          } catch (error) {
              console.error('Error fetching data:', error);
              throw error; // Re-throw the error to indicate that data fetching failed
          }
      }
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: async () => {
          try {
              const response = await fetch('/jobs.json');
              const data = await response.json();
              return data;
          } catch (error) {
              console.error('Error fetching data:', error);
              throw error; // Re-throw the error to indicate that data fetching failed
          }
      }
      }
    ])
  },
]);
import './index.css'
import Blog from './Components/Blog/Blog.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Header from './Components/Header/Header.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
