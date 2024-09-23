import React from 'react'

const Footer = () => {
    return (
        <div className='bg-violet-600 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-sky-500'> &lt;</span>

                <span>Pass</span><span className='text-sky-500'>OP/&gt;</span>

            </div>
            <div className='flex justify-center items-center'>  Password Manager  </div>
        </div>
    )
}

export default Footer