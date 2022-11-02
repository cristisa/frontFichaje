import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const StylesApp = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40,
      marginLeft: 10,
    },
  
    list: {
      flex: 1,
      paddingTop: 20,
      paddingRight: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      fontSize: 18,
    },
  
    titl: {
      fontSize: 20,
    },
  
    btn1: {
      backgroundColor: Colors.success,
      color: 'white',
      paddingLeft: 5,
      marginLeft: 5,
    },

    btn2: {
      backgroundColor: Colors.primary,
      color: 'white',
      paddingLeft: 5,
      paddingRight: 5,
      marginLeft: 5,
    }
  });