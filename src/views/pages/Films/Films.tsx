import { useGetUpdatesQuery } from '../../../store';
import styles from './Films.module.scss';

const Films = () => {
  const { data, isLoading } = useGetUpdatesQuery({
    items_per_page: 200,
    page: 1,
  });

  console.log(data);
  return (
    <div className={`container ${styles.serials__container}`}>
      <div>Films</div>
    </div>
  );
};

export default Films;
