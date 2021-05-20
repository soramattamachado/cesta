import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';
import Register from '../screens/register';
import RecoverPassword from '../screens/recoverPassword';
import Home from '../screens/home';
import BottomNavigation from './bottomNavigation';
const Stack = createStackNavigator();


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerShown: false,
  headerTintColor: 'white',
  headerBackTitle: 'Back'
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen
        name='RecoverPassword'
        component={RecoverPassword}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: '',
        }}
      />

    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name='Início'
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Dashboard'
        component={Home}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
});

export { AuthNavigator, AppNavigation };
