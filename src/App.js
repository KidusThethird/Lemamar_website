
import './App.css';
import styles from "./index.css"
import logo from './assets/logo (2).png';
import cover from './assets/cover 2.jpg';
import products from './productImage';

function App() {
  return (
    <>
    {/* Header started */}

    {/* very top contact bar */}
    <div className='bg-purple-900 text-xs text-white space-x-4 flex p-3'>
        <p>Get Help</p>
          <p> Call 0719604053</p>
          <p> Messenger</p>
          <p> Whatsapp</p>
    </div>

    {/* Logo holder*/}
<div className='items-center '> 
<img src={logo}  alt="Logo" className="h-24 mx-auto" />
</div>

{/* Menu holder */}
  <div className="flex items-center justify-around bg-gradient-to-r from-fuchsia-700 via-red-400  to-pink-500">
   
    <ul className="flex text-white uppercase justify-around items-center gap-9 ">
      <li>
        <a href=''>New Arrivals</a>
      </li>
      <li>
        <a  href=''>Makeup</a>
      </li>
      <li>
        <a  href=''>Skincare</a>
      </li>
      <li>
        
        <a  href=''>Hair</a>
      </li>
      <li>
        <a  href=''>Bath&Body</a>
      </li>
      <li>
        <a  href=''>Accessories</a>
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
  </div>
  {/* Header End */}
  

  {/* COver image Holder start */}

<div>
  <img src={cover} alt="" />
</div>

  {/* Cover image Holder End */}
    


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
    </>
  );
}

export default App;
