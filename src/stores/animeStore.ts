import axios from 'axios';
import { create } from 'zustand';
import { AnimeState } from '../helpers/interfaces';

export const useAnimeStore = create<AnimeState>(set => ({
  animeList: [],
  oneAnime: {},
  isLoading: false,
  errors: [],
  getAnimeList: () => {
    axios
      .get('https://api.anilibria.tv/v3/title/changes?playlist_type=array')
      .then(response => {
        set(() => ({
          animeList: [...response.data.list],
        }));
      });
  },
  getOneAnime: (code, episode) => {
    axios
      .get(`https://api.anilibria.tv/v3/title?code=${code}`)
      .then(response => {
        console.log(response.data);
        set(() => ({
          oneAnime: {...response.data}
        }));
      });
  },
}));
