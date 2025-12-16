import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { Alert, ScrollView, useWindowDimensions } from 'react-native';
import { MyIcon } from '../../components/ui/MyIcon';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParam } from '../../navigation/StackNavigator';
import { useState } from 'react';
import { useAuthStore } from '../../store/auth/useAuthStore';

interface Props extends NativeStackScreenProps<RootStackParam, 'LoginScreen'> {}

export const LoginScreen = ({ navigation }: Props) => {
  const { login } = useAuthStore();

  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { height } = useWindowDimensions();

  const onLogin = async () => {
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }
    setIsPosting(true);

    const wasSuccessful = await login(form.email, form.password);
    setIsPosting(false);
    if (wasSuccessful) return;

    Alert.alert('Error', 'Credenciales incorrectas');
  };

  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.35 }}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor, ingrese para continuar</Text>
        </Layout>

        <Layout style={{ marginTop: 20 }}>
          <Input
            placeholder="Correo Electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={text => setForm({ ...form, email: text })}
            accessoryLeft={<MyIcon name="email-outline" />}
            style={{ marginBottom: 10 }}
          />
          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            value={form.password}
            onChangeText={text => setForm({ ...form, password: text })}
            accessoryLeft={<MyIcon name="lock-outline" />}
            style={{ marginBottom: 10 }}
          />
        </Layout>

        <Layout style={{ height: 10 }} />

        <Layout>
          <Button
            disabled={isPosting}
            accessoryRight={<MyIcon name="arrow-forward-outline" white />}
            onPress={onLogin}
          >
            Ingresar
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
          <Text>¿No tienes una cuenta?</Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => navigation.navigate('RegisterScreen')}
          >
            {' '}
            crea una{' '}
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
