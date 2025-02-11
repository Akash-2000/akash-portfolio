import React from 'react'

const TitleComponent = ({title}) => {
  return (
    <h3 className="text-xl tracking-widest w-[20%] text-center font-lexend bg-slate-500 p-1 rounded-md mb-2">
    {title}
  </h3>
  )
}

export default TitleComponent