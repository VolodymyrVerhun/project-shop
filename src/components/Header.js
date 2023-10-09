import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Товарів немає</h2>
    </div>
  );
};

export default function Header({ orders, onDelete }) {
  let [cartOpen, setCartOpen] = useState(false);
  const showOrders = (orders) => {
    let suma = 0;
    orders.forEach((element) => (suma += Number.parseFloat(element.price)));
    return (
      <div>
        {orders.map((el) => (
          <Order onDelete={onDelete} key={el.id} item={el} />
        ))}
        <p className="summa"> Cума: {suma}$ </p>
      </div>
    );
  };

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Кабінет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && "active"}`}
        />
        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? showOrders(orders) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
// {orders.map((el) => (
//   <Order key={el.id} item={el} />
// ))}
