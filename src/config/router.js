import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import DeputiesScreen from '../screens/DeputiesScreen';
import DeputyDetailsScreen from '../screens/DeputyDetailsScreen';

export const MenuStack = StackNavigator({
  MenuScreen: {
    screen: DeputiesScreen,
    navigationOptions: ({ navigation }) => ({
    }),
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
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  CodeScreen: {
    screen: DeputiesScreen,
    navigationOptions: {
      tabBarLabel: 'Sair',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
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
  mode: 'modal',
  headerMode: 'none',
});