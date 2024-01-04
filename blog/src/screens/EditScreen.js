import React, {useContext, useState} from "react";
import {StyleSheet } from 'react-native';
import {Context} from "../context/Context";
import BlogpostForm from '../components/BlogPostForm';

const EditScreen = ({navigation}) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam('id');
  const blogPost = state.find(blogPost => blogPost.id === id)

  return (
    <BlogpostForm 
      onSumbit={(title, content) => {
        editBlogPost(id, title, content)
        navigation.pop();
        }}  
      initialValue={{title: blogPost.title, content: blogPost.content}}
      namesOfLabels={['Edit Blog Post', 'Change title', 'Change content', 'Save Blog Post']}
      />
  )
}

const styles = StyleSheet.create({});

export default EditScreen;