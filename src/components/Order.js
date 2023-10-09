import React from "react";
import { FaTrash } from "react-icons/fa";
export default function Order({ item, onDelete }) {
  return (
    <div className="item">
      <img src={"./img/" + item.img} alt="img" />
      <h2>{item.tittle}</h2>
      <b>{item.price} $</b>
      <FaTrash onClick={() => onDelete(item.id)} className="delete-item" />
    </div>
  );
}
