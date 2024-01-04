import React, {useContext} from "react";
import {StyleSheet} from 'react-native';
import BlogpostForm from "../components/BlogPostForm";
import { Context as BlogsContext }from "../context/Context";

const CreateScreen = ({navigation}) => {
  const {addBlogPost} = useContext(BlogsContext);
  return (
    <BlogpostForm 
      onSumbit={(title, content) => {
        addBlogPost(title, content)
        navigation.navigate('Index')
        }}  
        namesOfLabels={['Create Blog Post', 'Add title', 'Add text', 'Create Blog Post']}
      />
  )
}

const styles = StyleSheet.create({});

export default CreateScreen;