import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

const BlogpostForm = ({onSumbit, initialValue, namesOfLabels}) => {
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);

  return (
    <View style={styles.container}>
    <Text style={styles.title}>{namesOfLabels[0]}</Text>
    <Text style={styles.title}>{namesOfLabels[1]}</Text>
    < TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)}/>
    <Text style={styles.title}>{namesOfLabels[2]}</Text>
    < TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)}/>
    <Button title={namesOfLabels[3]} onPress={() => onSumbit(title, content)}/>
  </View>
  )
}

BlogpostForm.defaultProps = {
  initialValue: {
    title: '',
    content: ''
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
    padding: 5,
  },
  container: {
    margin: 10,
  }
});

export default BlogpostForm;