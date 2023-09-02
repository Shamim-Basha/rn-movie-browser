import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../HomeScreen';
import DescriptionScreen  from '../DescriptionScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
        <Stack.Navigator initialRouteName='Movies'>
            <Stack.Screen 
                name="Movies" 
                component={HomeScreen} 
            />
            <Stack.Screen 
                name="Description" 
                component={DescriptionScreen}
            />
        </Stack.Navigator>
  );
}