import React from 'react'
import logo from '../assets/logo (2).png';
import {ShoppingCart, House , List} from 'phosphor-react';

import {Link} from 'react-router-dom';
import {ShopContext} from '../context/shop-context'
import { useContext } from 'react';
import {NavDrawer} from './nav-drawer';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const Navbar = (props) => {

 

  const {cartItems, totalCartItems} = useContext (ShopContext);

  const [navBarDrawerStatus , setNavbarDrawerStatus] = useState(false);
  

const navBarDraw =() => {
  setNavbarDrawerStatus(true);
}


const sidebarVariants = {
  hidden: {
    x: '-100%',
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.3, // Animation duration in seconds
      ease: 'easeOut', // Easing function
    },
  },
};


  return (
    <div className=''>

 {/* Header started */}




{/* Menu holder */}
  <div className="flex fixed pr-8 lg:pr-0  w-full  z-30   items-center justify-between lg:justify-around bg-gradient-to-r from-fuchsia-700 via-red-400  to-pink-500">
   

<ul className='block lg:hidden text-white px-8'>
<li className='cursor-pointer' onClick={()=>navBarDraw()}>
    
    <List size={32} />
    
      </li>
   
   </ul>


   <div className='block lg:hidden'>
    <h1 className='text-white   text-2xl'>LEMAMAR</h1>
   </div>

    <ul className="hidden lg:flex  text-white uppercase justify-around items-center gap-9 ">
    <li>
    <Link to="/">
    <House size={32} />
    </Link>
      </li>
      <li >
        
        <a href=''className='nav-bar-items-style'>New Arrivals</a>
      </li>
      <li>
        <a  href=''className='nav-bar-items-style'>Makeup</a>
      </li>
      <li>
        <a  href=''className='nav-bar-items-style'>Skincare</a>
      </li>
      <li>
        
        <a  href=''className='nav-bar-items-style'>Hair</a>
      </li>
      <li>
        <a  href=''className='nav-bar-items-style'>Bath&Body</a>
      </li>
      <li>
        <a  href=''className='nav-bar-items-style'>Accessories</a>
      </li>
    </ul>



{/* shopping cart icon*/ }


{console.log('test: ' + totalCartItems)}
<div className='relative  text-purple-800 rounded-full font-bold hover:bg-purple-800 hover:text-white p-2 duration-500 cursor-pointer bg-white'>
<Link to="/cart" >
        <ShoppingCart size={28}  />
 </Link>
 {totalCartItems>0 ?  <div className='bg-red-700 text-white rounded-full w-fit p-1 text-xs absolute top-0 right-0'  >
 {totalCartItems}
 </div> :  <div > </div>}

 </div>



  </div>



{navBarDrawerStatus &&
   <motion.div
   initial="hidden"
    animate="visible"
    variants={sidebarVariants}
  className='block lg:hidden z-50 pt-0  fixed w-full'>
  <NavDrawer  setNavbarDrawerStatus={setNavbarDrawerStatus}/>
</motion.div>
}


      {/* Logo holder*/}


      {/* very top contact bar */}
      <div className= ' pt-14 bg-purple-900 text-xs text-white space-x-4 flex p-3'>
        <p>Get Help</p>
          <p> Call 0719604053</p>
          <p> Messenger</p>
          <p> Whatsapp</p>
    </div>


 
  {/* Header End */}

    </div>
  )
}

