import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SliderUpdates } from '../../../helpers/interfaces';
import styles from './SwiperSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';

const SwiperSlider = ({ updatesList }: SliderUpdates) => {
  return (
    <div className={styles.slider__container + ' container'}>
      <h1>Свежие обновления:</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation]}
        navigation
        loop
      >
        {updatesList &&
          updatesList.map(item => (
            <SwiperSlide key={item.id}>
              <img
                src={`https://static-libria.weekstorm.one/${item.posters.small.url}`}
                alt=""
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;
