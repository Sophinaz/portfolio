import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Title from './Components/Title'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='space'>
        <Title title={"About me"} subtitle={"let me tell you somethings about me"}/>
        <Hero />
        <Title title={"Experiences"} subtitle={"Things I have been working on"}/>
        <Experience />
        <Title title={"My Education"} subtitle={""}/>
        <Education />
        <Title title={"Projects"} subtitle={"Hightlights of some of the things I have built"} />
        <Projects />
      </div>
    </div>
  )
}

export default App