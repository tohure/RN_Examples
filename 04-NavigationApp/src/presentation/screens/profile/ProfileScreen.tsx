import { Text, View } from 'react-native';
import { globalStyles } from '../../themes/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        ...globalStyles.container,
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top,
      }}
    >
      <Text style={{ marginBottom: 10 }}>Profile Screen</Text>
      <PrimaryButton
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        label="Abrir Menu"
      />
    </View>
  );
};
