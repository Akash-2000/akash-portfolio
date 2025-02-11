import React from 'react'
import TitleComponent from './TitleComponent'

const Project = () => {
  return (
  <div className="bg-base-200 h-auto pt-10">
  <div className=" grid grid-rows-[auto_auto_1fr]  gap-2">
    <div className='grid grid-cols-12 '>
     
      <h3 className="text-xl col-span-7 col-start-2 tracking-widest w-[20%] text-center font-lexend bg-slate-500 p-1 rounded-md mb-2">
    MY PROJECT
  </h3>
      
    </div>
    <div className='grid grid-cols-12'>
    <h1 className="text-3xl col-span-3 col-start-2  font-bold w-full">MY RECENT PROJECT</h1>
    </div>
    <div className="carousel carousel-center bg-neutral rounded-box  space-x-4 p-4 ml-20">
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      class="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      class="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      class="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      class="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      class="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      class="rounded-box" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      class="rounded-box" />
  </div>
    </div>
  </div>
</div>
  )
}

export default Project