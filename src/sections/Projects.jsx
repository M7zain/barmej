import React from 'react'

import ProjectCard from '../Components/ProjectCard'
import { projects } from '../constants'
const Projects = () => {
  return (
    <div className='my-10'>
       {/* title */}
        <div className='flex flex-col items-center mt-10'> 
            <h2 className='text-4xl font-semibold text-pro-blue'>
                My Projects
            </h2>
            <p className='mt-5 text-lg px-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae ratione soluta alias magnam </p>
        </div>

        {/* Projects grid */}
        
        <div className='flex flex-col items-center lg:flex-row lg:justify-between mt-11 px-14'> 
          {
            projects.map((card) => (
                <ProjectCard CardImg={card}/>
            ))
          }
          
        </div>

    </div>
  )
}

export default Projects