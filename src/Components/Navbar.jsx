import React from 'react'

const Navbar = () => {
    return(
    <nav className=' flex justify-between bg-slate-900 p-6 mb-16 text-white  '>
        <h1 className='w-1/3'>AboutMe</h1>
        <ul className=' flex space-x-8 justify-between'>
            <li className=' cursor-pointer ml-4'>Home</li>
            <li className=' cursor-pointer ml-4'>About</li>
            <li className=' cursor-pointer ml-4'>Education</li>
            <li className=' cursor-pointer ml-4'>Experience</li>
        </ul>

    </nav>
    )
}

export default Navbar