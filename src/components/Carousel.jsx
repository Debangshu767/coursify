import React from 'react'
import dummyimg from '../images/face.jpg'

function Carousel({name,title,image,description}) {
  console.log(name,title,image,description)
  return (
    <div className=' mt-20 mb-12' >
        <div className='flex flex-col gap-5 justify-start shadow-lg rounded-2xl shadow-slate-300 p-6 m-2 md:max-w-[800px] md:m-auto md:flex-row mb-5 ' >
        <img src={image} alt="" className='h-[350px] md:max-w-[400px] rounded-lg '  />

        <div className='p-2 mt-3'  >
            <h1 className=' text-xl font-bold text-slate-800 ' >{name}</h1>
            <h2 className=' text-slate-500 text-md  ' > {title} </h2>
            <p className='text-left font-thin'> {description}</p>

        </div>

        </div>

    </div>
  )
}

export default Carousel