import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailScreen } from '../screens/details/DetailScreen';
import { HomeScreen } from '../screens/home/HomeScreen';

export type RootStackParams = {
  Home: undefined;
  Detail: { movieId: number };
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
