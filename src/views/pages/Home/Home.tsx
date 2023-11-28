import { useSchedule } from '../../../hooks/useSchedule';
import { useUpdates } from '../../../hooks/useUpdates';
import { Slider } from '../../components/';
import { TitlesSchedule } from '../../components/';

export const Home = () => {
  const { data: updates, isLoading, error } = useUpdates({ limit: 10 });
  const { data: schedule } = useSchedule();

  return (
    <div className="bg-slate-900">
      {updates && <Slider animeList={updates?.list} />}
      {schedule && <TitlesSchedule schedule={schedule} />}
    </div>
  );
};
