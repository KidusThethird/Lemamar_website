import React, { useContext } from 'react'
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import {Link} from 'react-router-dom';

export const Cart = () => {

  const { cartItems, addToCart, removeFromCart ,totalCartItems , updateCartItemCount,TotalAmount} = useContext(ShopContext);
  

  return (<>
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
       
       <th><img className='w-36 mx-auto border border-dashed border-purple-600 border-1' src={product.productImage} alt="" /></th>
         <th className='py-3 '>{product.productName}</th>
         <th className='py-3 '>{product.price}</th>
         <th className='py-3 '>  
         <div className='space-x-6  justify-center flex'>
            <button className='text-2xl cursor-pointer' href="" onClick={()=>removeFromCart(product.id)}>-</button>
            <input value={cartItems[product.id]} onChange={(e)=> updateCartItemCount(Number(e.target.value), product.id) } className='w-16 h-8 border-purple-900 text-xl text-center border-2' type="text" />
            <button className='text-2xl   cursor-pointer' href="" onClick={()=>addToCart(product.id)}>+</button> 
          </div>
           </th>
         <th className='py-3 '>{product.price * cartItems[product.id]} Birr</th>
       </tr>
}

      })
       // if(totalCartItems == 0 ){}
  }


        
      </tbody>

    </table>

    </div>
    <div className='flex  justify-end bg-white'>
  <h1 className=' border-t-2 w-52 text-center text-3x text-purple-800 border-purple-800'>{TotalAmount} Birr</h1>
</div>

<div className='py-5 w-full flex flex-row justify-center gap-x-10'>
  <p className='text-white  w-fit px-24 py-4 bg-purple-700 cursor-pointer'>Proceed To Checkout</p>
  <Link to="/"  className='text-white w-fit px-24 py-4 bg-slate-800 '>
  <a href=''>Continue Shopping</a>
    </Link>
  
</div>

    {

totalCartItems == 0 ?  <div className='w-full flex  '>
 <p className='justify-center py-24 text-4xl  mx-auto text-purple-700'>Cart is Empty!</p>
</div> :  <div></div>
 }


</>    
  )
}
