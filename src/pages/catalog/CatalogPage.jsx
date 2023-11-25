import { useEffect, useState } from 'react';
import Categories from '../../components/Categories/Categories';
import ShowFullItem from '../../components/ShowFullItem/ShowFullItem';
import ListGoods from '../../components/ListGoods/ListGoods';
import getGoods from 'components/api';

export default function CatalogPage({ onAdd }) {
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});
  const [goods, setGoods] = useState([]);
  const [curentGoods, setCurentGoods] = useState([]);

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
