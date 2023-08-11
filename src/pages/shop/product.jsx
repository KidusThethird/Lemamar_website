import React from 'react'

export const Product = (props) => {

    const {id, productName,price, productImage} = props.data;
  return (
    

    <div className='product-holder'>
    <img src={productImage} alt="" className='product-image-holder'/>
    <div className=' product-items' >
    <p className='py-2 px-1'>{productName}</p>
    </div>
</div>


  )
}
