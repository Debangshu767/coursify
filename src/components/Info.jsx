import React from 'react'
import onecard from '../images/infocard1.svg';
import twocard from '../images/infocard2.svg';
import { Link } from 'react-router-dom';

function Info() {
  return (
    <div>
        
        <h1 className=' text-3xl font-thin text-center mt-8 text-slate-600 ' > What can Career U do for you ? </h1>

        <div>

            <div className='flex flex-col justify-between items-center p-4 md:max-w-[80%] m-auto  md:flex-row-reverse ' >  
                <img src={onecard}  alt="card1" className='w-[400px]' />

                <div>
                    <h2 className=' text-lg uppercase font-bold text-blue-500 border-b-2 border-blue-300'  >Seize your next job effortlessly.</h2>
                    <p className='text-lg font-light max-w-[600px] ' > Escape the world of spammy job boards. Within 5 minutes, discover your ideal opportunities through perfect matches. Engage directly with hiring teams and receive rapid responses.</p>
                    <div className='flex items-center p-2 gap-2 md:gap-4' >
          <Link className=' bg-blue-500 rounded-3xl p-2 px-4 text-white font-bold text-xs hover:bg-blue-700' >Find Jobs Now</Link>
          <Link className=' border-2 border-blue-500 text-blue-500 rounded-3xl p-2 px-4 font-bold text-xs hover:bg-slate-200' >Learn more</Link>
        </div>
                </div>


            </div>

            <div className='flex flex-col justify-between items-center p-4 md:max-w-[80%] m-auto  md:flex-row ' >  
                <img src={twocard}  alt="card1" className='w-[400px]' />

                <div>
                    <h2 className=' text-lg uppercase font-bold text-blue-500 border-b-2 border-blue-300'  >Recruit 10x tech talent, zero backouts.</h2>
                    <p className='text-lg font-light max-w-[600px] ' > India's #1 tech hiring platform, Career U, facilitates connections with top talent, enabling faster execution of your vision through seamless engagement and successful position closures.</p>
                    <div className='flex items-center p-2 gap-2 md:gap-4' >
          <Link className=' bg-blue-500 rounded-3xl p-2 px-4 text-white font-bold text-xs hover:bg-blue-700 ' >Hire Top talent now</Link>
          <Link className=' border-2 border-blue-500 text-blue-500 rounded-3xl p-2 px-4 font-bold text-xs hover:bg-slate-200 ' >View Pricing</Link>
          <Link className=' border-2 border-blue-500 text-blue-500 rounded-3xl p-2 px-4 font-bold text-xs hover:bg-slate-200 ' >Learn More</Link>
        </div>
                </div>

            </div>


        </div>

    </div>
  )
}

export default Info