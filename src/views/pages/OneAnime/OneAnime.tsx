import { Link, useParams } from 'react-router-dom';
import { useGetOneAnimeQuery } from '../../../store';
import styles from './OneAnime.module.scss';
import ReactPlayer from 'react-player';

const OneAnime = () => {
  const { code, episode } = useParams();
  const { data, isLoading } = useGetOneAnimeQuery(code);

  console.log(data);

  if (isLoading) {
    return <div>Is Loading</div>;
  }

  return (
    <div className={`container ${styles.player_container}`}>
      <h1>{data.names.ru}</h1>
      <div className={styles.info}>
        <img
          src={`https://static-libria.weekstorm.one${data.posters.original.url}`}
          alt=""
        />
        <p>{data.description}</p>
      </div>
      <div className={styles.player_wrapper}>
        <h1>Серия {episode}</h1>
        {data &&
          data.player.list.map((item: Object) =>
            item.episode == episode ? (
              <ReactPlayer
                className={styles.video_player}
                key={item.created_timestamp}
                url={`https://cache.libria.fun${item.hls.fhd}`}
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
            data.player.list.map(item => (
              <Link key={item.episode} to={`/serials/${code}/${item.episode}`}>
                {item.episode}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OneAnime;
