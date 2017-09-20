import React from 'react';
import { Text, View } from 'react-native';
import MenuStyles from './menu-style.js';

export default class Home extends React.Component {
  render() {
    return (
      <View style={MenuStyles.container}>
        <Text style={MenuStyles.text}>Live Time Table</Text>
      </View>
    );
  }
}
