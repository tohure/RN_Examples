import { Text, View } from 'react-native';
import { globalStyles } from '../../themes/theme';
import { StackActions, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const SettingsScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10 }}>Setting Screen</Text>
      <PrimaryButton onPress={() => navigator.goBack()} label="Regresar" />
      <PrimaryButton
        onPress={() => navigator.dispatch(StackActions.popToTop())}
        label="Regresar Home"
      />
    </View>
  );
};
