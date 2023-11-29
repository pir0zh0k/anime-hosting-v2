import { useSchedule } from '../../../hooks/useSchedule';
import { useUpdates } from '../../../hooks/useUpdates';
import { Loader, Slider } from '../../components/';
import { TitlesSchedule } from '../../components/';

export const Home = () => {
  const { data: updates, isLoading } = useUpdates({ limit: 10 });
  const { data: schedule } = useSchedule();

  if (isLoading) return <Loader />;

  return (
    <div className="bg-slate-900">
      {updates && <Slider animeList={updates?.list} />}
      {schedule && <TitlesSchedule schedule={schedule} />}
    </div>
  );
};
