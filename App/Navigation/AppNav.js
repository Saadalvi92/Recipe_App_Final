import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WhatToEatNav from './WhatToEatNav';
import AccountScreen from '../Screens/AccountsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import {useEffect} from 'react';
const Tab = createBottomTabNavigator();
function AppNav(props) {
  // console.log(props.route.params);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="What to Eat"
        component={WhatToEatNav}
        options={{
          tabBarIcon: ({size}) => (
            <Icon name="food" color={colors.primary} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Accounts"
        component={AccountScreen}
        initialParams={props.route.params}
        options={{
          tabBarIcon: ({size}) => (
            <Icon name="account" color={colors.primary} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNav;
