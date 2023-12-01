import Header from './components/Header/Header';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';

import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/home/HomePage';
import CatalogPage from 'pages/catalog/CatalogPage';

function App() {
  const [orders, setOrders] = useState([]);
  // const [cartOpen, setCartOpen] = useState(false);
  // const [quantity, setQuantity] = useState({});

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
  // const handleChangeQuantity = (e, itemId) => {
  //   const value = e.target.value;
  //   setQuantity(prev => ({ ...prev, [itemId]: value }));
  // };
  // const showOrders = orders => {
  //   let suma = 0;
  //   orders.forEach(element => {
  //     const quantityValue = quantity[element.id] || 1;
  //     let totalPrice = element.price * quantityValue;
  //     suma += Number.parseFloat(totalPrice);
  //   });
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
          {/* <Route path="/myCabinet" element={<MyCabinetPage />} /> */}
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
