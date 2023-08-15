
import './App.css';
import styles from "./index.css"
import { Helmet } from 'react-helmet'




import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/navbar';
import {Cart} from './pages/cart/cart';
import { Shop} from './pages/shop/shop';
import { About } from './pages/about/about';
import { ShopContextProvider } from './context/shop-context';
import {GridItemsAd} from './components/grid-items-ad';
import {Footer} from './components/footer';
import { Welcome} from './components/welcome';





function App() {



  return (
    
      <div>
      
      <Helmet>
        <title>Lemamar</title>
      </Helmet>

    <ShopContextProvider>
    <Router>
          <Navbar />
      
        
      <Routes>
      
          <Route path="/" element={<Shop />}/>
          <Route path="/cart"  element={<Cart />}/>
          <Route path="/about" element={<About />}/>

      </Routes>
      <GridItemsAd />
      <Footer />
    </Router>
    </ShopContextProvider>

  



{/* image with few products holder start*/}

{/*  image with few products holder end*/}
    </div>
  );
}

export default App;
