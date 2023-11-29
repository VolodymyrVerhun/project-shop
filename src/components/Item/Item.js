import style from './Item.module.scss';

export default function Item({ item, onAdd, onShowItem }) {
  return (
    <div className={style.item}>
      <img src={item.image} alt="img" onClick={() => onShowItem(item)} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <b>{item.price} $</b>
      <button onClick={() => onAdd(item)} className={style.add_to_cart}>
        придбати
      </button>
    </div>
  );
}
