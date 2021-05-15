import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeImageScreen from '../Screens/WelcomeImageScreen';

import LoginNav from './LoginNav';
import RegisterNav from './RegisterNav';
const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeImageScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Login"
      component={LoginNav}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Register"
      component={RegisterNav}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
export default AuthNavigator;
