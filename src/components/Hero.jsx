import React from 'react'
import Typewriter from 'typewriter-effect';

const Hero = () => {
    return (
        <div className=' w-full h-[50vh] flex items-center justify-center flex-col back-drop '>
            <h1 className='text-4xl font-extrabold sm:text-5xl md:text-6xl ' >Become a <span className='text-[#4338CA]  '>React Dev</span></h1>
            <p className=' text-slate-600 capitalize py-4'>
                Find the React job that fits your skill set
            </p>
            <Typewriter options={{
                strings: ['React Developer', 'React Native Developer', 'frontend Development', 'Backend Development'],
                autoStart: true,
                loop: true,
                cursor: '',
                wrapperClassName: 'typewriterpara',

            }} />
        </div>
    )
}

export default Hero