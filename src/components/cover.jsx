import React from 'react';

import CoverImage1 from '../assets/cover-1.jpg';
import CoverImage2 from '../assets/cover-2.png';
import CoverImage3 from '../assets/cover-3.png';
import { useState, useEffect } from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import {Welcome} from './welcome';


export function Cover() {


const WelcomeTxt1 = "Welcome to Lemamar Cosmetics, your ultimate destination for all things beauty and skincare. We are a premier cosmetics shop dedicated to providing high-quality products that enhance your natural beauty and empower your self-expression.";
const WelcomeTxt2 = "Indulge in the exquisite world of beauty at Lemamar Beauty Bar, where we believe that beauty is a form of art and self-care. Step into our luxurious sanctuary and let us guide you on a transformative journey to enhance your natural radiance.";
const WelcomeTxt3 = "Discover a carefully selected range of exclusive beauty brands and products that embody our commitment to quality and excellence. We emphasize cruelty-free and ethically sourced ingredients, ensuring that every item in our selection meets the highest standards.";


const [cover, setCover] = useState(CoverImage1);
const [welcomeText, setWelcomeText]= useState(WelcomeTxt1);

const coverHolder = [CoverImage3, CoverImage2, CoverImage1];
let index = 0;


useEffect(() => {
 
  const interval = setInterval(() => {
  
    if(index==0){
      index=1;
      setCover(coverHolder[1]);
      setWelcomeText(WelcomeTxt2);
     
    }
    else if(index==1){
      index=2;
      setCover(coverHolder[2]);
      setWelcomeText(WelcomeTxt3);
     
    }
    else if(index==2){
      index=0;
      setCover(coverHolder[0]);
      setWelcomeText(WelcomeTxt1);
     
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

  <AnimatePresence mode='wait'>
  <motion.div  
      key={welcomeText}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
   >
    <Welcome welcomeText={welcomeText}/>
    </motion.div>
    </AnimatePresence>
    </div>
  )
}

