import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { IntrinsicAttributes } from '../../../interfaces/updates.interface';

export const Slider = ({ animeList }: IntrinsicAttributes) => {
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
          <SwiperSlide
            key={title.id}
            className="border-2 border-slate-500 hover:border-red-500"
          >
            <img
              src={`https://static-libria.weekstorm.one/${title.posters.medium.url}`}
              alt=""
              className="w-full h-full"
            />
            <div className="absolute p-5 w-full h-full top-0 left-0 bg-slate-800/80 transition-opacity opacity-0 hover:opacity-100">
              <h2 className="text-xl mb-5 font-bold">{title.names.ru}</h2>
              <p className="m-0 [-webkit-line-clamp:6] [display:-webkit-box] [-webkit-box-orient:vertical] overflow-hidden">
                {title.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
