import { useState, useEffect } from "react";
import Banner from "./banner";
import Cart from "./cart";
import Footer from "./footer";
import ShoppingList from "./shoppingList";
import logo from "../assets/logo.png";
import "../styles/layout.css";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Banner>
        <img src={logo} alt="Jungle House logo" className="jh-logo" />
        <h1 className="jh-title">Jungle House</h1>
      </Banner>
      <div className="jh-layout-inner">
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
