import SwiperSlider from '../../components/SwiperSlider/SwiperSlider';

import { useGetChangesQuery } from '../../../store/';
import Preloader from '../../components/Preloader/Preloader';

const Home = () => {
  const { data, isLoading } = useGetChangesQuery({
    items_per_page: 10,
    page: 1,
  });

  if (isLoading) return <Preloader />;

  return (
    <div>
      <SwiperSlider updatesList={data && data.list} />
    </div>
  );
};

export default Home;
