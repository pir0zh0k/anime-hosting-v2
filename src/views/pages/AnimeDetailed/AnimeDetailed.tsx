import { useParams } from 'react-router-dom';
import { useTitle } from '../../../hooks/useTitle';
import { AnimePlayer, Loader } from '../../components';
import { useState } from 'react';

export const AnimeDetailed = () => {
  const { title_code } = useParams();

  const [episode, setEpisode] = useState<string>('1');

  const { data: title, isLoading } = useTitle({ code: title_code });

  const updateEpisode = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEpisode(e.target.value);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="py-5">
      <div className="flex flex-col md:flex-row md:items-start ">
        <img
          className="md:mr-5"
          src={`https://static-libria.weekstorm.one${title?.posters.original.url}`}
          alt=""
        />
        <div>
          <h1 className="text-3xl md:text-2xl font-bold mt-5 md:mt-0">
            {title?.names.ru}
          </h1>
          <div className="border-t border-b border-slate-500 my-3 py-5">
            <div className="flex items-center">
              <span className="mr-2">Жанры:</span>
              <div className="flex items-center flex-wrap">
                {title?.genres.map(genre => (
                  <span
                    key={genre}
                    className="px-2 py-2 bg-sky-500/70 mr-2 mt-2 rounded-xl"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <span>Тип: {title?.type.full_string}</span>
            </div>
          </div>
          <p>{title?.description}</p>
        </div>
      </div>
      <AnimePlayer
        episode={episode}
        episodes={title?.player.list}
        onChangeEpisode={updateEpisode}
      />
    </div>
  );
};
