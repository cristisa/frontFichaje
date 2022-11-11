import { Text, View, StyleSheet, Alert } from 'react-native';
import { AppButton } from '../../AppButton';

export const Item = ({item}) => {
    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16}}>{item.key}</Text>
            <View style={{flex:1, flexDirection: 'row-reverse'}}>
                <AppButton 
                    onPress={() => Alert.alert('Asignar')}
                    title='Asignar'
                    styles={styles.btn1} 
                />
                <AppButton 
                    onPress={() => Alert.alert('Fichajes')}
                    title='Fichajes'
                    styles={styles.btn2} 
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    btn0: {
        backgroundColor: 'red',
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
      },
      btn3: {
        backgroundColor: '#5870F6',
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,     
      },
      btn1:{
        backgroundColor: '#F66262',
        color: '#fff',
        borderRadius: 25,
        paddingTop: 10,
        paddingLeft: 15,
        paddingBottom: 10,
        marginTop: 10,
        width: '43%',
        fontWeight: 'bold',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
  
        elevation: 5,
      },
      btn2:{
        backgroundColor: '#F66262',
        color: '#fff',
        borderRadius: 25,
        paddingTop: 10,
        paddingLeft: 18,
        paddingBottom: 10,
        marginTop: 10,
        width: '43%',
        fontWeight: 'bold',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
  
        elevation: 5,
      }
      
})