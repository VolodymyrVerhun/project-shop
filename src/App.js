import Header from './components/Header/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import MyCabinetPage from 'pages/myCabinet/MyCabinetPage';
import HomePage from 'pages/home/HomePage';
import CatalogPage from 'pages/catalog/CatalogPage';

function App() {
  const [orders, setOrders] = useState([]);

  const addToOrder = item => {
    const isInArray = orders.some(el => el.id === item.id);

    if (!isInArray) {
      const newCountOrders = [...orders, item];
      setOrders(newCountOrders);
      localStorage.setItem('order', JSON.stringify(newCountOrders));
    }
  };
  const deleteOrder = id => {
    const newCountOrders = orders.filter(order => order.id !== id);
    setOrders(newCountOrders);
    localStorage.setItem('order', JSON.stringify(newCountOrders));
  };

  useEffect(() => {
    const saveOrders = localStorage.getItem('order');
    if (saveOrders) {
      setOrders(JSON.parse(saveOrders));
    }
  }, []);

  useEffect(() => {
    const saveOrders = localStorage.getItem('order');
    if (saveOrders) {
      setOrders(JSON.parse(saveOrders));
    }
  }, []);
  return (
    <div className="wrapper">
      <Header onDelete={deleteOrder} orders={orders} onAdd={addToOrder} />
      <div>
        <Routes>
          <Route path="" element={<HomePage onAdd={addToOrder} />} />
          <Route path="/catalog" element={<CatalogPage onAdd={addToOrder} />} />
          <Route path="/myCabinet" element={<MyCabinetPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
