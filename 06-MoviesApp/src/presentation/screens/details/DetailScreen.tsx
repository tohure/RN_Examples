import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, Text } from 'react-native';
import { RootStackParams } from '../../navigation/Navigation';
import { useMovie } from '../../hooks/useMovie';
import { MovieHeader } from '../../components/movie/MovieHeader';
import { MovieDetails } from '../../components/movie/MovieDetails';
import { FullScreenLoader } from '../../components/loaders/FullScreenLoader';

interface Props extends NativeStackScreenProps<RootStackParams, 'Detail'> {}

export const DetailScreen = ({ route }: Props) => {
  const { movieId } = route.params;
  const { isLoading, movie, cast } = useMovie(movieId);

  if (isLoading) return <FullScreenLoader />;

  if (!movie) {
    return <Text>Movie not found</Text>;
  }
  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie.originalTitle}
        title={movie.title}
        poster={movie.poster}
      />

      <MovieDetails movie={movie!} cast={cast!} />
    </ScrollView>
  );
};
