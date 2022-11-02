import { Text, View, StyleSheet, Alert } from 'react-native';
import { AppButton } from './AppButton';

export const Item = ({item}) => {
    return (
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 16}}>{item.key}</Text>
            <View style={{flex:1, flexDirection: 'row-reverse'}}>
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
    btn1: {
        backgroundColor: 'red',
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,
      },
      btn2: {
        backgroundColor: '#5870F6',
        color: 'white',
        paddingLeft: 5,
        paddingRight: 5,
        marginLeft: 5,     
      }
})