import React from 'react'
import logo from '../assets/logo (2).png';
import {ShoppingCart} from 'phosphor-react';
import {House} from 'phosphor-react';
import {Link} from 'react-router-dom';
import {ShopContext} from '../context/shop-context'
import { useContext } from 'react';

export const Navbar = () => {

  const {cartItems, totalCartItems} = useContext (ShopContext);

  
  
  return (
    <div className=''>

 {/* Header started */}




{/* Menu holder */}
  <div className="flex fixed   w-full  z-50  items-center justify-around bg-gradient-to-r from-fuchsia-700 via-red-400  to-pink-500">
   
    <ul className="flex  text-white uppercase justify-around items-center gap-9 ">
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

<div className="items-center  flex">
    <form>   
    <label for="default-search" class="mb-2 text-sm font-medium sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search... " required />
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
   
  </form>
</div>

{/* shopping cart icon*/ }


{console.log('test: ' + totalCartItems)}
<div className='relative  text-purple-800 rounded-full font-bold hover:bg-purple-800 hover:text-white p-2 duration-500 cursor-pointer bg-white'>
<Link to="/cart">
        <ShoppingCart size={32}  />
 </Link>
 {totalCartItems>0 ?  <div className='bg-red-700 text-white rounded-full w-fit p-1 text-xs absolute top-0 right-0'  >
 {totalCartItems}
 </div> :  <div > </div>}

 </div>
  </div>
      {/* Logo holder*/}
<div className='items-center pt-16'> 
<img src={logo}  alt="Logo" className="h-24 mx-auto" />
</div>

      {/* very top contact bar */}
      <div className= ' bg-purple-900 text-xs text-white space-x-4 flex p-3'>
        <p>Get Help</p>
          <p> Call 0719604053</p>
          <p> Messenger</p>
          <p> Whatsapp</p>
    </div>


 
  {/* Header End */}

    </div>
  )
}

