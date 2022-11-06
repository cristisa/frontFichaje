import { View, Text, Button } from 'react-native'
import React from 'react'

const Prueba = ({ navigation }) => {
  return (
    <View>
      <Text>Prueba</Text>
      <Button title="Go to Home Screen"
      onPress={() => navigation.navigate("Home")}  />
    </View>
  )
}

export default Prueba;