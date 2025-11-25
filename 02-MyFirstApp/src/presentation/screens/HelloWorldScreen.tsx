import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name?: string;
}

export const HelloWorldScreen = ({ name = 'World' }: Props) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>Hello, {name}</Text>
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
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});
