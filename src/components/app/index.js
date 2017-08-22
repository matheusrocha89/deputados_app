import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation';
import { Root, Tabs } from '../../config/router';
import reducers from '../../reducers';

const App = () => {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
			<Root />
    </Provider>
  );
};

AppRegistry.registerComponent('camara_deputados', () => App);