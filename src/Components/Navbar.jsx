import React from 'react'

const NavData = [
  {
    name:"Home",
    path:"home",
    id:0
  },
  {
    name:"About",
    path:"about",
    id:1
  },
  {
    name:"Project",
    path:"project",
    id:2
  },
  {
    name:"Experience",
    path:"experience",
    id:3
  },
  {
    name:"Contact",
    path:"contact",
    id:4
  }
]

const Navbar = ({handleNavClick}) => {
  return (
  <div className="navbar bg-base-100 p-6 px-7  pl-[85px] sticky top-0">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl font-lexend">AKASH</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-lg">
          {NavData?.map((nav)=> <li key={nav.id} onClick={()=>handleNavClick(nav.path)}><a>{nav.name}</a></li>)}
        </ul>
     </div>
  </div>
  )
}

export default Navbar