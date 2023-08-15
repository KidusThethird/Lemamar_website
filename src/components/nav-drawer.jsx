import React from 'react'
import {X , House} from 'phosphor-react';
import {Link} from 'react-router-dom';
import {ShopContext} from '../context/shop-context';
import { useContext } from 'react';
//import Logo from '../assets/logo__2.png';



export const NavDrawer = (props) => {
  const { setNavbarDrawerStatus} = props;

  const { totalCartItems} = useContext (ShopContext);

  function closeNavbar () {
    setNavbarDrawerStatus(false);
  }

  
  return (
    <div className='flex flex-col shadow-2xl text-white w-4/6 md:w-1/2 gap-y-4 py-4 pl-5 bg-purple-800 rounded-br-3xl'>
    
        <div className=' w-full flex '>
          <div onClick={()=>closeNavbar()} className='justify-end ml-auto pr-5 cursor-pointer'>
            <X size={24} />
            </div>
        </div>

        <div onClick={()=>closeNavbar()} className='justify- w-full'></div>
        <div onClick={()=>closeNavbar()} className='flex flex-col '>
            <img className='' src={''} alt="" />
            <div className='mb-10 shadow-2xl'>
            <h1 className='text-4xl font-bold font-mono '>LEMAMAR</h1>
            <h1 className='pl-12 italic'>Beauty Bar</h1>
            </div>
            <Link to="/">
            <div className='flex gap-2 cursor-pointer items-center' >      
              <House size={20} />
             Home
             </div>

            </Link>
            
        </div>
        <a href="" onClick={()=>closeNavbar() } className='cursor-pointer hover:text-white '>New Arrivals</a>
        <a href=""onClick={()=>closeNavbar()} className='cursor-pointer'>Makeups</a>
        <a href="" onClick={()=>closeNavbar()}className='cursor-pointer'>Skin Care</a>
        <a href="" onClick={()=>closeNavbar()}className='cursor-pointer'>Hair</a>
        <a href=""onClick={()=>closeNavbar()} className='cursor-pointer'>Bath Body</a>
        <a href=""onClick={()=>closeNavbar()} className='cursor-pointer'>Accessories</a>
        <a href=""onClick={()=>closeNavbar()} className='cursor-pointer mt-5 pt-2 w-1/4 border-t-2 border-dotted'>Cart
        {
          totalCartItems>0 ?  " (" + totalCartItems + ")" : ''
        } </a>
    </div>
  )
}
