import React from 'react'
import { BANNER_IMAGE } from '../constant'
import { GoArrowRight } from "react-icons/go";
import Stats from './Stats'

const statConstants = [
  {
  title:"Experience",
  value:2,
  id:0
  },
  {
  title:"Projects",
  value:4,
  id:1
  }
]

const About = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content  grid grid-flow-col grid-cols-12">
      <div className="col-span-5">
        <img src={BANNER_IMAGE}/>
      </div>
      <div className="col-span-7 h-full">
  <div className="grid gap-3">
    <h3 className="text-xl tracking-widest w-[20%] text-center font-lexend bg-slate-500 p-1 rounded-md mb-2">
      ABOUT ME
    </h3>
    <h1 className="text-4xl mb-2 font-bold w-full">
      I AM AVAILABLE FOR <br />
      <span className="font-bold w-full text-blue-400">MERN STACK</span> PROJECTS
    </h1>
    <p className="text-lg">
      I am a MERN stack developer with 2 years of experience in building scalable and user-friendly web applications. My experience includes working on RESTful APIs, database management, state management (Redux), authentication, and third-party integrations. Looking for opportunities to contribute and grow in a dynamic environment. Let’s build something great together! 🚀
    </p>

    {/* Stats Section */}
    <div className="grid grid-cols-4 gap-4">
      {statConstants.map((stat)=><Stats key={stat.id} title={stat.title} value={stat.value}/>)}
    </div>

    {/* Button with col-span-3 */}
    <div className="grid grid-cols-4">
      <button className="btn btn-primary rounded-full btn-lg btn-md">
        <span>GET IN TOUCH</span>
        <span className="font-bold text-2xl">
          <GoArrowRight />
        </span>
      </button>
    </div>
  </div>
</div>

    </div>
  </div>
  )
}

export default About