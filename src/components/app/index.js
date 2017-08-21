import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation';

import Home from '../../screens/home';
import reducers from '../../reducers';


const AppNavigation = StackNavigator({
  Home: { screen: Home },
});

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};


AppRegistry.registerComponent('camara_deputados', () => App);
