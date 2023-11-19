import Header from './components/Header/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Categories from './components/Categories/Categories';
import ShowFullItem from './components/ShowFullItem/ShowFullItem';
import ListGoods from './components/ListGoods/ListGoods';

function App() {
  const [orders, setOrders] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const addToOrder = item => {
    let isInArray = false;
    orders.forEach(el => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) setOrders(prevState => [...prevState, item]);
  };
  const deleteOrder = id => {
    setOrders(prevState => orders.filter(order => order.id !== id));
  };

  const onShowItem = item => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      <Header onDelete={deleteOrder} orders={orders} />
      <Categories />
      <ListGoods onShowItem={onShowItem} onAdd={addToOrder} />
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
