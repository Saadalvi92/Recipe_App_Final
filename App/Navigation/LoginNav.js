import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import AppNav from './AppNav';
const Stack = createStackNavigator();

function LoginNav(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login1"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Recipes"
        component={AppNav}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default LoginNav;
