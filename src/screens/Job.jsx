import React from 'react'
import { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Job = ({ key, job }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    let description = job.description

    if (!showFullDescription) {
        description = description.substring(0, 90) + "..."
    }

    return (
        <div key={key} className=' bg-white rounded-xl shadow-md relative w-full md:w-[300px] duration-75 ease-linear hover:scale-105 cursor-pointer ' >
            <div className='p-4'>
                <div className='mb-6'>
                    <div className='text-gray-600 my-2'>{job.type}</div>
                    <h3 className='text-sm font-bold'>{job.title}</h3>
                </div>
                <div className='mb-5'>{description}</div>
                <button
                    onClick={() => { setShowFullDescription((prev) => !prev) }}
                    className='text-indigo-500 text-[14px] mb-5 hover:text-indigo-600 font-semibold'
                >
                    {
                        showFullDescription ? 'Less' : 'More'
                    }
                </button>
                <h3 className='text-indigo-500 mb-2 text-[14px] '>{job.salary} / Year</h3>
                <div className='border border-gray-100 mb-5'></div>
                <div className='flex flex-col md:flex-row justify-between items-center mb-4 text-[14px] '>
                    <div className=' text-orange-700 font-semibold '>
                        <FaLocationDot className='inline text-lg mb-1 mr-1' />
                        {job.location}
                    </div>
                    <Link
                        to={`/jobs/${job.id}`}
                        className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm font-semibold text-[14px]'
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Job