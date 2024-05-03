import React from 'react'
import pic from "../assets/pic.jpg"
import github from "../assets/githublogo.jpg"
import insta from "../assets/instagram.jpg"
import linkedin from "../assets/linkedin.webp"
import mail from "../assets/mail.png"
import telegram from "../assets/telegram.jpg"

const Hero = () => {
  return (
    <div name="aboutme" className=' text-center flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between align-middle'>
        <div className='cursor-pointer mx-8 hover:bg-gray-800   bg-gray-900 border-2 rounded-xl md:w-1/2'>
            
            <h1 className='text-3xl my-6 font-bold'>Sophonias Demiss</h1>
            
            <img className=' w-52 md:w-80 mx-auto rounded-3xl' src={pic} alt="" />
            <ul className=' flex justify-between w-1/2 mx-auto my-7'>
              <li><a href="https://github.com/Sophinaz?tab=repositories"><img className=' transform hover:scale-125 duration-300 w-11 rounded-full' src={github} alt="" /></a></li>
              <li><a href="https://www.instagram.com/sophinaz_/?hl=en"><img className=' transform duration-300 hover:scale-125 w-11 rounded-full' src={insta} alt="" /></a></li>
              <li><a href="https://www.linkedin.com/in/sophonias-demiss-3020b62ab/"><img className=' transform duration-300 hover:scale-125 w-11 rounded-full' src={linkedin} alt="" /></a></li>
              <li><a href="sophidemiss@gmail.com"><img className=' transform duration-300 hover:scale-125 w-11 rounded-full' src={mail} alt="" /></a></li>
              <li><img className=' transform duration-300 hover:scale-125 w-11 rounded-full' src={telegram} alt="" /></li>
            </ul>
            <h2 className='text-2xl my-6'>Software and web Developer</h2>
        </div>
        
        <div className=' space-y-24 md:w-1/2'>
            <h2 className='text-4xl'>Hello, I'm Sophonias, Web developer and Competitive programmer</h2>
            <p>As a front-end web developer and Electrical and Computer Engineering at AAiT, I have craftes my skills in javascript and python languages.
                I have passion for creative works and developments. 
                In here you will find almost everything about me. Try to about me here on this site and if you are intersted contact me.</p>
        <h2 className='p-2 mx-auto cursor-pointer bg-slate-400 w-24 rounded-full'><a href="https://www.linkedin.com/in/sophonias-demiss-3020b62ab/"> Contact?</a></h2>
        </div>
    </div>
  )
}

export default Hero