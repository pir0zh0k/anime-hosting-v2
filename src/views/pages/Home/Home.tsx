import React, { useEffect } from 'react';
import { useAnimeStore } from '../../../stores/animeStore';
import SwiperSlider from '../../components/SwiperSlider/SwiperSlider';

const Home = () => {
  const { animeList, getAnimeList } = useAnimeStore();

  useEffect(() => getAnimeList(), []);


  return (
    <div>
      <SwiperSlider updatesList={animeList} />
    </div>
  );
};

export default Home;
