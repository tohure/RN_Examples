import { SafeAreaView } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';

import MaterialIcon from '@react-native-vector-icons/material-design-icons';
import { PositionScreen } from './src/presentation/screens/PositionScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <MaterialIcon {...props} />,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <PositionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
