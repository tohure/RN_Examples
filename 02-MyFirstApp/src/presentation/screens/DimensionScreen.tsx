import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

export const DimensionScreen = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 0.6,
          }}
        />
      </View>
      <Text style={styles.title}>
        w: {width} | h: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 300,
    height: 300,
  },
  purpleBox: {
    backgroundColor: 'purple',
    height: '50%',
    width: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
