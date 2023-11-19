import { Link } from 'react-router-dom';
import { useGetUpdatesQuery } from '../../../store';
import styles from './Serials.module.scss';
import { OneAnimeInterface } from '../../../helpers/interfaces';

const Serials = () => {
  const { data, isLoading } = useGetUpdatesQuery({
    items_per_page: 30,
    page: 1,
  });

  if (isLoading) return <div>Is Loading</div>;

  return (
    <div className={`container ${styles.serials__container}`}>
      {data &&
        data.list.map((item: OneAnimeInterface) => (
          <Link
            to={`/serials/${item.code}/1`}
            className={styles.card}
            key={item.id}
          >
            <img
              src={`https://static-libria.weekstorm.one${item.posters.original.url}`}
              alt=""
            />

            <p>{item.names.ru}</p>
          </Link>
        ))}
    </div>
  );
};

export default Serials;
