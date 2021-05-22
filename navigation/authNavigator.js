import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login';
import Register from '../screens/register';
import RecoverPassword from '../screens/recoverPassword';
import Home from '../screens/home';
import CategoryDetails from '../screens/categoryDetails';
import BottomNavigation from './bottomNavigation';
import PurchaceDetail from '../screens/purchaceDetail';

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
          title: ''
        }}
      />
      <Stack.Screen
        name='RecoverPassword'
        component={RecoverPassword}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
          title: 'VOLTAR',
          headerStyle: {
            height: 160
          }
        }}
      />

    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
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
          title: ''
        }}
      />
      <Stack.Screen
        name='RecoverPassword'
        component={RecoverPassword}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
          title: 'VOLTAR',
          headerStyle: {
            height: 160
          }
        }}
      />
      <Stack.Screen
        name='DashboardStack'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CategoryDetailsStack'
        component={CategoryDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='BottomStack'
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='PurchaceDetail'
        component={PurchaceDetail}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTintColor: '#5A9C54',
          title: 'VOLTAR',
          headerStyle: {
            height: 160
          }
        }}
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
