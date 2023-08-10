import React from 'react'
import products from '../../productImage';
import {Cover} from '../../components/cover';

export const Shop = () => {
  return (
    <div className=''>
            <Cover />

        <div className='flex justify-center'>
            <h1 className='p-5  text-4xl'>Shop</h1>
        </div>

        <div className='grid grid-cols-5 p-6  gap-x-8'>
            <div className=' hover:scale-110  transition-all ease-in-out duration-200'>
                <img src={products.p05} alt="" className='border border-solid border-purple-600'/>
                <div className='  bg-fuchsia-800  rounded-b-3xl hover:bg-purple-950 flex text-white justify-center ' >
                <p className='py-2 px-1'>Screen Cream</p>
                </div>
            </div>


            <div className='overflow-hidden w-full h-full hover:scale-110  transition-all ease-in-out duration-200'>
                <img src={products.p06} alt="" className=''/>
                <div className='  bg-fuchsia-800 rounded-b-3xl hover:bg-purple-950 flex text-white justify-center ' >
                <p className='py-2 px-1'>Screen Cream</p>
                </div>
            </div>


            <div className='overflow-hidden w-full h-full hover:scale-110  transition-all ease-in-out duration-200'>
                <img src={products.p07} alt="" className=''/>
                <div className='  bg-fuchsia-800 rounded-b-3xl hover:bg-purple-950 flex text-white justify-center ' >
                <p className='py-2 px-1'>Screen Cream</p>
                </div>
            </div>

            <div className='overflow-hidden w-full h-full hover:scale-110  transition-all ease-in-out duration-200'>
                <img src={products.p08} alt="" className=''/>
                <div className='  bg-fuchsia-800 rounded-b-3xl hover:bg-purple-950 flex text-white justify-center ' >
                <p className='py-2 px-1'>Screen Cream</p>
                </div>
            </div>


            <div className='overflow-hidden w-full h-full hover:scale-110  transition-all ease-in-out duration-200'>
                <img src={products.p09} alt="" className=''/>
                <div className='  bg-fuchsia-800 rounded-b-3xl hover:bg-purple-950 flex text-white justify-center ' >
                <p className='py-2 px-1'>Screen Cream</p>
                </div>
            </div>

            <div className='overflow-hidden w-full h-full  hover:scale-110  transition-all ease-in-out duration-200'>
                <img src={products.p10} alt="" className=''/>
                <div className='  bg-fuchsia-800 rounded-b-3xl hover:bg-purple-950 flex text-white justify-center ' >
                <p className='py-2 px-1'>Screen Cream</p>
                </div>
            </div>

            <div className='overflow-hidden w-full h-full hover:scale-110  transition-all ease-in-out duration-200'>
                <img src={products.p11} alt="" className=''/>
                <div className='  bg-fuchsia-800 rounded-b-3xl hover:bg-purple-950 flex text-white justify-center ' >
                <p className='py-2 px-1'>Screen Cream</p>
                </div>
            </div>

            <div className='overflow-hidden w-full h-full hover:scale-110  transition-all ease-in-out duration-200'>
                <img src={products.p12} alt="" className=''/>
                <div className='  bg-fuchsia-800 rounded-b-3xl hover:bg-purple-950 flex text-white justify-center ' >
                <p className='py-2 px-1'>Screen Cream</p>
                </div>
            </div>

        </div>



    </div>
  )
}
