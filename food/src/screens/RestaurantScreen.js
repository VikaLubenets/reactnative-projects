import React, {useState, useEffect} from "react";
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';
import yelp from '../api/yelp'

const RestaurantScreen = ({navigation}) => {
  const id = navigation.getParam('id');
  const [restaurant, setRestaurant] = useState(null);

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`)
    setRestaurant(response.data)
  }

useEffect(() => {
  getRestaurant(id)
}, [])

if(!restaurant){
  return null
}

  return(
    <View>
      <Text>{restaurant.name}</Text>
      <FlatList 
        data={restaurant.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}}/>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    marginBottom: 10,
  }
})

export default RestaurantScreen;