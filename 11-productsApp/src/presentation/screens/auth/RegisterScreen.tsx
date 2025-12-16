import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { ScrollView, useWindowDimensions } from 'react-native';
import { MyIcon } from '../../components/ui/MyIcon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParam } from '../../navigation/StackNavigator';

interface Props
  extends NativeStackScreenProps<RootStackParam, 'RegisterScreen'> {}

export const RegisterScreen = ({ navigation }: Props) => {
  const { height } = useWindowDimensions();

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.3 }}>
          <Text category="h1">Crear cuenta</Text>
          <Text category="p2">Por favor, cree cuenta para continuar</Text>
        </Layout>

        <Layout style={{ marginTop: 20 }}>
          <Input
            placeholder="Nombre completo"
            accessoryLeft={<MyIcon name="person-outline" />}
            style={{ marginBottom: 10 }}
          />
          <Input
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            accessoryLeft={<MyIcon name="email-outline" />}
            style={{ marginBottom: 10 }}
          />
          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            accessoryLeft={<MyIcon name="lock-outline" />}
            style={{ marginBottom: 10 }}
          />
        </Layout>

        <Layout style={{ height: 20 }} />

        <Layout>
          <Button
            accessoryRight={<MyIcon name="arrow-forward-outline" white />}
            onPress={() => {}}
          >
            Crear
          </Button>
        </Layout>

        <Layout style={{ height: 20 }} />

        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}
        >
          <Text>¿Ya tienes una cuenta?</Text>
          <Text status="primary" category="s1" onPress={() => navigation.pop()}>
            {' '}
            ingresar{' '}
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
