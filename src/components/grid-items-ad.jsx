import React from 'react'

import products from '../productImage';
import bg1 from '../assets/bg1.jpg';

export const GridItemsAd = () => {
  return (
    <section id="makeup_products">


<div className='makeup_section '>


<div className='relative'>
  <img src={bg1} className=' w-full' alt="" />

  <div className='absolute w-1/2 h-full flex  py-10  right-0 top-0'>
     <div className='grid grid-cols-2 gap-x-10   items-center '>
          <div className='group relative '>
            <img className='one_of_four_images ' src={products.p14} alt="" />
              <div className='animated-cover'>
                <h1 className=' text-white text-4xl font-bold uppercase text-center my-auto mx-auto'>Skin Care</h1>
              </div>
          </div>
          <div className='group relative '>
            <img className='one_of_four_images ' src={products.p13} alt="" />
              <div className='animated-cover'>
                <h1 className=' text-white text-4xl font-bold uppercase text-center my-auto mx-auto'>Body</h1>
              </div>
          </div>
          <div className='group relative '>
            <img className='one_of_four_images ' src={products.p03} alt="" />
              <div className='animated-cover'>
                <h1 className=' text-white text-4xl font-bold uppercase text-center my-auto mx-auto'>Attractive</h1>
              </div>
          </div>
          <div className='group relative '>
            <img className='one_of_four_images ' src={products.p04} alt="" />
              <div className='animated-cover'>
                <h1 className=' text-white text-4xl font-bold uppercase text-center my-auto mx-auto'>Bath</h1>
              </div>
          </div>
          
     </div>
  </div>
</div>


</div>

</section>
  )
}
