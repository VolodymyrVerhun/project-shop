import React from 'react';
import style from './ShowFullItem.module.scss';
export default function ShowFullItem({ item, onShowItem, onAdd }) {
  return (
    <div className={style.full_item}>
      <div>
        <img src={item.image} alt="img" onClick={() => onShowItem(item)} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <b>{item.price} $</b>
        <button onClick={() => onAdd(item)} className={style.add_to_cart}>
          купити
        </button>
        <button onClick={() => onShowItem(item)} className={style.btn_x}>
          x
        </button>
      </div>
    </div>
  );
}
