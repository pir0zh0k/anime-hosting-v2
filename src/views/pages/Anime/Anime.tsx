import { Link, useParams } from 'react-router-dom';
import { useGetUpdatesQuery } from '../../../store';
import styles from './Anime.module.scss';
import { OneAnimeInterface } from '../../../helpers/interfaces';
import Preloader from '../../components/Preloader/Preloader';
import { Key, ReactNode } from 'react';

const Anime = () => {
  const { page } = useParams();

  const { data, isLoading } = useGetUpdatesQuery({
    items_per_page: 30,
    page: Number(page),
  });

  const pagination: Array<Number> = [];

  if (data) {
    for (let i = 1; i <= data.pagination.pages; i++) {
      pagination.push(i);
    }
  }

  console.log(pagination);
  console.log(data);

  if (isLoading) return <Preloader />;

  return (
    <>
      <div className={`container ${styles.serials__container}`}>
        {data &&
          data.list.map((item: OneAnimeInterface) => (
            <Link to={`/${item.code}/1`} className={styles.card} key={item.id}>
              <img
                src={`https://static-libria.weekstorm.one${item.posters.original.url}`}
                alt=""
              />

              <p>{item.names.ru}</p>
            </Link>
          ))}
      </div>
      <div className={`container ${styles.pagination_container}`}>
        {pagination.length > 0
          ? pagination.map((item: any) =>
              item == page ? (
                <Link
                  className={styles.active}
                  key={item}
                  to={`/anime/${item}`}
                >
                  {item}
                </Link>
              ) : (
                <Link key={item} to={`/anime/${item}`}>
                  {item}
                </Link>
              ),
            )
          : ''}
      </div>
    </>
  );
};

export default Anime;
