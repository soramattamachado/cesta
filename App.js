import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './navigation/mainNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});

export default App;
