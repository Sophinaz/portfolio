import React from 'react'
import portfo from "../assets/portfolio.png"
import educate from "../assets/educate.png"
import git from "../assets/githublogo.jpg"
import manage from "../assets/manage.png"

const Projects = () => {
  return (
    <div name="projects" className='flex flex-wrap justify-around'>
        <div className='cursor-pointer mb-14 hover:bg-gray-800 p-2 bg-gray-950 border-2 rounded-xl space-y-5 w-3/4 md:w-2/5'>
            <img className=' w-full rounded-xl' src={educate} alt="" />
           
            <h1 className='text-3xl font-bold'>Informational Website</h1>
            <p>This website describes the services and environments of a university</p>
            <a href="https://alleducation.vercel.app/"><h2 className=' hover:bg-slate-600 p-2 pl-7 mx-auto cursor-pointer bg-slate-400 w-24 rounded-full'>open</h2></a>
        </div>
        
        <div className='cursor-pointer mb-14 hover:bg-gray-800 p-2 bg-gray-950 border-2 rounded-xl space-y-5 w-3/4 md:w-2/5'>
            <div className=' bg-black'><img className='pt-4 mx-auto w-1/2 h-48 rounded-xl' src={git} alt="" /></div>
            <h1 className='text-3xl font-bold'>Java chat app</h1>
            <p>simple java chat app that uses socket and was made by using swing</p>
            <a href="https://github.com/Sophinaz/Java-chat-application"><h2 className=' hover:bg-slate-600 p-2 pl-7 mx-auto cursor-pointer bg-slate-400 w-24 rounded-full'>open</h2></a>
        </div>
        
        <div className='cursor-pointer mb-14 hover:bg-gray-800 p-2 bg-gray-950 border-2 rounded-xl space-y-5 w-3/4 md:w-2/5'>
            <img className=' w-full rounded-xl' src={portfo} alt="" />
           
            <h1 className='text-3xl font-bold'>Personal Portfolio</h1>
            <p>This website describes me in terms of professional and presonal background</p>
            <a href="https://sophonias-portfolio.vercel.app/"><h2 className=' hover:bg-slate-600 p-2 pl-7 mx-auto cursor-pointer bg-slate-400 w-24 rounded-full'>open</h2></a>
        </div>
        
        <div className='cursor-pointer mb-14 hover:bg-gray-800 p-2 bg-gray-950 border-2 rounded-xl space-y-5 w-3/4 md:w-2/5'>
            <img className=' w-full rounded-xl' src={manage} alt="" />
           
            <h1 className='text-3xl font-bold'>simple-webpage</h1>
            <p>I built this to hone my tailwindcss skills and it also uses some javascript</p>
            <a href="https://github.com/Sophinaz/manage-cloned-website"><h2 className=' hover:bg-slate-600 p-2 pl-7 mx-auto cursor-pointer bg-slate-400 w-24 rounded-full'>open</h2></a>
        </div>
     

    </div>
  )
}

export default Projects