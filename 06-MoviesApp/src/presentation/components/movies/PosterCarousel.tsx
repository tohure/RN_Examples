import { ScrollView, Text, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';
import { MoviePosteer } from './MoviePosteer';

interface Props {
  movies: Movie[];
  height?: number;
}

export const PosterCarousel = ({ height = 440, movies }: Props) => {
  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies.map(movie => (
          <MoviePosteer key={movie.id} movie={movie} />
        ))}
      </ScrollView>
    </View>
  );
};
