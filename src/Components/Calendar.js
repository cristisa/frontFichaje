import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../styles/Colors'

const Calendar = () => {
  return (
    <View style={styles.fondo}>
      <Image style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  fondo:{
    backgroundColor: Colors.orangebg,
    width: '100%',
    height: '100%',
  },
})



export default Calendar