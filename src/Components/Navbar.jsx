import React from 'react'
import {Link} from "react-scroll"

const Navbar = () => {
    return(
    <nav className=' flex justify-between bg-slate-900 p-6 mb-16 text-white  '>
        <h1 className='w-1/3 text-xl'>SOPHONIAS</h1>
        <ul className=' flex space-x-8 justify-between'>
            <li className=' cursor-pointer ml-4'><Link to="aboutme" offset={0} duration={500} smooth={true}>About</Link></li>
            <li className=' cursor-pointer ml-4'><Link to="experience" offset={0} duration={500} smooth={true}>Experience</Link></li>
            <li className=' cursor-pointer ml-4'><Link to="education" offset={0} duration={500} smooth={true}>Education</Link></li>
            <li className=' cursor-pointer ml-4'><Link to="projects" offset={0} duration={500} smooth={true}>projects</Link></li>
        </ul>

    </nav>
    )
}

export default Navbar