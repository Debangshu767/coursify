import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className=' relative flex flex-col justify-center items-center overflow-hidden h-[500px] w-full'>
            
            
         <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className=' px-8 text-center text-3xl font-bold text-white ' >In the tech world, true potential blossoms</h1>
            <h1 className=' px-6 text-center text-lg font-normal text-white max-w-[900px] ' > Unveil hidden opportunities with Cutshort, where techies can effortlessly connect with exceptional companies, unlocking secret job openings through valuable referrals. </h1>
        </div>   
        <div className='w-[5000px] h-full top-[-10%] absolute bg-gradient-to-b from-blue-500 to-blue-700 -z-10 rotate-3 ' ></div>
        <div className='w-[5000px] h-full top-[-10%] absolute bg-gradient-to-b from-blue-200 to-blue-400 -z-20 -rotate-2 ' ></div>
        <div className='flex items-center p-2 gap-8 mt-8' >
          <Link className=' text-blue-500 rounded-3xl p-2 px-4 bg-white font-extrabold text-m hover:bg-slate-300' >Find Jobs</Link>
          <Link className=' border-2 border-white text-white rounded-3xl p-2 px-4 font-extrabold text-m hover:text-slate-300 hover:border-slate-300' >Hire Talent</Link>
        </div>

    </div>
  )
}

export default HeroSection