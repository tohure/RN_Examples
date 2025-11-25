import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/tabs/Tab1Screen';
import { Tab2Screen } from '../screens/tabs/Tab2Screen';
import { Tab3Screen } from '../screens/tabs/Tab3Screen';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabNavigator';
import { StackNavigator } from './StackNavigator';
import { MaterialIcon } from '../components/shared/MaterialIcon';
import { globalColors } from '../themes/theme';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary,
        sceneStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0, // Para Android
        },
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="wheelchair-accessibility" color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="airport" color={color} />
          ),
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="chart-bubble" color={color} />
          ),
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
