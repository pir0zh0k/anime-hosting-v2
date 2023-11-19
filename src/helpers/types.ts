export type QuerySettingsType = {
  page?: Number | 1;
  items_per_page?: Number | 10;
  filter?: String | null;
};

type AnimeNamesType = {
  alternative: string;
  ru: string;
  en: string;
};

type AnimeBlockedType = {
  bakanim: boolean;
  blocked: boolean;
};

type AnimeEpisodesType = {
  first: number;
  last: number;
  string: string;
};

type AnimeHlsType = {
  fhd: string;
  hd: string;
  sd: string;
};

type AnimeEpisodeType = {
  created_timestamp: number;
  episode: number;
  hls: AnimeHlsType;
  name: string | null;
  preview: string | null;
};

type AnimePlayerType = {
  alternative_player: string | null;
  episodes: AnimeEpisodesType;
  host: string;
  is_rutube: boolean;
  list: Object | Array<AnimeEpisodeType>;
  rutube: Object;
};

type OnePosterType = {
  raw_base64_file: string | null;
  url: string | null;
};

type AnimePostersObject = {
  medium: OnePosterType;
  original: OnePosterType;
  small: OnePosterType;
};

type AnimeSeasonType = {
  code: number;
  string: string;
  week_day: number;
  year: number;
};

type AnimeStatusType = {
  code: number;
  string: string;
};

type AnimeTeamType = {
  decor: Array<String>;
  editing: Array<String>;
  timing: Array<String>;
  translator: Array<String>;
  voice: Array<String>;
};

type AnimeTorrentsType = {
  episodes: AnimeEpisodesType;
  list: Array<Object>;
};

type TypeOfAnimeType = {
  code: Number;
  episodes: Number;
  full_string: string;
  length: Number | null;
  string: String;
};

export interface OneAnimeType {
  id: Number;
  announce: any;
  blocked: AnimeBlockedType;
  code: String;
  description: String;
  franchises: Array<Object>;
  genres: Array<String>;
  in_favorites: Number;
  last_change: Number;
  names: AnimeNamesType;
  player: AnimePlayerType;
  posters: AnimePostersObject;
  season: AnimeSeasonType;
  status: AnimeStatusType;
  team: AnimeTeamType;
  torrents: AnimeTorrentsType;
  type: TypeOfAnimeType;
}
