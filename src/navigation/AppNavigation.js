import React from 'react';
import ProductScreen from '../screens/ProductScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
