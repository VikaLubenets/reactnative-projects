import React, {useContext} from "react";
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import {Context} from "../context/Context";
import { AntDesign, Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
  const {state, deleteBlogPost} = useContext(Context);

  return (
    <View>
      <FlatList 
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
            <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                <AntDesign name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  }, 
  title: {
    fontSize: 18,
  }
});

export default IndexScreen;