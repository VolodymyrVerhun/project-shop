import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Order from '../Order/Order';
import style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { FcMindMap } from 'react-icons/fc';

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
        <p className={style.summa}> Cума: {suma.toFixed(2)}$ </p>
      </div>
    );
  };

  return (
    <header>
      <span className={style.logo}>
        <FcMindMap />
        <span className={style.logo_title}>
          every<b>thing</b> for <b>you</b>
        </span>
      </span>
      <div>
        <ul className={style.nav}>
          <FaShoppingCart
            onClick={() => setCartOpen((cartOpen = !cartOpen))}
            className={`${style.shop_cart_button} ${cartOpen && style.active}`}
          />
          {cartOpen && (
            <div className={style.shop_cart}>
              {orders.length > 0 ? showOrders(orders) : showNothing()}
            </div>
          )}
          <NavLink
            className={({ isActive }) => (isActive ? `${style.active}` : '')}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? `${style.active}` : '')}
            to="catalog"
          >
            Каталог
          </NavLink>
          {/* <NavLink
            className={({ isActive }) => (isActive ? `${style.active}` : '')}
            to="myCabinet"
          >
            Мій кабінет
          </NavLink> */}
        </ul>
      </div>
    </header>
  );
}
