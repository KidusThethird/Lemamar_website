import React from 'react';

import CoverImage1 from '../assets/cover-1.jpg';
import CoverImage2 from '../assets/cover-2.png';
import CoverImage3 from '../assets/cover-3.png';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


export function Cover() {

const [cover, setCover] = useState(CoverImage1);

const coverHolder = [CoverImage3, CoverImage2, CoverImage1];
let index = 0;


useEffect(() => {
 
  const interval = setInterval(() => {
  
    if(index==0){
      index=1;
      setCover(coverHolder[1]);
     
    }
    else if(index==1){
      index=2;
      setCover(coverHolder[2]);
     
    }
    else if(index==2){
      index=0;
      setCover(coverHolder[0]);
     
    }
  }, 7000);

 
  return () => {
    clearInterval(interval);
  };
}, []); 



  return (
    <div>
          {/* COver image Holder start */}

<motion.div  className='sticky top-0'
            key={cover}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} >
  <img className='shadow-2xl' src={cover} alt="" />
</motion.div>

  {/* Cover image Holder End */}
    
    </div>
  )
}

