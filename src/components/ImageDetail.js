import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function ImageDetail ({title, src}) {
  return (
    <View>
      <Image source={src}/>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});