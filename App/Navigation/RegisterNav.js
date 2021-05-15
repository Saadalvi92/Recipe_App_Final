import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from '../Screens/RegisterScreen';
const Stack = createStackNavigator();
function RegisterNav(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register1"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RegisterNav;
