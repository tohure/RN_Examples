import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../theme/global.style';
import { FAB } from 'react-native-paper';

import Icon from '@react-native-vector-icons/material-design-icons';

export const CounterM3Screen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>

      <Icon name="fingerprint" size={25} />

      <FAB
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        style={globalStyles.fab}
        icon="plus"
      />
    </View>
  );
};
