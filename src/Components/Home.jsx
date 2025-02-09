import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { BANNER_IMAGE } from '../constant'

const socialMediaLinks = [
  {
    label:"github",
    icon: <FaSquareGithub/>,
    url:"https://react-icons.github.io/react-icons/search/#q=file"
  },
  {
    label:"linkedin",
    icon:<FaLinkedin/>,
    url:"https://react-icons.github.io/react-icons/search/#q=file"
  },
  {
    label:"File",
    icon:<FaRegFileAlt/>,
    url:"https://react-icons.github.io/react-icons/search/#q=file"
  }
]

const Home = () => {
  return (
    <div className="hero min-h-screen">
    <div className="hero-content  grid grid-flow-col grid-cols-12 ">
    <div className="col-span-7 h-full content-start">
      {/*
       - My Name
       - bordered
       -  Lexend

      */}
      <h3 className='text-xl tracking-widest w-[20%] text-center font-lexend bg-slate-500 p-1 rounded-md mb-2'>AKASH. P</h3>
      <h1 className="text-6xl mb-2 font-bold w-full">HAY! I'M AKASH</h1>
      <h1 className="text-5xl font-bold w-full text-blue-400">A MERN STACK DEVELOPER</h1>
      {/*My Position */}
      {/*Hook up lines */}
      {/*Social Media links */}
      <div className='grid grid-cols-12 gap-3 mt-10'>
      <button className="btn btn-primary col-span-3 rounded-full btn-lg btn-md">
        <span>GET IN TOUCH</span><span className="font-bold text-2xl"><GoArrowRight/></span>
      </button>
      <div className='flex items-center justify-center col-span-4 gap-4'>
        {socialMediaLinks?.map((link)=> 
        <button className="btn btn-circle btn-lg border-white" key={link.label}>
          <span className='p-3 text-xl'>{link.icon}</span>
        </button>
        )}
      </div>
      </div>
    </div>
    <div className='col-span-5' >
        <img src={BANNER_IMAGE}/>
    </div>
  </div>
</div>
  )
}

export default Home