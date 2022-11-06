import React from "react";
import { Image, Text, View } from 'react-native';

export default function Home() {
    return (
      <View>
        <Text>Home</Text>
        <Image source={require('../../img/f5_blanco.png')}/>
      </View>
    );
  }