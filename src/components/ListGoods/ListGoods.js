import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import getGoods from '../api';
import style from './ListGoods.module.css';
export default function ListGoods({ onAdd, onShowItem }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getGoods()
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      {categories.map(item => (
        <Item onShowItem={onShowItem} key={item.id} item={item} onAdd={onAdd} />
      ))}
    </main>
  );
}
