import React, { useEffect, useState } from 'react';
import { getCategory } from '../api';
import style from './Categories.module.scss';
export default function Categories({ chooseCategory }) {
  const [curentCategories, setCurentCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState('all');

  useEffect(() => {
    getCategory()
      .then(data => {
        setCurentCategories(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleCategoryClick = id => {
    chooseCategory(id);
    setSelectedCategories(id);
  };

  return (
    <div className={style.categories}>
      <div
        id="all"
        onClick={() => handleCategoryClick('all')}
        className={selectedCategories === 'all' ? style.active : ''}
      >
        All
      </div>
      {curentCategories.map(el => (
        <div
          onClick={() => handleCategoryClick(el)}
          key={el}
          id={el}
          className={selectedCategories === el ? style.active : ''}
        >
          {el}
        </div>
      ))}
    </div>
  );
}
