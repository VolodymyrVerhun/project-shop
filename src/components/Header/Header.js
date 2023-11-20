import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Order from '../Order/Order';
import style from './Header.module.css';

const showNothing = () => {
  return (
    <div className={style.empty}>
      <h2>Товарів немає</h2>
    </div>
  );
};

export default function Header({ orders, onDelete }) {
  let [cartOpen, setCartOpen] = useState(false);
  const showOrders = orders => {
    let suma = 0;
    orders.forEach(element => (suma += Number.parseFloat(element.price)));
    return (
      <div>
        {orders.map(el => (
          <Order onDelete={onDelete} key={el.id} item={el} />
        ))}
        <p className={style.summa}> Cума: {suma}$ </p>
      </div>
    );
  };

  return (
    <header>
      <div>
        <span className={style.logo}>House Staff</span>
        <ul className={style.nav}>
          <li>Про нас</li>
          <li>Контакти</li>
          <li>Кабінет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`${style.shop_cart_button} ${cartOpen && style.active}`}
        />
        {cartOpen && (
          <div className={style.shop_cart}>
            {orders.length > 0 ? showOrders(orders) : showNothing()}
          </div>
        )}
      </div>
      <div className={style.presentation}></div>
    </header>
  );
}
