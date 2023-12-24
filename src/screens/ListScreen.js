import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
  const arr = ['one', 'two', 'three']

  return (
    <FlatList
    keyExtractor={(friend) => { friend }}
    data={arr}
    renderItem={({item}) => <Text>{item}</Text>}
    />
  )
}


const styles = StyleSheet.create({

})

export default ListScreen;