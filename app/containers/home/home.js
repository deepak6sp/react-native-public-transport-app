import React, {Component} from 'react';
import { Text, View, ListView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HomeStyles from './home-style.js';
import Menu from '../../components/menu';

export default class Home extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['Train', 'Tram', 'Buses']),
    };
  }
  static navigationOptions = {
    title: 'Live Time Table',
    headerStyle: HomeStyles.headerStyle,
    headerTitleStyle: HomeStyles.headerTitleStyle
  };

  render() {
    return (
      <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={
              (rowData) =>
                <View style={HomeStyles.list}>
                  <Text style={HomeStyles.listText}>
                    {rowData}
                  </Text>
                  <Ionicons
                   name="ios-arrow-forward-outline"
                   style={HomeStyles.icons}/>

                </View>
            }/>
      </View>
    );
  }
}
