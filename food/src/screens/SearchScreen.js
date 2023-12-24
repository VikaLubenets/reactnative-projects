import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantList from '../components/RestaurantList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, errorMessage] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    return restaurants.filter(restaurant => {
      return restaurant.price === price;
    });
  }

  return(
    <View style={{flex:1}}>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView style={styles.wrapper}>
        <RestaurantList restaurants={filterRestaurantsByPrice('$')} header='Cost Effective'/>
        <RestaurantList restaurants={filterRestaurantsByPrice('$$')} header='Bit Pricier'/>
        <RestaurantList restaurants={filterRestaurantsByPrice('$$$')} header='Big Spender'/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 40,
  }
});

export default SearchScreen;