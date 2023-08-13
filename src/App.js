
import './App.css';
import styles from "./index.css"
import { Helmet } from 'react-helmet'




import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Navbar} from './components/navbar';
import {Cart} from './pages/cart/cart';
import { Shop} from './pages/shop/shop';
import { ShopContextProvider } from './context/shop-context';
import {GridItemsAd} from './components/grid-items-ad';
import {Footer} from './components/footer';





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
