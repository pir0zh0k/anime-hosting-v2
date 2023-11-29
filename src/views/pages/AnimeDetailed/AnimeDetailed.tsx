import { useParams } from 'react-router-dom';

export const AnimeDetailed = () => {
  const { title_code } = useParams();

  return <div>{title_code}</div>;
};
