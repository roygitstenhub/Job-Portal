import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const HomeCards = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 p-4 rounded-lg gap-8    ' >
            <Cards >
                <h2 className='text-2xl font-bold text-slate-600 '>For Developers</h2>
                <p className='mt-2 mb-4 font-semibold text-[14px] capitalize text-slate-600  '>
                    Browse our React jobs and start your career today
                </p>
                <Link
                    to='/jobs'
                    className='inline-block rounded-lg px-4 py-2 text-[12px] text-white bg-black hover:bg-gray-700'
                >
                    Browse Jobs
                </Link>
            </Cards>

            <Cards bg='bg-indigo-100'>
                <h2 className='text-2xl font-bold text-slate-600 '>For Employers</h2>
                <p className='mt-2 mb-4 font-semibold text-[14px] capitalize text-slate-600  '>
                    List your job to find the perfect developer for the role
                </p>
                <Link
                    to='/add-jobs'
                    className='inline-block text-white text-[12px] rounded-lg px-4 py-2 bg-indigo-600 hover:bg-indigo-500'
                >
                    Add Job
                </Link>
            </Cards>
        </div>
    )
}

export default HomeCards