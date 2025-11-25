/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';

function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> 
      <BottomTabNavigator />*/}
      <SideMenuNavigator />
    </NavigationContainer>
  );
}

export default App;
