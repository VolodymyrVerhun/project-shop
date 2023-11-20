import Item from '../Item/Item';

import style from './ListGoods.module.css';

export default function ListGoods({ goods, onAdd, onShowItem }) {
  return (
    <main className={style.main}>
      {goods.map(item => (
        <Item onShowItem={onShowItem} key={item.id} item={item} onAdd={onAdd} />
      ))}
    </main>
  );
}
