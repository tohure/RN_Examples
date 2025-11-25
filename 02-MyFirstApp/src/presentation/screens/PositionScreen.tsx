import { StyleSheet, Text, View } from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.greenBox]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 10,
    position: 'absolute'
  },
  purpleBox: {
    backgroundColor: 'purple',
    borderColor: 'white',
    top: 0,
    right: 0,
  },
  orangeBox: {
    backgroundColor: 'orange',
    borderColor: 'white',
    alignSelf: 'center'
  },
  greenBox: {
    backgroundColor: 'green',
    borderColor: 'white',
    bottom: 0,
  },
});
