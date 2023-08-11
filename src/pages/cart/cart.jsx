import React, { useContext } from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';

export const Cart = () => {

  const { cartItems } = useContext(ShopContext);
  

  return (
    <div className='flex '>

    <table className='justify-center mx-auto shadow-2xl border-2 gap-x-32 w-full px-40'>
      <thead className='text-black'>
        <tr>
          <th className='py-3 '></th>
          <th className='py-3 '>Product</th>
          <th className='py-3 '>Unit Price</th>
          <th className='py-3 '>Quantity</th>
          <th className='py-3 '>Total</th>
          <th className='py-3 '></th>

        </tr>
      </thead>
      
      <tbody className='mx-auto px-80'>

      {PRODUCTS.map((product)=>{
if(cartItems[product.id] !== 0){
return <tr>
       
       <th><img className='w-36 mx-auto' src={product.productImage} alt="" /></th>
         <th className='py-3 '>{product.productName}</th>
         <th className='py-3 '>{product.price}</th>
         <th className='py-3 '>Amount</th>
         <th className='py-3 '>Total</th>
       </tr>
}
      })}

        
      </tbody>

    </table>

    </div>
  )
}
