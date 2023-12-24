import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const RestaurantCart = ({data}) => {
  return (
  <View style={styles.container}>
    <Image style={styles.image} source={{uri: data.image_url}}/>
    <Text style={styles.title}>{data.name}</Text>
    <Text>{data.rating} Stars, {data.review_count} Reviews</Text>
  </View>
  )}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  title: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
  container: {
    marginLeft: 15,
  }
});

export default RestaurantCart;