import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyStack from '../stack/Stack'; 
import ProfileScreen from '../ProfileScreen';
import HomeScreen from '../HomeScreen';



export default function MyTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor: '#191163',
            tabBarShowLabel :  false,
            headerShown : false
        }}
        >
        <Tab.Screen 
            name="Home" 
            component={MyStack} 
            options={{
            tabBarIcon: ({size,color}) => (
            <Ionicons name="home" size={size} color={color} />
            )
            }}
            />
        <Tab.Screen
        name="Profile" 
        component={ProfileScreen} 
        options={{
            tabBarIcon : ({size,color})=>(
            <Ionicons name="reorder-three" size={size} color={color} />
            )
        }}
        />
        </Tab.Navigator>
    );
}
