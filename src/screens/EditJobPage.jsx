import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditJobPage = ({ updateJob }) => {
    const { id } = useParams()
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState();
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');

    const navigate = useNavigate()

    useEffect(() => {

        const fetchdata = async () => {
            try {
                const res = await fetch(`/api/jobs/${id}`)
                const data = await res.json()
                setTitle(data.title)
                setType(data.type)
                setDescription(data.description)
                setSalary(data.salary)
                setLocation(data.location)
                setCompanyName(data.companyName)
                setCompanyDescription(data.companyDescription)
                setContactEmail(data.contactEmail)
                setContactPhone(data.contactPhone)
            } catch (error) {
                console.log("something went wrong ", error)
            }
        }
        fetchdata()
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault()
        const newjob = {
            id,
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone,
            },
        }
        updateJob(newjob)
        toast.success('job updated successfully')
        navigate('/jobs')
    }


    return (
        <div className=' w-full min-h-screen flex justify-center p-4 '>
            <div className=' bg-white w-full px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0' >
                <form action="" className='' onSubmit={handleUpdate} >
                    <h2 className='text-3xl text-center font-semibold mb-6 text-[#4338CA]'>Edit Job</h2>

                    <div className='mb-4'>
                        <label htmlFor="" className='block text-gray-700 font-bold mb-2'>Job Type</label>
                        <select
                            id='type'
                            name='type'
                            className='border rounded w-full py-2 px-3 outline-[#4338CA] '
                            required
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value='Full-Time'>Full-Time</option>
                            <option value='Part-Time'>Part-Time</option>
                            <option value='Remote'>Remote</option>
                            <option value='Internship'>Internship</option>
                        </select>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2'>
                            Job Listing Name
                        </label>
                        <input
                            type='text'
                            id='title'
                            name='title'
                            className='border rounded w-full py-2 px-3 mb-2 outline-[#4338CA] '
                            placeholder='eg. Beautiful Apartment In Miami'
                            required
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='description'
                            className='block text-gray-700 font-bold mb-2'
                        >
                            Description
                        </label>
                        <textarea
                            id='description'
                            name='description'
                            className='border rounded w-full py-2 px-3 outline-[#4338CA]'
                            rows='4'
                            placeholder='Add any job duties, expectations, requirements, etc'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>

                    <div className='mb-4'>
                        <label
                            htmlFor='type'
                            className='block text-gray-700 font-bold mb-2'
                        >
                            Salary
                        </label>
                        <select
                            id='salary'
                            name='salary'
                            className='border rounded w-full py-2 px-3 outline-[#4338CA]'
                            required
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        >
                            <option value='Under $50K'>Under $50K</option>
                            <option value='$50K - 60K'>$50K - $60K</option>
                            <option value='$60K - 70K'>$60K - $70K</option>
                            <option value='$70K - 80K'>$70K - $80K</option>
                            <option value='$80K - 90K'>$80K - $90K</option>
                            <option value='$90K - 100K'>$90K - $100K</option>
                            <option value='$100K - 125K'>$100K - $125K</option>
                            <option value='$125K - 150K'>$125K - $150K</option>
                            <option value='$150K - 175K'>$150K - $175K</option>
                            <option value='$175K - 200K'>$175K - $200K</option>
                            <option value='Over $200K'>Over $200K</option>
                        </select>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-gray-700 font-bold mb-2'>
                            Location
                        </label>
                        <input
                            type='text'
                            id='location'
                            name='location'
                            className='border rounded w-full py-2 px-3 mb-2 outline-[#4338CA]'
                            placeholder='Company Location'
                            required
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    <div>
                        <button
                            className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-6 rounded-full w focus:outline-none focus:shadow-outline'
                            type='submit'
                        >
                            Edit Job
                        </button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default EditJobPage