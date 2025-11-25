import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = useState(10);

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        {count}
      </Text>
      {/* <PrimaryButton
        label="Incrementaré"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      /> */}
      <Button
        mode="contained"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
      >
        Incrementaré
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: '300',
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
