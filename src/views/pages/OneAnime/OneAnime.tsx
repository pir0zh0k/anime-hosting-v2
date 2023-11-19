import { Link, useParams } from 'react-router-dom';
import { useGetOneAnimeQuery } from '../../../store';
import styles from './OneAnime.module.scss';
import ReactPlayer from 'react-player';
import { PlayerList } from '../../../helpers/interfaces';
import Preloader from '../../components/Preloader/Preloader';

const OneAnime = () => {
  const { code, episode } = useParams();
  const { data, isLoading } = useGetOneAnimeQuery(code);

  if (isLoading) {
    return <Preloader />;
  }

  console.log(data);

  return (
    <div className={`container ${styles.player_container}`}>
      <h1>{data.names.ru}</h1>
      <div className={styles.info}>
        <img
          src={`https://static-libria.weekstorm.one${data.posters.original.url}`}
          alt=""
        />
        <div className={styles.info_text}>
          <p>{data.description}</p>
          {data.type.full_string ? (
            <p className={styles.anime_type}>Тип: {data.type.full_string}</p>
          ) : (
            ''
          )}
          {data && data.team.decor.length > 0 ? (
            <p className={styles.team_info}>
              Оформление: {data.team.decor.join()}
            </p>
          ) : (
            ''
          )}
          {data && data.team.editing.length > 0 ? (
            <p className={styles.team_info}>
              Субтитры: {data.team.editing.join()}
            </p>
          ) : (
            ''
          )}
          {data && data.team.translator.length > 0 ? (
            <p className={styles.team_info}>
              Перевод: {data.team.translator.join()}
            </p>
          ) : (
            ''
          )}
          {data && data.team.voice.length > 0 ? (
            <p className={styles.team_info}>
              Озвучка: {data.team.voice.join(', ')}
            </p>
          ) : (
            ''
          )}
          {data && data.team.timing.length > 0 ? (
            <p className={styles.team_info}>
              Тайминг: {data.team.timing.join(', ')}
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className={styles.player_wrapper}>
        <h1>Серия {episode}</h1>
        {data &&
          data.player.list.map((item: PlayerList) =>
            item.episode === Number(episode) ? (
              <ReactPlayer
                className={styles.video_player}
                key={item.created_timestamp}
                url={`https://cache.libria.fun${item.hls.hd}`}
                controls
                width={800}
                height={`auto`}
              />
            ) : (
              ''
            ),
          )}

        <div className={styles.pagination}>
          {data &&
            data.player.list.map((item: PlayerList) =>
              item.episode === Number(episode) ? (
                <Link
                  className={styles.active_episode}
                  key={item.episode}
                  to={`/${code}/${item.episode}`}
                >
                  {item.episode}
                </Link>
              ) : (
                <Link key={item.episode} to={`/${code}/${item.episode}`}>
                  {item.episode}
                </Link>
              ),
            )}
        </div>
      </div>
    </div>
  );
};

export default OneAnime;
