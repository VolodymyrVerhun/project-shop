import React from 'react';

export default function ShowFullItem({ item, onShowItem, onAdd }) {
  return (
    <div className="full-item">
      <div>
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
    </div>
  );
}
