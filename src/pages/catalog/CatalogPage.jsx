import { useEffect, useState } from 'react';
import Categories from '../../components/Categories/Categories';
import ShowFullItem from '../../components/ShowFullItem/ShowFullItem';
import ListGoods from '../../components/ListGoods/ListGoods';
import getGoods from 'components/api';
import style from './CatalogPage.module.css';

export default function CatalogPage({ onAdd }) {
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});
  const [goods, setGoods] = useState([]);
  const [curentGoods, setCurentGoods] = useState([]);
  // const [sortGoods, setSortGoods] = useState([]);

  const onShowItem = item => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  const chooseCategory = category => {
    if (category === 'all') {
      setCurentGoods(goods);
      return;
    }
    setCurentGoods(goods.filter(el => el.category === category));
  };
  const sortIncPrice = () => {
    if (curentGoods.length > 0) {
      setCurentGoods([...curentGoods].sort((a, b) => a.price - b.price));
    } else {
      setCurentGoods([...goods].sort((a, b) => a.price - b.price));
    }
  };

  const sortDecrPrice = () => {
    if (curentGoods.length > 0) {
      setCurentGoods([...curentGoods].sort((a, b) => b.price - a.price));
    } else {
      setCurentGoods([...goods].sort((a, b) => b.price - a.price));
    }
  };

  const sortRating = () => {
    if (curentGoods.length > 0) {
      setCurentGoods(
        [...curentGoods].sort((a, b) => b.rating.rate - a.rating.rate)
      );
    } else {
      setCurentGoods([...goods].sort((a, b) => b.rating.rate - a.rating.rate));
    }
  };
  useEffect(() => {
    getGoods()
      .then(data => {
        setGoods(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Categories chooseCategory={chooseCategory} />
      <div className={style.sort}>
        сортувати: &#8659;
        <ul className={style.ul}>
          <li onClick={() => sortRating(curentGoods)} className={style.li}>
            по рейтингу
          </li>
          <li onClick={() => sortIncPrice(curentGoods)} className={style.li}>
            від дешевих до дорогих
          </li>
          <li onClick={() => sortDecrPrice(curentGoods)} className={style.li}>
            від дорогих до дешевих
          </li>
        </ul>
      </div>
      {curentGoods.length > 0 ? (
        <ListGoods goods={curentGoods} onShowItem={onShowItem} onAdd={onAdd} />
      ) : (
        <ListGoods goods={goods} onShowItem={onShowItem} onAdd={onAdd} />
      )}
      {showFullItem && (
        <ShowFullItem onShowItem={onShowItem} onAdd={onAdd} item={fullItem} />
      )}
    </>
  );
}
