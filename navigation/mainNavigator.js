import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import AuthNavigator from './authNavigator';

const MainNavigator = () => {
  return (
    <AuthNavigator/>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
});

export default MainNavigator;
