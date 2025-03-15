import React from 'react'

function Projects() {
  return (
    <section className="h-auto flex flex-col space-x-4 items-center justify-center text-white text-center px-6 py-44">
    <h2 className="text-4xl md:text-5xl text-white font-bold text-center mb-20">Projects</h2>
    {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
    <a href="https://fitness-tracker-red-five.vercel.app" target='blank'>
        <div className="flex flex-col md:flex-row space-x-10 items-center">
          <img src="/project1.png" alt="project 1" className='w-[30rem] h-80' />
       <div>
       <h3 className="text-xl font-semibold">Fitness Tracker - Mern</h3>
       <p className="mt-2 text-sm">A MERN stack fitness tracker with workout logging, goal setting, and responsive design with tailwind css.</p>
       </div>
        </div>
        </a>
    
    {/* </div> */}
  </section>
  )
}

export default Projects
