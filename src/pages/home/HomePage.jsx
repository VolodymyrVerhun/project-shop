import React, { useEffect, useState } from 'react';
import style from './HomePage.module.css';
import getGoods from 'components/api';
import Item from 'components/Item/Item';
import ShowFullItem from 'components/ShowFullItem/ShowFullItem';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default function HomePage({ onAdd }) {
  const [bestGoods, setBestGoods] = useState([]);
  const [showFullItem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const onShowItem = item => {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  };
  useEffect(() => {
    getGoods()
      .then(data => {
        setBestGoods(data.filter(el => el.rating.rate > 4.1));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div className={style.presentation}></div>
      <div className={style.title}>Хіт продаж</div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {bestGoods.map(item => (
          <SwiperSlide className={style.swiper} key={item.id}>
            <Item onShowItem={onShowItem} item={item} onAdd={onAdd} />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
      {showFullItem && (
        <ShowFullItem onShowItem={onShowItem} onAdd={onAdd} item={fullItem} />
      )}
    </div>
  );
}
