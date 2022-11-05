import React from "react";
import { Text, View, StyleSheet, Image, TextInput, Alert } from 'react-native';
import { AppButton } from "./AppButton";
import { Colors } from '.././styles/Colors';

export default function Incidence() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image}/>
          <Text style={styles.headertext}>08:05 am</Text>
        </View>
        <View style={styles.pp}>
          <View style={styles.containercomment}>
            <Text style={styles.comment}>Comentario</Text>
            <TextInput
              multiline={true}
              numberOfLines={10} 
              style={styles.input}
            />
          </View>
            <AppButton 
            onPress={() => Alert.alert('Comentario enviado.')}
            title='Enviar'
            styles={styles.btn}
            color={Colors.white} />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      backgroundColor: '#D9D9D9',
      width: '100%',
      height: '100%',
    },
    header: {
      backgroundColor: Colors.orangebg,
      height: '20%',
    },
    image:{
      width: 500,
    },
    headertext: {
      textAlign: 'center',
      fontSize: 40,
      marginTop: 10,
      color: '#fff',
      fontWeight: 'bold',
    },
    pp:{
      backgroundColor: '#fff',
      width: '80%',
      height: '45%',
      display: 'flex',
      alignItems: 'center',
      marginLeft: 40,
      marginTop: 50,
      borderRadius: 25,
    },
    containercomment:{
      color: '#fff',
      marginTop: 25,
      width: '80%',
    },
    comment:{
      fontSize: 18,
      marginBottom: 10,
      fontWeight: 'bold',
    },
    input:{
      backgroundColor:'#EBEBEB',
      borderColor: '#ADADAD',
      borderWidth: 2,
      borderRadius: 5,
      height: 80,
      textAlignVertical: 'top',
    },
    btn: {
      backgroundColor: '#5870F6',
      color: 'red',
      borderRadius: 25,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 50,
      paddingRight: 50,
      marginTop: 90,
    },
})