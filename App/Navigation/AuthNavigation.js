import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeImageScreen from '../Screens/WelcomeImageScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import LoginNav from './LoginNav';
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
      component={RegisterScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
export default AuthNavigator;
