import React from 'react';
import style from './ShowFullItem.module.css';
export default function ShowFullItem({ item, onShowItem, onAdd }) {
  return (
    <div className={style.full_item}>
      <div>
        <img src={item.image} alt="img" onClick={() => onShowItem(item)} />
        <h2>{item.tittle}</h2>
        <p>{item.description}</p>
        <b>{item.price} $</b>
        <button onClick={() => onAdd(item)} className={style.add_to_cart}>
          +
        </button>
      </div>
    </div>
  );
}
