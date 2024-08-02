import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const classLink = ({ isActive }) => isActive
    ? 'bg-[#4338CA] font-semibold text-white hover:bg-indigo-200 hover:text-black rounded-md px-3 py-2'
    : 'text-black font-semibold hover:bg-indigo-200 hover:text-black rounded-md px-3 py-2';

    return (
        <div className='flex flex-col md:flex-row items-center justify-between my-4  ' >
            <div className=' flex items-center justify-center gap-1 text-[1.5rem] capitalize font-bold text-[#4338CA] '>
                <img src={logo} alt="" className=' size-[45px] ' />
                <h2>react jobs</h2>
            </div>

            <div className='flex gap-3 ' >
                <NavLink to={'/'} className={classLink}>Home</NavLink>
                <NavLink to={'/jobs'} className={classLink}>Jobs</NavLink>
                <NavLink to={'/add-jobs'} className={classLink}>Add Jobs</NavLink>
            </div>
        </div>
    )
}


export default Navbar