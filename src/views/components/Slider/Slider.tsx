import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IntrinsicAttributes } from '../../../interfaces/animeList.interface';

export const Slider = ({ animeList }: IntrinsicAttributes) => {
  return (
    <Swiper slidesPerView={3} loop>
      {animeList.map(title => (
        <SwiperSlide key={title.id}>
          <img
            src={`https://static-libria.weekstorm.one/${title.posters.medium.url}`}
            alt=""
            className="w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
