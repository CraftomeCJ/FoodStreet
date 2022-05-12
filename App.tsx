import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchScreen from './src/screens/SearchScreen'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="Search"
      component={SearchScreen}
      options={{ title: 'Food Street Search' }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
