import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectScreen</Text> */}
      <View style={styles.purpleBox}>
        <Text style={{ color: 'white' }}>BoxObjectScreen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ff0000ff',
    flex: 1,
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 7,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    margin: 20,
    padding: 5,
  },
});
