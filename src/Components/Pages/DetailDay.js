import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const DetailDay = () => {
  return (
    <View style={styles.container_day}>
      <Text style={styles.day_title}>17:05 pm</Text>
      <View style={styles.day_containertext}>
      <Text style={styles.day}>7 de octubre</Text>
        <Text style={styles.day_titletext}>fichaje</Text>
        <Text style={styles.day_text}>08:05 am - 17:10 pm</Text>
        <Text style={styles.day_text}>Madrid - Talent Garden</Text>
        <Text style={styles.day_titletext}>comentario</Text>
        <Text style={styles.day_text}>salida temprano por cita médica</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container_day:{
    backgroundColor: '#EB5629',
    // fontFamily: 'Poppins',
    width: '100%',
    height: '100%',
  },
  day:{
    fontSize: 24,
    marginTop: 35,
    marginBottom: 15
  },
  day_title:{
    textAlign: 'center',
    marginTop: 40,
    fontSize: 40,
    color: '#fff',
  },
  day_containertext:{
    backgroundColor: '#fff',
    width: '80%',
    height: '45%',
    display: 'flex',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 20,
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
  day_titletext:{
    fontSize: 16,
    marginTop: 15,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  day_text:{
    fontSize: 18,
    marginTop: 15,
  }
  
})



export default DetailDay;