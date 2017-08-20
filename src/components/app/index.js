import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../../screens/home';


const App = StackNavigator({
  Home: { screen: Home },
});


AppRegistry.registerComponent('camara_deputados', () => App);
