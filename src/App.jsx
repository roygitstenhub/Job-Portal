import React from 'react'
import { createBrowserRouter, RouterProvider, Route, Outlet, json } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import JobsPage from './screens/JobsPage'
import AddJobsPage from './screens/AddJobsPage'
import SingleJobPage from './screens/SingleJobPage'
import EditJobPage from './screens/EditJobPage'
import Error from './components/Error'
const Layout = () => {
  return (
    <>
      <div className=' md: w-11/12 mx-auto '>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}
const addJob = async (newjob) => {
  try {
    await fetch(`/api/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newjob)
    })

  } catch (error) {
    console.log(error)
  }
}

const deleteJob = async (id) => {
  try {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.log(error)

  }
}

const updateJob = async (job) => {
  try {
    await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job)
    })

  } catch (error) {
    console.log(error)

  }
}

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error/>,
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/jobs',
        element: <JobsPage />
      },
      {
        path: '/jobs/:id',
        element: <SingleJobPage deleteJob={deleteJob} />
      },
      ,
      {
        path: '/edit-job/:id',
        element: <EditJobPage updateJob={updateJob} />
      },
      {
        path: '/add-jobs',
        element: <AddJobsPage addjob={addJob} />
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App

