import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QuerySettingsType } from '../../helpers/types';

export const animeApi = createApi({
  reducerPath: 'anime/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.anilibria.tv/v3/' }),
  endpoints: build => ({
    getChanges: build.query({
      query: (settings: QuerySettingsType) =>
        `/title/changes?items_per_page=${settings.items_per_page}&page=${settings.page}&playlist_type=array`,
    }),
    getUpdates: build.query({
      query: (settings: QuerySettingsType) =>
        `/title/updates?items_per_page=${settings.items_per_page}&page=${settings.page}&playlist_type=array`,
    }),
    getOneAnime: build.query({
      query: (code: String | undefined) =>
        `/title?code=${code}&playlist_type=array`,
    }),
  }),
});

export const { useGetChangesQuery, useGetUpdatesQuery, useGetOneAnimeQuery } =
  animeApi;
