import React from 'react'

const Stats = ({title, value}) => {
  return (
<div className="stats shadow bg-transparent border-white border-1 p-0">
  <div className="stat">
    <div className="stat-value">{value}+</div>
    <div className="stat-desc text-lg text-white">{title}</div>
  </div>
</div>
  )
}

export default Stats