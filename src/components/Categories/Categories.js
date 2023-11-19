import React, { useEffect, useState } from 'react';
import getGoods, { getCategory } from '../api';
import style from './Categories.module.css';
export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [curentCategories, setCurentCategories] = useState([]);

  const chooseCategory = category => {
    if (category === 'all') {
      setCategories([...categories]);
    } else {
      const filteredItems = categories.filter(el => el.category === category);
      setCategories(filteredItems);
    }
  };

  useEffect(() => {
    getGoods()
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    getCategory()
      .then(data => {
        setCurentCategories(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className={style.categories}>
      {' '}
      <div id="all">All</div>
      {curentCategories.map(el => (
        <div
          onClick={() => {
            chooseCategory(el);
          }}
          key={el}
          id={el}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
