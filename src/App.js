import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

function App() {
  const [items] = useState([
    {
      id: 1,
      tittle: "стіл",
      img: "table.jpeg",
      description: "Дивовижний стіл",
      category: "table",
      price: "25",
    },
    {
      id: 2,
      tittle: "стіл2",
      img: "table2.jpeg",
      description: "Дивовижний стіл",
      category: "table",
      price: "225",
    },
    {
      id: 3,
      tittle: "крісло",
      img: "chair.jpeg",
      description: "Дивовижне крісло",
      category: "chair",
      price: "15",
    },
    {
      id: 4,
      tittle: "крісло2",
      img: "chair (2).jpeg",
      description: "Дивовижне крісло",
      category: "chair",
      price: "85",
    },
    {
      id: 5,
      tittle: "шафа",
      img: "sofa.jpeg",
      description: "Дивовижна шафа",
      category: "sofa",
      price: "185",
    },
    {
      id: 6,
      tittle: "шафа2",
      img: "sofa2.jpeg",
      description: "Дивовижна шафа",
      category: "sofa",
      price: "785",
    },
    {
      id: 7,
      tittle: "диван",
      img: "wardrobe.jpeg",
      description: "Дивовижний диван",
      category: "wardrobe",
      price: "1785",
    },
    {
      id: 8,
      tittle: "диван2",
      img: "wardrobe2.jpeg",
      description: "Дивовижний диван",
      category: "wardrobe",
      price: "1585",
    },
  ]);
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState([
    {
      id: 1,
      tittle: "стіл",
      img: "table.jpeg",
      description: "Дивовижний стіл",
      category: "table",
      price: "25",
    },
    {
      id: 2,
      tittle: "стіл2",
      img: "table2.jpeg",
      description: "Дивовижний стіл",
      category: "table",
      price: "225",
    },
    {
      id: 3,
      tittle: "крісло",
      img: "chair.jpeg",
      description: "Дивовижне крісло",
      category: "chair",
      price: "15",
    },
    {
      id: 4,
      tittle: "крісло2",
      img: "chair (2).jpeg",
      description: "Дивовижне крісло",
      category: "chair",
      price: "85",
    },
    {
      id: 5,
      tittle: "шафа",
      img: "sofa.jpeg",
      description: "Дивовижна шафа",
      category: "sofa",
      price: "185",
    },
    {
      id: 6,
      tittle: "шафа2",
      img: "sofa2.jpeg",
      description: "Дивовижна шафа",
      category: "sofa",
      price: "785",
    },
    {
      id: 7,
      tittle: "диван",
      img: "wardrobe.jpeg",
      description: "Дивовижний диван",
      category: "wardrobe",
      price: "1785",
    },
    {
      id: 8,
      tittle: "диван2",
      img: "wardrobe2.jpeg",
      description: "Дивовижний диван",
      category: "wardrobe",
      price: "1585",
    },
  ]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) setOrders((prevState) => [...prevState, item]);
  };
  const deleteOrder = (id) => {
    setOrders((prevState) => orders.filter((order) => order.id !== id));
  };

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems([...items]);
    } else {
      const filteredItems = items.filter((el) => el.category === category);
      setCurrentItems(filteredItems);
    }
  };
  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };

  return (
    <div className="wrapper">
      <Header onDelete={deleteOrder} orders={orders} />
      <Categories chooseCategory={chooseCategory} />
      <Items
        onShowItem={onShowItem}
        currentItems={currentItems}
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
