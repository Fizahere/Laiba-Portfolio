import React from 'react'

function About() {
  return (
    <section className=" flex flex-col space-x-4 items-center justify-center text-white text-center px-6 pb-20">
      <h2 className="text-4xl md:text-5xl text-white font-bold text-center mb-10">About Me</h2>
      <p className="text-lg max-w-3xl mx-auto text-center">
        I'm a passionate frontend developer specializing in React.js, Tailwind CSS, and modern web technologies.
      </p>
      <div className="flex flex-col md:flex-row space-x-10 mt-10">
        <div className="border-2 border-violet-500 p-2">
          <b className='mr-2'>Web Developer</b>transitioning to a career in technology.
        </div>
        <div className="border-2 border-violet-500 p-2">
        I have a solid foundation in Html, Css, Git and JavaScript
        </div>
      </div>
    </section>
  )
}

export default About
