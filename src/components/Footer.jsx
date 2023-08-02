import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='relative flex flex-col justify-center items-center overflow-hidden h-[200px] w-full mt-12'>
    <div className='flex flex-col justify-center items-center'>
        <h1 className='px-8 text-center text-xl font-mono text-white'>© All rights reserved Debangshu_767</h1>
    </div>   
    <div className='h-full w-[5000px] top-[20%] absolute bg-gradient-to-b from-blue-500 to-blue-700 -z-10 -rotate-3'></div>
    <div className='w-[5000px] h-full top-[20%] absolute bg-gradient-to-b from-blue-200 to-blue-400 -z-20 rotate-3'></div>
</div>
  )
}

export default Footer