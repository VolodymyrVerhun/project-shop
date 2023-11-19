import style from './Item.module.css';

export default function Item({ item, onAdd, onShowItem }) {
  // const [categories, setCategories] = useState([]);
  //   if (category === 'all') {
  //     setCategories([...categories]);
  //   } else {
  //     const filteredItems = categories.filter(el => el.category === category);
  //     setCategories(filteredItems);
  //   }
  // };

  // useEffect(() => {
  //   getGoods()
  //     .then(data => {
  //       setCategories(data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div className={style.item}>
      <img src={item.image} alt="img" onClick={() => onShowItem(item)} />
      <h2>{item.tittle}</h2>
      <p>{item.description}</p>
      <b>{item.price} $</b>
      <button onClick={() => onAdd(item)} className={style.add_to_cart}>
        +
      </button>
    </div>
  );
}
