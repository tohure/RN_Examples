import { Text, View } from 'react-native';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';
import { MaterialIcon } from '../../components/shared/MaterialIcon';

export const Tab1Screen = () => {
  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1 Screen</Text>
      <MaterialIcon name="bike-fast"/>
    </View>
  );
};
