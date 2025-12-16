import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { StackNavigator } from './presentation/navigation/StackNavigator';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { useColorScheme } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AuthProvider } from './presentation/providers/AuthProvider';

export const ProductsApp = () => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;
  const backgroundColor =
    colorScheme === 'dark'
      ? theme['color-primary-800']
      : theme['color-primary-100'];

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer
          theme={{
            ...DefaultTheme,
            dark: colorScheme === 'dark',
            colors: {
              ...DefaultTheme.colors,
              primary: theme['color-primary-500'],
              background: backgroundColor,
              card: theme['color-primary-100'],
              text: theme['text-basic-color'],
              border: theme['color-primary-800'],
              notification: theme['color-primary-500'],
            },
          }}
        >
          <AuthProvider>
            <StackNavigator />
          </AuthProvider>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
