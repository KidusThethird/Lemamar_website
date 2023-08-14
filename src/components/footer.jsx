import React from 'react'
import {FacebookLogo, YoutubeLogo , InstagramLogo } from 'phosphor-react';


export const Footer = () => {
  return (
    <div className=' bg-purple-800'>
        <div className='w-full justify-between md:flex text-white px-10 py-7'>

            <div className='pb-10 md:pb-0 cursor-pointer  flex flex-col  items-start'>
                <h1 className='font-bold pb-4'>
                    INFORMATION
                </h1>
                <p>New Year Offers</p>
                <p>Hair Clearance Sale</p>
                <p>Perfumes</p>
                <p>Waves</p>
                <p>All SkinCare</p>
                <p>All Makeup</p>
                <p>About Lemamar</p>
                <p>Contact Us</p>

            </div>
            <div className='pb-10 md:pb-0 cursor-pointer'>
                <h1  className='font-bold pb-4' >
                    EXPLORE
                </h1>
                <p>How to order</p>
                <p>FAQ</p>
                <p>Delivery and Payment`</p>
                <p>Return Policy</p>
                <p>Beauty Bundles</p>
                

            </div >
            <div className='cursor-pointer'>
                <h1  className='font-bold pb-4'>COMMUNITY</h1>
                <p>Loyality Program</p>
                <p>Blog</p>
                <p>Shop By Look</p>
                <p>Skincare Quiz</p>
                <p>Brand Ambassador</p>
                

            </div>

            <div>
                <h1  className='font-bold pb-4 '>CONNECT</h1>

                <p className='pb-4'>Subscribe for Newsletter</p>
                <div className='flex w-fit  border-2 border-white py-1 pl-4 pr-1 rounded-full'>
                    <input className='bg-purple-800 w-3/4 md:w-auto'  placeholder='Your email address' type="text" />
                    <button className='bg-white w-1/3 md:w-auto text-sm text-purple-800 p-1 rounded-2xl md:rounded-full'>SIGN UP</button>
                </div>
            </div>

        </div>
        <div className='flex justify-center space-x-8 pb-10'>
                 <div className='bg--purple-800 cursor-pointer font-bold w-fit text-white rounded-full
                        hover:bg-white hover:text-purple-800
                 '><FacebookLogo size={48}/></div>
                 <div className='bg--purple-800 cursor-pointer font-bold w-fit text-white rounded-full
                        hover:bg-white hover:text-purple-800'><InstagramLogo size={48}/></div>
                 <div className='bg--purple-800 cursor-pointer font-bold w-fit text-white rounded-full
                        hover:bg-white hover:text-purple-800'><YoutubeLogo size={48}/></div>
            </div>
        <div className='flex w-full justify-center pb-8'>
                
            <h1 className='text-white'>Copyright &copy; 2023 Lemamar Beauty Bar</h1>
        </div>



    </div>
  )
}
