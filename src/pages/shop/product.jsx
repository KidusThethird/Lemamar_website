import React, { useContext } from 'react';
import {ShopContext} from '../../context/shop-context';
import {motion} from 'framer-motion';

export const Product = (props) => {

    const {id, productName,price, productImage} = props.data;

    const {addToCart, cartItems} = useContext (ShopContext);

    const cartItemsAmount = cartItems[id];
  return (
    

    <div className='hover:scale-110 group transition-all ease-in-out duration-200'>
         <div className='bg-fuchsia-800 w-fit px-5 text-white rounded-t-full'>{price} Birr</div>
    <img src={productImage} alt="" className='border border-solid border-purple-600' />
   <div onClick={()=>{addToCart(id) }} className='absolute top-6 right-0 opacity-50 hover:opacity-100 px-2 py-1 text-sm text-white rounded-bl-lg cursor-pointer  bg-fuchsia-800 hidden group-hover:block duration-300 -pt-8'>Add to Cart</div>
    <div className=' bg-fuchsia-800  rounded-b-3xl hover:bg-purple-950 flex text-white justify-center' >
        
    <p className='py-2 px-1'>{productName}  {cartItemsAmount > 0 && <>({cartItemsAmount})</>}</p>
    </div>
</div>




  )
}
