import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WhatToEat from '../Screens/WhatToEat';
import ListingDetailScreen from '../Screens/ListingDetailScreen';
const Stack = createStackNavigator();
function AppNav(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WhatToEat"
        component={WhatToEat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListingDetail"
        component={ListingDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNav;
