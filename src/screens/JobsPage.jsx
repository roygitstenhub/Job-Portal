import React, { useEffect, useState } from 'react'
import Job from './Job'
import Spinner from './Spinner'

const JobsPage = () => {
  const [jobs, setJobs] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {

    const fetchJobs = async () => {
      try {

        let res = await fetch(`/api/jobs`)
        let data = await res.json()
        setJobs(data)
        setLoading(false)
      } catch (error) {
        console.log("something went wrong", error)
      }finally{
        setLoading(false)
      }
    }
    fetchJobs()

  }, [])


  return (
    <div className=' w-full min-h-screen bg-[#EFF6FF] '>
      <h1 className=' text-center capitalize text-[#6366F1] font-semibold text-[26px] mt-4 p-4 '>Browse jobs</h1>


      {
        Loading ? (
          <Spinner loading={Loading} />
        ) : (
          <div className=' grid grid-cols-1 place-items-center p-4 md:grid-cols-3 gap-4  '>
            {
               jobs.map((job) => (
                <Job key={job.id} job={job} />
              ))
            }
          </div>
        )}
    </div>
  )
}

export default JobsPage