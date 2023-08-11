
import './App.css';
import styles from "./index.css"


import products from './productImage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/navbar';
import {Cart} from './pages/cart/cart';
import { Shop} from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';



function App() {
  return (
    <div >
    <ShopContextProvider>
    <Router>
          <Navbar />
      <Routes>
      
          <Route path="/" element={<Shop />}/>
          <Route path="/cart"  element={<Cart />}/>
      </Routes>
    </Router>
    </ShopContextProvider>





{/* image with few products holder start*/}
<section id="makeup_products">


<div className='makeup_section '>

<div className='grid grid-cols-2 gap-4 pt-48 pb-48'>
    <div></div>
    <div>
    <div class="grid grid-cols-2 gap-4">
  <div class=" bg-white p-4 ">
    <img className='w-48 mx-auto' src={products.p01} alt="" />
  </div>

  <div class="bg-white p-4">
    <img className='w-48 mx-auto' src={products.p02} alt="" />
  </div>

  <div class="bg-white p-4">
    <img className='w-48 mx-auto' src={products.p03} alt="" />
  </div>

  <div class="bg-white p-4">
    <img className='w-48 mx-auto' src={products.p04} alt="" />
  </div>
 
</div>
    </div>

</div>

</div>

</section>
{/*  image with few products holder end*/}
    </div>
  );
}

export default App;
