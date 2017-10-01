import { StyleSheet } from 'react-native';
import Variables from '../../constants';


export default HomeStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Variables.primaryColor,
    height: 70
  },
  headerTitleStyle: {
    color: Variables.white
  },
  select_location_wrapper: {
    backgroundColor: Variables.primaryColor,
    height: 150
  },
  input: {
    height: 50,
    margin: 10,
    padding: 5,
    backgroundColor: Variables.secondaryColor,
    borderRadius: 5,
    color: Variables.white
  },
  select_transport_wrapper: {
  },
  transportSelectionListText: {
    borderWidth: 1,
    borderColor: Variables.primaryColor,
    color: Variables.primaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    fontSize: 16,
    textAlign: 'center'
  },
  iconsList: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 50
  },
  icons: {
    fontSize: 20
  }
});
