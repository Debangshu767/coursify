import React from 'react'
import oneImage from '../images/one.svg';
import twoimage from '../images/two.svg'


function Diagrams() {
    return (
        <div>

            <div className=' flex flex-col gap-4 items-center justify-center md:flex-row md:gap-32' >

                <div>
                    <h1 className=' text-center text-blue-500 text-xl font-black ' >Work Life Balance</h1>
                    <img src={oneImage} className="h-[400px]" alt="Work Life Balance Diagram" />
                </div>

                <div>
                    <h1 className=' text-center text-blue-500 text-xl font-black ' >Amazing Career Growth</h1>
                    <img src={twoimage} className="h-[400px]" alt="Amazing Career Growth" />
                </div>

            </div>

            <div className='flex justify-center items-center p-5'>
                <p className='text-center text-xl font-bold text-slate-600 mt-12 max-w-[600px]' > 30,00,000+ professionals from 16,500 companies are cutting short their path to success</p>
            </div>
        </div>
    )
}

export default Diagrams