import { Anime } from '../../../interfaces/updates.interface';

interface AnimeCardProps {
  title: Anime;
}

export const AnimeCard = ({ title }: AnimeCardProps) => {
  return (
    <div className="relative border-2 border-slate-500 hover:border-red-500">
      <img
        src={`https://static-libria.weekstorm.one/${title.posters.medium.url}`}
        alt=""
        className="w-full h-full"
      />
      <div className="absolute p-5 w-full h-full top-0 left-0 bg-slate-800/80 transition-opacity opacity-0 hover:opacity-100">
        <h2 className="text-xl mb-5 font-bold [-webkit-line-clamp:3] [display:-webkit-box] [-webkit-box-orient:vertical] overflow-hidden">{title.names.ru}</h2>
        <p className="m-0 [-webkit-line-clamp:6] [display:-webkit-box] [-webkit-box-orient:vertical] overflow-hidden">
          {title.description}
        </p>
      </div>
    </div>
  );
};
