import SwiperSlider from '../../components/SwiperSlider/SwiperSlider';

import { useGetChangesQuery } from '../../../store/';

const Home = () => {
  const { data, isLoading } = useGetChangesQuery({
    items_per_page: 10,
    page: 1,
  });
  console.log(data);

  if (isLoading) return <h1>Is loading</h1>;

  return (
    <div>
      <SwiperSlider updatesList={data && data.list} />
    </div>
  );
};

export default Home;
