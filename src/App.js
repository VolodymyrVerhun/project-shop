import Header from './components/Header/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Categories from './components/Categories/Categories';
import ShowFullItem from './components/ShowFullItem/ShowFullItem';
import ListGoods from './components/ListGoods/ListGoods';
import getGoods from 'components/api';

function App() {
  const [orders, setOrders] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});
  const [goods, setGoods] = useState([]);
  const [curentGoods, setCurentGoods] = useState([]);
  const addToOrder = item => {
    let isInArray = false;
    orders.forEach(el => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) setOrders(prevState => [...prevState, item]);
  };
  const deleteOrder = id => {
    setOrders(orders.filter(order => order.id !== id));
  };

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
  console.log(curentGoods);
  return (
    <div className="wrapper">
      <Header onDelete={deleteOrder} orders={orders} />
      <Categories chooseCategory={chooseCategory} />
      <ListGoods
        goods={curentGoods}
        onShowItem={onShowItem}
        onAdd={addToOrder}
      />
      {showFullItem && (
        <ShowFullItem
          onShowItem={onShowItem}
          onAdd={addToOrder}
          item={fullItem}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
