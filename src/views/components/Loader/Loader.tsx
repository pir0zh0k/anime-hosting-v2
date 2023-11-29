export const Loader = () => {
  return (
    <div className="h-screen w-screen bg-slate-900 absolute z-[1000] top-0 left-0 flex items-center justify-center overflow-hidden">
      <div className="animate-spin rounded-full relative w-[150px] h-[150px] border-[15px] border-t-sky-500/50 border-l-sky-500 border-r-sky-500 border-b-sky-500"></div>
      <span className="absolute text-xl font-extralight">Загрузка</span>
    </div>
  );
};
