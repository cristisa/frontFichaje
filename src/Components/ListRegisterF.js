import { Text, View, StyleSheet, Alert } from 'react-native';

export const ListRegisterF = ({item}) => {
    return (
        <View style={{padding: 10}}>
        <View style={styles.table}>
            <Text style={{fontSize: 16, textAlign:'center', padding: 5}}>{item.fecha}</Text>
            <Text style={{fontSize: 16, textAlign:'center', padding: 5}}>{item.horas}</Text>
        </View>
        </View>
    )
};


const styles = StyleSheet.create({
  table: {
    backgroundColor: '#EBEBEB',
    height: 70,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderColor: '#ADADAD',
    // borderWidth: 10
  }
})