import React from 'react'
import {X} from 'phosphor-react';

export const NavDrawer = (props) => {
  const { setNavbarDrawerStatus} = props;

  function closeNavbar () {
    setNavbarDrawerStatus(false);
  }

  
  return (
    <div className='flex flex-col shadow-2xl text-white w-4/6 gap-y-4 py-4 pl-5 bg-purple-800 rounded-br-3xl'>
    
        <div className=' w-full flex '>
          <div onClick={()=>closeNavbar()} className='justify-end ml-auto pr-5 '>
            <X size={24} />
            </div>
        </div>

        <div className='justify-center'>Logo</div>
        <div className=''>
            <img src="" alt="" />
            HOME
        </div>
        <a href="">New Arrivals</a>
        <a href="">Makeups</a>
        <a href="">Skin Care</a>
        <a href="">Hair</a>
        <a href="">Bath Body</a>
        <a href="">Accessories</a>
    </div>
  )
}
