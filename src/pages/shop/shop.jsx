import React, { useState } from 'react';
import products from '../../productImage';
import { Cover } from '../../components/cover';
import { PRODUCTS } from '../../products';
import { Product } from './product';
import {motion ,AnimatePresence  } from 'framer-motion';

export const Shop = () => {
  const [chosenCategory, setChosenCategory] = useState('all');

  const [all_button, setAllButton] = useState('bg-purple-700');
  const [skin_button, setskin_button] = useState('bg-fuchsia-600');
  const [tools_button, settools_button] = useState('bg-fuchsia-600');
  const [body_button, setbody_button] = useState('bg-fuchsia-600');

  const defaultButtonSize = () => {
    setskin_button('bg-fuchsia-600');
    setbody_button('bg-fuchsia-600');
    setAllButton('bg-fuchsia-600');
    settools_button('bg-fuchsia-600');

  };

  const skin = () => {
    setChosenCategory('skin');
    defaultButtonSize();
    setskin_button('bg-purple-700');
  };

  const body = () => {
    setChosenCategory('body');
    defaultButtonSize();
    setbody_button('bg-purple-700');
  };

  const tool = () => {
    setChosenCategory('tools');
    defaultButtonSize();
    settools_button('bg-purple-700');
  };

  const all = () => {
    setChosenCategory('all');
    defaultButtonSize();
    setAllButton('bg-purple-700');
  };

  return (
    <div className=''>
      <Cover />

      <div className='flex justify-center'>
        <div>
          <h1 className='hidden md:block p-5 text-4xl text-center'>Shop</h1>

          <div className=' space-x-3 md:space-x-7 mx-auto py-9'>
            <button
              onClick={() => all()}
              className={`${all_button} hover:scale-110 hover:shadow-2xl text-white px-1 md:px-4 rounded`}
            >
              All
            </button>
            <button
              onClick={() => skin()}
              className={`${skin_button} hover:scale-110 hover:shadow-2xl text-white px-4 rounded`}
            >
              Skin Products
            </button>
            <button
              onClick={() => body()}
              className={`${body_button} hover:scale-110 hover:shadow-2xl text-white px-4 rounded`}
            >
              Body Products
            </button>
            <button
              onClick={() => tool()}
              className={`${tools_button} hover:scale-110 hover:shadow-2xl text-white px-4 rounded`}
            >
              Tools
            </button>
          </div>
        </div>
      </div>


      <div className='grid grid-cols-3 lg:grid-cols-5 p-6 gap-x-8 gap-y-4'>
    <AnimatePresence>
      {PRODUCTS.map((product) =>
        product.category === chosenCategory || chosenCategory === 'all' ? (
          <motion.div
            key={product.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='transition-opacity'
            whileHover={{ scale: 1.1 }}
          >
            <Product data={product} />
          </motion.div>
        ) : null
      )}
    </AnimatePresence>
  </div>


    </div>
  );
};