import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title='Forest' src={require('../../assets/forest.png')} />
      <ImageDetail title='Beach' src={require('../../assets/beach.png')} />
      <ImageDetail title='Mountain' src={require('../../assets/mountain.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;