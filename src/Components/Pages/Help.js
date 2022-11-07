import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Help = () => {
  return (
    <View style={styles.container_help}>
      <Text style={styles.help_title}>Preguntas Frecuentes</Text>
      <View style={styles.help_containertext}>
        <Text style={styles.texthelp}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut orci curabitur euismod aliquam lectus ultrices nunc pretium. Suscipit et neque aenean ultrices cursus id morbi. Risus scelerisque odio nunc congue urna, feugiat suspendisse amet magna. Senectus pharetra et augue fames sit tempor, gravida.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container_help:{
    backgroundColor: '#EB5629',
    // fontFamily: 'Poppins',
    width: '100%',
    height: '100%',
  },
  help_title:{
    textAlign: 'center',
    marginTop: 40,
    fontSize: 30,
    color: '#fff',
  },
  help_containertext:{
    backgroundColor: '#fff',
    width: '80%',
    height: '60%',
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
  texthelp:{
    padding: 20,
    fontSize: 15,
  }
  
})



export default Help;