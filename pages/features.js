import React from 'react'

const features = () => {
    return (
        <>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <h1 className='font-bold text-lg'>Features of this Template:</h1>
                <ul className='mt-5 border p-4 rounded-lg shadow-xl'>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Tailwind CSS</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Google analytics</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Page loader animation</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Dynamic Head component</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Responsive Navbar</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Custom 404 Page</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Notification toast</li>
                    <li className='hover:text-indigo-500 hover:translate-x-2 transition-all duration-300 cursor-pointer'>Footer</li>
                </ul>
            </div>
        </>
    )
}

export default features