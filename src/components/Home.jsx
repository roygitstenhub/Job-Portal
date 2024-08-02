import React from 'react'
import Hero from './Hero'
import HomeCards from './HomeCards'
import JobsPage from '../screens/JobsPage'


const Home = () => {
    return (
        <>
            <Hero />
            <HomeCards/>
            <JobsPage/>
        </>
    )
}

export default Home