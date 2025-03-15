import React from 'react'
import ICONS from '../assets/icons';

const Contact = () => {
  const contactDetails = [
    {
      icon: <ICONS.LOCATION />,
      title: 'ADDRESS',
      value: 'Karachi, Pakistan'
    },
    {
      icon: <ICONS.PHONE />,
      title: 'Contact Number',
      value: '(+92)3120832542'
    },
    {
      icon: <ICONS.EMAIL />,
      title: 'Email Address',
      value: 'omeganasir7@gmail.com'
    },
    {
      icon: <ICONS.RESUME />,
      title: 'Download Resume',
      value: 'resumelink',
      link: '/Laiba-Nasir-React-Dev.pdf'
    },
  ]
  return (
    <div className="py-20 md:mt-32 md:px-10 lg:px-60 bg-zinc-900">
      <div className="flex flex-col items-center">
        <p className='text-4xl md:text-5xl text-white font-bold pb-4'>Contact Me </p>
        <p className='text-white my-4 md:my-8 md:text-lg w-auto md:w-[40rem] text-center'>Below are the details to reach out to me!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4">
        {contactDetails?.map((contactDetail, index) => (
          <a href={contactDetail?.link} download={contactDetail?.link}>
            <div key={index} className='flex flex-col justify-center mb-2 items-center space-y-2 md:space-y-4'>
              <div className="rounded-full p-10 bg-zinc-800 h-[6.5rem] w-[6.5rem] flex justify-center hover:text-3xl text-2xl hover:p-9">
                <i className='text-violet-300'>{contactDetail?.icon}</i>
              </div>
              <p className="text-white font-semibold text-md md:text-xl">{contactDetail?.title}</p>
              <p className="text-white text-md md:text-lg">{contactDetail?.value}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-4 mt-20">
        <p className="text-white text-3xl">Have a Question?</p>
        <a href="mailto:omeganasir7@gmail.com" className="bg-violet-400 rounded-full mt-4 md:mt-0 px-8 py-6 text-xs w-36 hover:text-[0.80rem] tracking-widest font-semibold">
      Click Here
        </a>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-x-4 mt-10 md:mt-20">
       
        <p className="text-zinc-300">Contact me on</p>
      
        <div className="flex mt-2 space-x-2 md:mt-0">
          {[<ICONS.LINKEDIN />, <ICONS.WHATSAPP />, <ICONS.PHONE />, <ICONS.EMAIL />].map((icon, index) => (
            <div key={index} className="rounded-full p-3 bg-zinc-800 w-12 flex justify-center">
              <i className='text-violet-300 text-2xl'>{icon}</i>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
