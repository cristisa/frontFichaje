import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const Calendar = () => {
  return (
    <View style={styles.fondo}>
      <Image style={styles.image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  fondo:{
    backgroundColor: '#EB5629',
    width: '100%',
    height: '100%',
  },
})



export default Calendar