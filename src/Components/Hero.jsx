import React from 'react'
import pic from "../assets/pic.jpg"
import github from "../assets/githublogo.jpg"
import insta from "../assets/instagram.jpg"
import linkedin from "../assets/linkedin.webp"
import mail from "../assets/mail.png"
import telegram from "../assets/telegram.jpg"

const Hero = () => {
  return (
    <div name="aboutme" className=' text-center flex justify-between align-middle'>
        <div className='cursor-pointer mx-8 hover:bg-gray-800  bg-gray-900 border-2 rounded-xl w-1/2'>
            
            <h1 className='text-3xl my-6 font-bold'>Sophonias Demiss</h1>
            
            <img className=' w-80 mx-auto rounded-3xl' src={pic} alt="" />
            <ul className=' flex justify-between w-1/2 mx-auto my-7'>
              <li><img className=' w-11 rounded-full' src={github} alt="" /></li>
              <li><img className=' w-11 rounded-full' src={insta} alt="" /></li>
              <li><img className=' w-11 rounded-full' src={linkedin} alt="" /></li>
              <li><img className=' w-11 rounded-full' src={mail} alt="" /></li>
              <li><img className=' w-11 rounded-full' src={telegram} alt="" /></li>
            </ul>
            <h2 className='text-2xl my-6'>Software and web Developer</h2>
        </div>
        
        <div className=' space-y-24 w-1/2'>
            <h2 className='text-4xl'>Hello, I'm Sophonias, Web developer and Competitive programmer</h2>
            <p>As a front-end web developer and Electrical and Computer Engineering at AAiT, I have craftes my skills in javascript and python languages.
                I have passion for creative works and developments. 
                In here you will find almost everything about me. Try to about me here on this site and if you are intersted contact me.</p>
        <h2 className='p-2 mx-auto cursor-pointer bg-slate-400 w-24 rounded-full'>Contact?</h2>
        </div>
    </div>
  )
}

export default Hero