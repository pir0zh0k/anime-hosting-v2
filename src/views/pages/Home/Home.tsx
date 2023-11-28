import { useSchedule } from '../../../hooks/useSchedule';
import { useUpdates } from '../../../hooks/useUpdates';
import { Slider } from '../../components/Slider/Slider';

export const Home = () => {
  const { data: updates, isLoading, error } = useUpdates({ limit: 10 });
  const { data: schedule } = useSchedule();

  schedule && console.log(schedule[0]);

  return <div>{updates && <Slider animeList={updates?.list} />}</div>;
};
