import { useUpdates } from '../../../hooks/useUpdates';
import { Slider } from '../../components/Slider/Slider';

export const Home = () => {
  const { data, isLoading, error } = useUpdates({ limit: 10 });

  return <div>{data && <Slider animeList={data?.list} />}</div>;
};
