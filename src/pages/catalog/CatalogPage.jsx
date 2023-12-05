import { useEffect, useState } from 'react';
import Categories from '../../components/Categories/Categories';
import ShowFullItem from '../../components/ShowFullItem/ShowFullItem';
import ListGoods from '../../components/ListGoods/ListGoods';
import getGoods from 'components/api';
import style from './CatalogPage.module.scss';

export default function CatalogPage({ onAdd }) {
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});
  const [goods, setGoods] = useState([]);
  const [curentGoods, setCurentGoods] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
      <div onClick={() => setIsOpen(prev => !prev)} className={style.sort}>
        сортувати: &#8659;
      </div>
      {isOpen && (
        <ul onClick={() => setIsOpen(prev => !prev)} className={style.ul}>
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
      )}
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
