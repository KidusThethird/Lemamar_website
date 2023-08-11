import React from 'react'

export const Product = (props) => {

    const {id, productName,price, productImage} = props.data;
  return (
    

    <div className='hover:scale-110  transition-all ease-in-out duration-200'>
         <div className='bg-fuchsia-800 w-fit px-5 text-white rounded-t-full'>{price} Birr</div>
    <img src={productImage} alt="" className='border border-solid border-purple-600'/>
   
    <div className=' bg-fuchsia-800  rounded-b-3xl hover:bg-purple-950 flex text-white justify-center' >
        
    <p className='py-2 px-1'>{productName}</p>
    </div>
</div>


  )
}
