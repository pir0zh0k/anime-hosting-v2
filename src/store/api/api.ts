import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { QuerySettingsType } from '../../helpers/types';

export const animeApi = createApi({
  reducerPath: 'anime/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.anilibria.tv/v3/' }),
  endpoints: build => ({
    getChanges: build.query({
      query: (settings: QuerySettingsType) =>
        `/title/changes?items_per_page=${settings.items_per_page}&page=${settings.page}`,
    }),
  }),
});

export const { useGetChangesQuery } = animeApi;
