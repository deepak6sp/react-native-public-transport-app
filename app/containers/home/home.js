import React, {Component} from 'react';
import { Text, View, FlatList, TextInput, Dimensions, StyleSheet } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import HomeStyles from './home-style.js';
import Menu from '../../components/menu';
import Variables from '../../constants';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      transportSource: [{key:'Find Trains'}, {key: 'Find Trams'}, {key: 'Find Buses'}, {key: 'Next'}],
      transportSelectionHeight: Dimensions.get("window").height - 270,
      transportSelectionWidth: Dimensions.get("window").width/2,
      iconsList: [{key:'ios-star'}, {key: 'ios-search'}, {key: 'ticket'}]
    };
  }
  static navigationOptions = {
    title: 'Live Time Table',
    headerStyle: HomeStyles.headerStyle,
    headerTitleStyle: HomeStyles.headerTitleStyle
  };

  _handleClick(e) {
    alert("adsd");
  }

  render() {
    const listHeight = {
      height: this.state.transportSelectionHeight/2,
      lineHeight: this.state.transportSelectionHeight/2
    };
    const combineStyles = StyleSheet.flatten([listHeight, HomeStyles.transportSelectionListText]);
    return (
      <View>
        <View style={HomeStyles.select_location_wrapper}>
            <TextInput
              style={HomeStyles.input}
              placeholder="From:"
              placeholderTextColor={Variables.greyLight}
              defaultValue="current location"
              onChangeText={(text) => this.setState({text})}
            />
            <TextInput
              style={HomeStyles.input}
              placeholder="To:"
              placeholderTextColor={Variables.greyLight}
              onChangeText={(text) => this.setState({text})}
            />
        </View>
        <View style={HomeStyles.select_transport_wrapper}>
          <FlatList
            data={this.state.transportSource}
            numColumns={2}
            renderItem={
              ({item}) =>
                <View style={{'width': this.state.transportSelectionWidth}}>
                  <Text style={combineStyles} onPress={this._handleClick}>
                    {item.key}
                  </Text>
                </View>
            } />
        </View>
        <View style={HomeStyles.footer}>
          <FlatList
            data={this.state.iconsList}
            numColumns={3}
            renderItem={
              ({item}) =>
                <View style={HomeStyles.iconsList}>
                  {(item.key != 'ticket') &&
                    <Text style={HomeStyles.iconsText}>
                      <Ionicons
                       name={item.key}
                       style={HomeStyles.icons}/>
                    </Text>
                  }
                  {(item.key == 'ticket') &&
                    <Text style={HomeStyles.iconsText}>
                      <Entypo
                       name={item.key}
                       style={HomeStyles.icons}/>
                    </Text>
                  }
                </View>
            } />
        </View>
      </View>
    );
  }
}
