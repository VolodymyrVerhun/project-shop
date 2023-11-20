import React, { useEffect, useState } from 'react';
import { getCategory } from '../api';
import style from './Categories.module.css';
export default function Categories({ chooseCategory }) {
  const [curentCategories, setCurentCategories] = useState([]);

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
      <div onClick={e => chooseCategory(e.target.id)} id="all">
        All
      </div>
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
