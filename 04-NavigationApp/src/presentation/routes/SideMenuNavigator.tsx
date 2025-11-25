import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../themes/theme';
import { Text, useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabsNavigator';
import { MaterialIcon } from '../components/shared/MaterialIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: dimensions.width >= 758 ? 'permanent' : 'front',

        headerShown: false,
        drawerActiveBackgroundColor: globalColors.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColors.primary,
        drawerItemStyle: {
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => <MaterialIcon name="account-cowboy-hat-outline" color={color} />,
        }}
        name="Tabs"
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color }) => <MaterialIcon name="turkey" color={color} />,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />

      <DrawerItemList {...props} />

      <Text>Hola Mundo Footer</Text>
    </DrawerContentScrollView>
  );
};
