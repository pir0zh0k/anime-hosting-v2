import { useSchedule } from '../../../hooks/useSchedule';
import { useUpdates } from '../../../hooks/useUpdates';
import { Slider } from '../../components/Slider/Slider';
import { TitlesSchedule } from '../../components/TitlesSchedule/TitlesSchedule';

export const Home = () => {
  const { data: updates, isLoading, error } = useUpdates({ limit: 10 });
  const { data: schedule } = useSchedule();

  return (
    <div>
      {updates && <Slider animeList={updates?.list} />}
      {schedule && <TitlesSchedule schedule={schedule} />}
    </div>
  );
};
