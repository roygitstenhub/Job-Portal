import React from 'react'
import HashLoader from "react-spinners/HashLoader"

const Spinner = ({ loading }) => {
    const override = {
        display: 'block',
        margin: '100px,400px'
    }

    return (
        <div className='container-xl lg:container m-auto h-screen w-full flex items-center justify-center'>
            <HashLoader
            color="#6366F1"
            loading={loading}
            cssOverride={override}
        />
        </div>
    )
}

export default Spinner