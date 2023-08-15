import React from 'react';
import { motion , AnimatePresence } from 'framer-motion';

export const Welcome = (props) => {
  const {welcomeText} = props;
    return (
    <div className='h-72 md:h-40 py-10 px-8 text-lg bg-purple-600 text-white text-center'>
      <AnimatePresence mode='wait'>
      <motion.div  key={welcomeText}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
        <h1>{welcomeText}</h1>
        </motion.div>
        </AnimatePresence>
    </div>
  )
}

