import React, {Component} from 'react';
import { Text, View, ListView } from 'react-native';
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
  render() {
    return (
      <View>
        <View>
          <Menu/>
        </View>
        <View>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={
              (rowData) => <View style={HomeStyles.list}>
                <Text style={HomeStyles.listText}>{rowData}</Text>
              </View>
            }
          />
        </View>
      </View>
    );
  }
}
