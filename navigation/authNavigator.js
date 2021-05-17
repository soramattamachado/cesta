import React from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/login';
import Register from '../screens/register';
import RecoverPassword from '../screens/recoverPassword';

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
        options={{headerShown: false}}
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  }
});

export default AuthNavigator;
