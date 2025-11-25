import { useEffect, useState } from 'react';
import type { Movie } from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases/';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapters';

let popularPageNumber = 1;
let topRatedPage = 1;
let upcomingPage = 1;

export const useMovies = () => {
  console.log('Valor actual -->' + popularPageNumber);

  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMoviesPromises =
      UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularMoviesPromises = UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatedMoviesPromises =
      UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const upcomingMoviesPromises =
      UseCases.moviesUpcomingUseCase(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowPlayingMoviesPromises,
        popularMoviesPromises,
        topRatedMoviesPromises,
        upcomingMoviesPromises,
      ]);

    setNowPlaying(nowPlayingMovies);
    setPopular(popularMovies);
    setTopRated(topRatedMovies);
    setUpcoming(upcomingMovies);

    setIsLoading(false);
  };

  const popularNextPage = async () => {
    popularPageNumber++;
    const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher, {
      page: popularPageNumber,
    });
    setPopular(prev => [...prev, ...popularMovies]);
    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    popularNextPage,
    topRatedNextPage: async () => {},
    upcomingNextPage: async () => {},
  };
};
