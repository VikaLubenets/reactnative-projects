import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function ColorCounter ({color, onIncrease, onDecrease}) {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`More ${color}`} onPress={() => onIncrease()}/>
      <Button title={`Less ${color}`} onPress={() => onDecrease()}/>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});