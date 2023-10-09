import React from 'react';

export default function Item({ item, onAdd, onShowItem }) {
  return (
    <div className="item">
      <img
        src={'./img/' + item.img}
        alt="img"
        onClick={() => onShowItem(item)}
      />
      <h2>{item.tittle}</h2>
      <p>{item.description}</p>
      <b>{item.price} $</b>
      <button onClick={() => onAdd(item)} className="add-to-cart">
        +
      </button>
    </div>
  );
}
