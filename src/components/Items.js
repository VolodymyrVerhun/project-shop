import React from "react";
import Item from "./Item";

export default function Items({ currentItems, onAdd, onShowItem }) {
  return (
    <main>
      {currentItems.map((item) => (
        <Item onShowItem={onShowItem} key={item.id} item={item} onAdd={onAdd} />
      ))}
    </main>
  );
}
