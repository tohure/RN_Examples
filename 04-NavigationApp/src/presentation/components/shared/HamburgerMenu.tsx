import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable, Text } from 'react-native';
import { MaterialIcon } from './MaterialIcon';
import { globalColors } from '../../themes/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{ marginLeft: 5 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <MaterialIcon name="menu" color={globalColors.primary} />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
