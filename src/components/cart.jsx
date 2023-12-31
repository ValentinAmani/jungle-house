import { useState, useEffect } from "react";
import "../styles/cart.css";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  useEffect(() => {
    document.title = `JH: ${total}€ d'achats`;
  }, [total]);

  return isOpen ? (
    <div className="jh-cart">
      <button
        className="jh-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ x {amount} &nbsp;&nbsp;
              </div>
            ))}
          </ul>
          <h3>Total : {total}€</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="jh-cart-closed">
      <button className="jh-cart-toggle-button" onClick={() => setIsOpen(true)}>
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
