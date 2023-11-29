import { Pagination } from '@mui/material';
import { useUpdates } from '../../../hooks/useUpdates';
import { Anime, AnimeListRoot } from '../../../interfaces/updates.interface';
import { AnimeCard, Loader } from '../../components';
import { useState, useEffect } from 'react';

export const AnimePage = () => {
  const [page, setPage] = useState<number>(1);
  const {
    data: animeList,
    refetch,
    isLoading,
    isFetching,
  } = useUpdates({
    items_per_page: 30,
    page: page,
  });

  console.log(animeList);

  const handlePagination = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  if (isFetching) {
    return <Loader />;
  }
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
