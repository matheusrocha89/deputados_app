import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import DeputiesScreen from '../screens/DeputiesScreen';
import DeputyDetailsScreen from '../screens/DeputyDetailsScreen';


export const MenuStack = StackNavigator({
  MenuScreen: {
    screen: DeputiesScreen,
  },
  RatingScreen: {
    screen: DeputiesScreen,
    navigationOptions: {
      title: 'Avaliação',
    },
  },
});


export const Tabs = TabNavigator({
  MenuScreen: {
    screen: MenuStack,
    navigationOptions: {
      tabBarLabel: 'Menu',
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  CodeScreen: {
    screen: DeputiesScreen,
    navigationOptions: {
      tabBarLabel: 'Sair',
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />,
    },
  },
});


export const Root = StackNavigator({
  DeputiesScreen: {
    screen: DeputiesScreen,
  },
  DeputyDetailsScreen: {
    screen: DeputyDetailsScreen,
  },
}, {
  navigationOptions: {
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#008700',
    },
  },
});
