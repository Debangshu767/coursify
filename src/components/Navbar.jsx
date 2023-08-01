import React from 'react'
import { FaContao } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='flex justify-between m-auto items-center p-2 max-w-[900px]' >
        <Link className=' flex items-center gap-1 p-2 '>
        <FaContao className=' text-xl text-blue-500 md:text-2xl '/>
        <h1 className='font-sans text-xl font-extrabold uppercase text-blue-500 md:text-2xl ' >Coursify</h1>
        </Link>

        <div className='flex items-center p-2 gap-2 md:gap-4' >
          <Link className=' bg-blue-500 rounded-3xl p-2 px-4 text-white font-bold text-xs hover:bg-blue-700 md:text-lg ' >Find Jobs</Link>
          <Link className=' border-2 border-blue-500 text-blue-500 rounded-3xl p-2 px-4 font-bold text-xs hover:bg-slate-200 md:text-lg ' >Hire Talent</Link>
        </div>
    </div>
  )
}

export default Navbar