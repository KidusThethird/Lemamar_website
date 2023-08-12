import React, { useState } from 'react'
import products from '../../productImage';
import {Cover} from '../../components/cover';
import { PRODUCTS } from '../../products';
import { Product} from './product';

export const Shop = () => {
  

  const [chosenCategory , setChosenCategory] = useState('all')

  const skin=()=>{
    
    setChosenCategory('skin');
    
  }
  const body=()=>{
    
    setChosenCategory('body');
    
  }
  const tool=()=>{

    setChosenCategory('tools');
    
  }
  const all=()=>{
 
    setChosenCategory('all');
    
  }


  return (
    <div className=''>
            <Cover />

        <div className='flex  justify-center'>
          <div>
            <h1 className='p-5  text-4xl text-center'>Shop</h1>

            <div className='space-x-7 mx-auto py-9'>
              <button onClick={()=>all()} className='bg-purple-700 hover:scale-110 hover:shadow-2xl text-white px-4 rounded'>All</button>
              <button onClick={()=>skin()} className='bg-purple-700 hover:scale-110 hover:shadow-2xl text-white px-4 rounded'>Skin Products</button>
              <button onClick={()=>body()} className='bg-purple-700 hover:scale-110 hover:shadow-2xl text-white px-4 rounded'>Body Products</button>
              <button onClick={()=>tool()} className='bg-purple-700 hover:scale-110 hover:shadow-2xl text-white px-4 rounded'>Tools</button>
            </div>
            </div>
        </div>

        

            <div className='grid grid-cols-5 p-6  gap-x-8 gap-y-4'>
                
                    {PRODUCTS.map((product)=>(
                      product.category==chosenCategory?<Product data={product}/>: <>
                       {chosenCategory=='all' && <Product data={product}/> }
                      </>
                        
                       
                    ))}
            </div>


           


            

     



    </div>
  )
}
