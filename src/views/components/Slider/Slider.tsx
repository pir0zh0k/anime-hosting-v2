import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Anime } from '../../../interfaces/updates.interface';
import { AnimeCard } from '..';

interface SliderProps {
  animeList: Anime[];
}

export const Slider = ({ animeList }: SliderProps) => {
  return (
    <div className="py-5">
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        loop
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {animeList.map(title => (
          <SwiperSlide key={title.id}>
            <AnimeCard title={title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
