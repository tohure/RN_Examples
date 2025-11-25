import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../themes/theme';
import { useEffect } from 'react';

export const ProductScreen = (props: any) => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Product Screen</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}
      >
        ID: {params.id} - Name: {params.name}
      </Text>
    </View>
  );
};
