import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box screen 1</Text>
      <Text style={styles.textStyle}>Box screen 2</Text>
      <Text style={styles.textStyle}>Box screen 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    height: 200,
    justifyContent: 'center',
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
  }
});

export default BoxScreen;