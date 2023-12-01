import React from 'react';
import { FaTrash } from 'react-icons/fa';
import style from './Order.module.scss';
export default function Order({
  item,
  onDelete,
  handleChangeQuantity,
  quantity,
}) {
  return (
    <div className={style.item}>
      <img src={item.image} alt="img" />
      <h2>{item.title}</h2>
      <b>{item.price * quantity} $</b>
      <input
        onChange={handleChangeQuantity}
        type="number"
        placeholder="1"
        min="1"
        value={quantity}
      ></input>
      <FaTrash
        onClick={() => onDelete(item.id)}
        className={style.delete_item}
      />
    </div>
  );
}
