import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

const UserScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return(
    <View>
      <Text>Enter your name:</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Text>My name is {name}</Text>
      <Text>Enter password:</Text>
      <TextInput 
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {password.length > 0 && password.length < 5 ? 
        <Text>The password should be longer than 5 caracters</Text> : 
        null}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default UserScreen;