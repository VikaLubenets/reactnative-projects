import React from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return(
    <View style={styles.backgroundStyle}>
      <AntDesign name="search1" style={styles.iconStyle}/>
      <TextInput 
        placeholder='Search'  
        style={styles.inputStyle} 
        value={term} 
        onChangeText={onTermChange}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    marginVertical: 20,
  },
  inputStyle: {
    flex: 1,
    justifyContent: 'center',
    height: 35,
    padding: 5,
    fontSize: 18,
  },
  iconStyle: {
    color: 'black',
    fontSize: 35,

  }
});

export default SearchBar;