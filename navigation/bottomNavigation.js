import React from 'react'

import 'react-native-gesture-handler';


import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/home';



const Tab = createBottomTabNavigator();





function bottomNavigation() {
    return (

        <Tab.Navigator
            initialRouteName="HomeStack"
            tabBarOptions={{
                activeTintColor: '#42f44b',
            }}>
            <Tab.Screen
                name="HomeStack"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}

export default bottomNavigation;
