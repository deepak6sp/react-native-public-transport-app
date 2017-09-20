import { StyleSheet } from 'react-native';
import Variables from '../../constants';


export default HomeStyles = StyleSheet.create({
  list: {
    borderBottomColor: Variables.greyLight,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 50
  },
  listText: {
    backgroundColor: Variables.primaryColor,
    color: Variables.secondaryColor,
    flex: 1,
    lineHeight: 50,
    paddingLeft: 20,
    fontSize: 16,
  },
  icons: {
    backgroundColor: Variables.primaryColor,
    fontSize: 20,
    flex: 1,
    lineHeight: 50,
    textAlign: 'right',
    paddingRight: 20,
    color: Variables.secondaryColor
  },
  headerStyle: {
    backgroundColor: Variables.secondaryColor
  },
  headerTitleStyle: {
    color: Variables.white
  }
});
