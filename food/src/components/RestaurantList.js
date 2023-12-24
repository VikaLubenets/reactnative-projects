import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import RestaurantCart from './RestaurantCart';

const RestaurantList = ({header, restaurants, navigation}) => {
  if(!restaurants.length){
    return null
  }
  
  return(
    <View style={styles.contanerStyle}>
      <Text style={styles.headerStyle}>{header}</Text>
      <FlatList 
        horizontal={true}
        data={restaurants}
        keyExtractor={restaurant => restaurant.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Restaurant', {id: item.id})}>
               <RestaurantCart data={item} />
            </TouchableOpacity>
          )
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contanerStyle: {
    marginBottom: 15,
  },
  headerStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 10,
  }
});

export default withNavigation(RestaurantList);