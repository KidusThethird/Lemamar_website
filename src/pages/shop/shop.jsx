import React from 'react'
import products from '../../productImage';
import {Cover} from '../../components/cover';
import { PRODUCTS } from '../../products';
import { Product} from './product';

export const Shop = () => {
  return (
    <div className=''>
            <Cover />

        <div className='flex justify-center'>
            <h1 className='p-5  text-4xl'>Shop</h1>
        </div>

        

            <div className='grid grid-cols-5 p-6  gap-x-8 gap-y-4'>
                
                    {PRODUCTS.map((product)=>(
                        <Product data={product}/>
                       
                    ))}
            </div>


           


            

     



    </div>
  )
}
