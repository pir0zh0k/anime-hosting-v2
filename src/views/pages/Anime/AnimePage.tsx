import { Pagination } from '@mui/material';
import { useUpdates } from '../../../hooks/useUpdates';
import { Anime, AnimeListRoot } from '../../../interfaces/updates.interface';
import { AnimeCard } from '../../components';
import { useState, useLayoutEffect } from 'react';

export const AnimePage = () => {
  const [page, setPage] = useState<number>(1);
  const { data } = useUpdates({ items_per_page: 30, page: page });

  const [animeList, setAnimeList] = useState<AnimeListRoot>(data);

  useLayoutEffect(() => {
    data && setAnimeList(data);
  }, []);

  const handlePagination = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
      <div className="anime-grid-container py-5">
        {animeList &&
          animeList.list.map((title: Anime) => (
            <div key={title.id}>
              <AnimeCard title={title} />
            </div>
          ))}
      </div>
      <div className="flex justify-center py-2">
        <Pagination
          count={animeList?.pagination.pages}
          page={page}
          onChange={handlePagination}
          color="primary"
        />
      </div>
    </>
  );
};
