import React from 'react';
import {StackNavigator} from 'react-navigation';

import HomeScreen from './containers/home';

export default Main =  StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: HomeScreen },
});
