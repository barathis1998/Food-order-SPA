
import './App.css';
import Header from './components/Layout/Header.js'
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
  const [isCartShown, setIsCartShow] = useState(false);

  const showCartHandler =()=>{
    setIsCartShow(true);
  }

  const hideCartHandler = ()=>{
    setIsCartShow(false);
  }
  return (
    <CartProvider>
      {isCartShown &&<Cart onHideCart = {hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
