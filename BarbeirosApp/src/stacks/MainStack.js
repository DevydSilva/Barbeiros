/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/native-stack';

const Stack = createStackNavigator();
export default () => (
  <Stack.Navigator>
    <Stack.Screen name="preload" component={Preload} />
    <Stack.Screen name="preload" component={SignIn} />
    <Stack.Screen name="preload" component={SignUp} />
  </Stack.Navigator>
);
