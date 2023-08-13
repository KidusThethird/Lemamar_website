import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className='w-full justify-between flex bg-purple-800 text-white px-10 py-7'>

            <div className='cursor-pointer'>
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
            <div className='cursor-pointer'>
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
                <div className='border-2 border-white py-1 pl-4 pr-1 rounded-full'>
                    <input className='bg-purple-800' placeholder='Your email address' type="text" />
                    <button className='bg-white text-sm text-purple-800 p-2 rounded-full'>SIGN UP</button>
                </div>
            </div>

        </div>
        <div></div>



    </div>
  )
}
