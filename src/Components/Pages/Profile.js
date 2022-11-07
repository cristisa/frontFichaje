import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../styles/Colors'

const Profile = () => {
  return (
    <View style={styles.container_profile}>
        <View style={styles.header_profile}>
            <Image source={require('../../img/MaleUser.png')}/>
            <Text style={styles.name_profile}>Pepito Pérez</Text>
        </View>
      <View style={styles.profile_containertext}>
        <View style={styles.profile_text}>
            <Text style={styles.profiletext}>Número de empleado: 0000000</Text>
            <Text style={styles.profiletext}>Teléfono: 00000000 </Text>
            <Text style={styles.profiletext}>Email: pepito@factoria.org</Text> 
            <Text style={styles.profiletext}>Sede: Madrid - Talent Garden</Text>
            <Text style={styles.profiletext}>Dirección particular: Alcalá 400, Madrid</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container_profile:{
        backgroundColor: '#EB5629',
        width: '100%',
        height: '100%',
    },  
    header_profile:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    name_profile:{
        fontSize: 30,
        marginRight: 8,
        color: Colors.white
    },
    profile_containertext:{
        backgroundColor: '#fff',
        width: '80%',
        height: '30%',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 40,
        marginTop: 30,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    profile_text:{
        marginTop: 15,
    },
    profiletext:{
        fontSize: 15,
        lineHeight: 35,
    },
  })
export default Profile