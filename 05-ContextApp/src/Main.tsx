import { NavigationContainer } from '@react-navigation/native';
import { BottonTabNavigator } from './presentation/navigators/BottonTabNavigator';

export const Main = () => {
  return (
    <NavigationContainer>
      <BottonTabNavigator />
    </NavigationContainer>
  );
};
