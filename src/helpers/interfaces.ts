export interface AnimeState {
  animeList: Object[];
  oneAnime: Object;
  isLoading: boolean;
  errors: Array<string>;
  getAnimeList: () => void;
  getOneAnime: (code: string, episode: number) => void;
}

export interface SliderUpdates {
  updatesList: Array<Object>;
}
