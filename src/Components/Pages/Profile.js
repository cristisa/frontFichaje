import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container_profile}>
      <View>
        <Image />
        <Text></Text>
      </View>
      <View style={styles.day_containertext}>
        <Text style={styles.day}>7 de octubre</Text>
        <Text style={styles.day_titletext}>fichaje</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container_profile:{
      backgroundColor: '#EB5629',
      // fontFamily: 'Poppins',
      width: '100%',
      height: '100%',
    },  
  })
export default Profile