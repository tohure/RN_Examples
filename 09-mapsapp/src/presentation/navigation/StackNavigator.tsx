import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoadingScreen } from '../screens/loading/LoadingScreen';
import { MapScreen } from '../screens/maps/MapScreen';
import { PermissionScreen } from '../screens/permissions/PermissionScreen';

export type RootStackParams = {
  LoadingScreen: undefined;
  PermissionsScreen: undefined;
  MapScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoadingScreen"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="PermissionsScreen" component={PermissionScreen} />
    </Stack.Navigator>
  );
};
