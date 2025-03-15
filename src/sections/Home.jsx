import React from 'react'

function Home() {
  return (
    <section className="lg:h-[80vh] h-auto flex flex-col lg:flex-row space-x-4 items-center justify-center text-white text-center px-6 py-50 lg:pt-28">
      <div className="relative border-4 border-violet-500 rounded-lg w-80 h-80 flex items-center justify-center text-white bg-gray-900 overflow-visible">
        <img src="/profile.jpeg" alt="main image" className="w-full h-full object-cover rounded-md" />
        <span className="absolute -bottom-5 -right-5 text-violet-500 text-xl font-bold p-2 bg-zinc-950">
          {"</>"}
        </span>
      </div>
      <div className='animate-fade-up'>
        <p>Hi, I'm a Frontend Developer</p>
        <p className="mt-4 text-lg">I build stunning web experiences with React & Tailwind CSS.</p>
      </div>
    </section>
  )
}

export default Home;
