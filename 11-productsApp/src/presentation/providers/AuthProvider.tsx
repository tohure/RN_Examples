import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PropsWithChildren, useEffect } from 'react';
import { RootStackParam } from '../navigation/StackNavigator';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '../store/auth/useAuthStore';

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const naivgation = useNavigation<NativeStackNavigationProp<RootStackParam>>();
  const { checkStatus, status } = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    if (status !== 'checking') {
      if (status === 'authenticated') {
        naivgation.reset({
          index: 0,
          routes: [{ name: 'HomeScreen' }],
        });
      } else {
        naivgation.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }],
        });
      }
    }
  }, [status]);

  return <>{children}</>;
};
