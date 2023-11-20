import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {
  ScreenSizeInterface,
  SliderUpdates,
} from '../../../helpers/interfaces';
import styles from './SwiperSlider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const SwiperSlider = ({ updatesList }: SliderUpdates) => {
  const [screenSize, setScreenSize] = useState<ScreenSizeInterface>({
    clientHeight: 0,
    clientWidth: 0,
  });
  const ref = useRef<any>();

  const resizeHandler = () => {
    const { clientHeight, clientWidth }: any = ref.current;
    setScreenSize({ clientHeight, clientWidth });
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);
    resizeHandler();
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <div ref={ref} className={styles.slider_wrapper}>
      <div className={styles.slider__container + ' container'}>
        <h1>Свежие обновления:</h1>
        <Swiper
          spaceBetween={screenSize.clientWidth >= 768 ? 50 : 30}
          slidesPerView={screenSize.clientWidth >= 768 ? 3 : 2}
          modules={[Navigation]}
          navigation={screenSize.clientWidth >= 425 ? true : false}
          loop
        >
          {updatesList &&
            updatesList.map(item => (
              <SwiperSlide key={item.id}>
                <Link className={styles.slide_link} to={`/${item.code}/1`}>
                  <img
                    src={`https://static-libria.weekstorm.one/${item.posters.small.url}`}
                    alt=""
                  />
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSlider;
