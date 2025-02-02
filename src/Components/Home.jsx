import React from 'react'
import { BANNER_IMAGE } from '../constant'

const Home = () => {
  return (
    <div className="hero  min-h-screen">
    <div className="hero-content grid grid-flow-col grid-cols-12">
    <div className="col-span-7 ">
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
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
    <div className='col-span-5 bg-pink-400' >
      <img src={BANNER_IMAGE}/>
    </div>
  </div>
</div>
  )
}

export default Home