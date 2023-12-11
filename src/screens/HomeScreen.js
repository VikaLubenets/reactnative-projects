import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
  <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button 
      title="Go to components" 
    />

    <TouchableOpacity>
      <Text>Go to List</Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
