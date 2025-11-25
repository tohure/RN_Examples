import { MOVIE_DB_KEY } from '@env';
import { AxiosAdapter } from './http/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    //api_key: 'eb6b51f36fb7b40061f2382871e6061b',
    api_key: MOVIE_DB_KEY ?? 'no-key',
    language: 'es',
  },
});
