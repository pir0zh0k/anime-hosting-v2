import { AnimeCard } from '..';
import { Anime } from '../../../interfaces/updates.interface';
import { ScheduleType } from '../../../types/schedule.type';

interface ScheduleProps {
  schedule: ScheduleType;
}

export const TitlesSchedule = ({ schedule }: ScheduleProps) => {
  console.log(schedule);

  return (
    <div>
      <h1 className="text-center text-2xl py-2">Расписание выхода серий</h1>
      <div>
        <div>
          <h1 className="schedule-titles">Понедельник</h1>
          <div className="anime-grid-container">
            {schedule[0].list.map((title: Anime) => (
              <AnimeCard title={title} key={title.id} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="schedule-titles">Вторник</h1>
          <div className="anime-grid-container">
            {schedule[1].list.map((title: Anime) => (
              <AnimeCard title={title} key={title.id} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="schedule-titles">Среда</h1>
          <div className="anime-grid-container">
            {schedule[2].list.map((title: Anime) => (
              <AnimeCard title={title} key={title.id} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="schedule-titles">Четверг</h1>
          <div className="anime-grid-container">
            {schedule[3].list.map((title: Anime) => (
              <AnimeCard title={title} key={title.id} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="schedule-titles">Пятница</h1>
          <div className="anime-grid-container">
            {schedule[4].list.map((title: Anime) => (
              <AnimeCard title={title} key={title.id} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="schedule-titles">Суббота</h1>
          <div className="anime-grid-container">
            {schedule[5].list.map((title: Anime) => (
              <AnimeCard title={title} key={title.id} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="schedule-titles">Воскресенье</h1>
          <div className="anime-grid-container">
            {schedule[6].list.map((title: Anime) => (
              <AnimeCard title={title} key={title.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
