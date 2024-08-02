import React from 'react'

const Cards = ({children ,bg='bg-gray-100'}) => {
  return (
    <div className={`${bg}  p-4 rounded-lg shadow-md duration-75 ease-linear hover:scale-105 cursor-pointer `}>
        {children}
    </div>
  )
}

export default Cards