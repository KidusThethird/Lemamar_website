import React from 'react'

import products from '../productImage';
import bg1 from '../assets/bg2-nobg.png';
import bg2 from '../assets/bg2.jpg';

export const GridItemsAd = () => {
  return (
    <section id="makeup_products">


<div className='makeup_section '>


<div className='md:grid  md:grid-cols-2 bg-pink-200'>
  <img src={bg1} className=' w-full my-auto' alt="" />

  <div className=' w-full h-full flex justify-center py-3 md:py-10   right-0 top-0'>

     <div className='   grid grid-cols-2 gap-x-7 gap-y-5  justify-center  '>
          <div className='group relative  flex justify-center'>
            <img className='one_of_four_images ' src={products.p14} alt="" />
              <div className='animated-cover'>
                <h1 className=' text-white text-lg  md:text-2xl xl:text-3xl font-bold uppercase text-center my-auto mx-auto'>Skin Care</h1>
              </div>
          </div>
          <div className='group relative  flex justify-center'>
            <img className='one_of_four_images ' src={products.p13} alt="" />
              <div className='animated-cover'>
                <h1 className=' text-white  text-lg md:text xl:text-3xl font-bold uppercase text-center my-auto mx-auto'>Body</h1>
              </div>
          </div>
          <div className='group relative  flex justify-center'>
            <img className='one_of_four_images ' src={products.p03} alt="" />
              <div className='animated-cover'>
                <h1 className=' text-white  text-lg md:text xl:text-3xl font-bold uppercase text-center my-auto mx-auto'>Attractive</h1>
              </div>
          </div>
          <div className='group relative  flex justify-center'>
            <img className='one_of_four_images ' src={products.p04} alt="" />
              <div className='animated-cover'>
                <h1 className=' text-white  text-lg md:text xl:text-3xl font-bold uppercase text-center my-auto mx-auto'>Bath</h1>
              </div>
          </div>
          
     </div>
  </div>
</div>


</div>

</section>
  )
}
