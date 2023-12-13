import React, { useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title='Increase' onPress={() => setCounter(counter + 1)} />
      <Button title='Decrease' onPress={() => setCounter(counter - 1)} />
      <Text>Current counter: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  counterBtn: {
    fontSize: 15,
  }
})

export default CounterScreen;