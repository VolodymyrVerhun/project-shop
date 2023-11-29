import React from 'react';
import { FaTrash } from 'react-icons/fa';
import style from './Order.module.scss';
export default function Order({ item, onDelete }) {
  return (
    <div className={style.item}>
      <img src={item.image} alt="img" />
      <h2>{item.title}</h2>
      <b>{item.price} $</b>
      <FaTrash
        onClick={() => onDelete(item.id)}
        className={style.delete_item}
      />
    </div>
  );
}
